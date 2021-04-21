// Get acces to token
require("dotenv").config()
// Capture Webhook Events
const io = require("socket.io-client");
const streamlabs = io(`https://sockets.streamlabs.com?token=${process.env.STREAMLABS_TOKEN}`, {transports: ['websocket']})

// Connect Event
streamlabs.on('connect', () => {
  console.log("Connected!");
})

streamlabs.on("event", eventData => {
  
  // Example Follow Event
  if(eventData.type == "follow"){
    console.log(`${eventData.message[0].name} is now following!`);
  }
  // Example Subscription Event
  else if(eventData.type == "subscription"){
    console.log(`${eventData.message[0].name} subscribed for ${eventData.message[0].months} month${eventData.message[0].months > 1 ? "s": ""}`);
  }
  // Donation Event
  else if(eventData.type == "donation"){
    //console.log(eventData.message[0].message)
    console.log(`${eventData.message[0].name} donated ${eventData.message[0].formatted_amount}`)
    
    // Create Subprocess with Message
    let spawn = require("child_process").execFile;
    spawn('python', ["PressKey.py", eventData.message[0].message.toLowerCase(), ""+eventData.message[0].amount]);
  }
})

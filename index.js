require("dotenv").config()
const io = require("socket.io-client");

const streamlabs = io(`https://sockets.streamlabs.com?token=${process.env.STREAMLABS_TOKEN}`, {transports: ['websocket']})

streamlabs.on('connect', () => {
  console.log("Connected!");
})

streamlabs.on("event", eventData => {
  if(eventData.type == "follow"){
    console.log(`${eventData.message[0].name} is now following!`);
  }
  else if(eventData.type == "subscription"){
    console.log(`${eventData.message[0].name} subscribed for ${eventData.message[0].months} month${eventData.message[0].months > 1 ? "s": ""}`);
  }
  else if(eventData.type == "donation"){
    //console.log(eventData.message[0].message)
    console.log(`${eventData.message[0].name} donated ${eventData.message[0].formatted_amount}`)
    let spawn = require("child_process").execFile;
    spawn('python', ["PressKey.py", eventData.message[0].message.toLowerCase(), ""+eventData.message[0].amount]);
  }
})

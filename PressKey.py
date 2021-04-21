import sys, winsound
from pynput.keyboard import Key, Controller
from time import sleep

keyboard = Controller()

directionConversion = {
    "forward": "w",
    "left": "a",
    "back": "s",
    "right": "d"
}

# Testing Beeps for Events
frequency = 440
duration = 500

# Getting System Arguements
direction = directionConversion[sys.argv[1]]
holdTime = sys.argv[2]

# Press and Hold Button
winsound.Beep(frequency, duration)
keyboard.press("a")
sleep(holdTime)
keyboard.release("a")
winsound.Beep(frequency, duration)

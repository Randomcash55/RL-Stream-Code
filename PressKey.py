import sys, winsound
from pynput.keyboard import Key, Controller
from time import time, sleep

keyboard = Controller()

directionConversion = {
    "forward": "w",
    "left": "a",
    "back": "s",
    "right": "d"
}

frequency = 440
duration = 500

direction = directionConversion[sys.argv[1]]
holdTime = sys.argv[2]

start = time()
winsound.Beep(frequency, duration)
keyboard.press("a")
sleep(holdTime)
keyboard.release("a")
winsound.Beep(frequency, duration)

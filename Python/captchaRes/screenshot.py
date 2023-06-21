from mss import mss, tools as sct

with mss() as sct:
    filename = sct.shot(mon=2)


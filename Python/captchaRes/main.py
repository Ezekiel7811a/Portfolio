import captcha
import cropingScreen as cs
import cv2
import numpy as np
import matplotlib.pyplot as plt
import imageTreatment
import dilatationGeo
from PIL import Image

topLeft = [237, 57]
frame = np.zeros((621, 1240))
boxes = []

image = cv2.imread('machineLearning\\name0.png', cv2.IMREAD_GRAYSCALE)

#pos 1 : 57, 237  -> 296        57 296  -> 117 325
#pos 2 : 117, 207
#pos 3 : 175, 178
#pos 4 : 235, 148

captcha.createLineDiamond(boxes, image, frame, topLeft, lineLength=9)
topLeft[0] += 59 

for i in range (0, 4):
    captcha.createLineDiamond(boxes, image, frame, topLeft, lineLength=11)
    topLeft[0] += 29
    topLeft[1] += 59

frame = image * frame

f, axarr = plt.subplots(2,2)
axarr[0,0].imshow(frame, cmap='gray')
axarr[1,0].imshow(frame, cmap='gray')
axarr[1,1].imshow(image, cmap='ocean_r')
plt.show()

#boxes = np.array(boxes)
for box in boxes:
    print(len(box))
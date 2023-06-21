import cv2
import numpy as np
import matplotlib.pyplot as plt

# image = cv2.imread('allScreen.png', cv2.IMREAD_GRAYSCALE)
# print('image', image.shape)

def cropingImage(left, right, bottom, top, image):
    height = bottom - top + 1
    length = right - left + 1

    newImage = np.zeros((height, length))

    for i in range (int(height)):
        for j in range (int(length)):
            newImage[i, j] = image[top + i, left + j]  

    return newImage



#Position de base : 359, 1598, 870, 249
# newImage = cropingImage(359, 1598, 870, 249, image)

# plt.figure()
# plt.imshow(newImage, cmap='gray')
# plt.show()


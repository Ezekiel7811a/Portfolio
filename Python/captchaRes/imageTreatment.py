import captcha
import cropingScreen as cs
import cv2
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image, ImageEnhance

def treatingImage(image, factor=1.4, treshtype=cv2.THRESH_BINARY, min=240):
    imagePng = Image.fromarray(image)

    enhancer = ImageEnhance.Contrast(imagePng)
    factor = 1.4
    imEnhance = enhancer.enhance(factor)

    image = np.asarray(imEnhance)

    ret, thresh1 = cv2.threshold(image, min, 255, treshtype)

    return thresh1
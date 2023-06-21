import cv2
import matplotlib as plt
import numpy as np
from mss import mss, tools

#Pour l'option center, center = 1 -> centre de 2 lignes, center = 0 -> centre de 1 ligne
def sadDiamond(topLeftPos, image, height, step, frame, center, topLength=2):
    obj = []
    #Le haut du diamant
    for x in range (0, int(height/2)):
        for j in range (0, 2*x*step + topLength):
            #ligne puis colonnes
            frame[topLeftPos[0] + x, topLeftPos[1] - ((x)*step) + j] = 1
            obj.append(frame[topLeftPos[0] + x, topLeftPos[1] - ((x)*step) + j] * image[topLeftPos[0] + x, topLeftPos[1] - ((x)*step) + j])

    count = 0
    #Le bas du diamant
    for x in range(int(height/2)-center, -1, -1):
        for j in range(0, 2*x*step + topLength):
            frame[topLeftPos[0] + count + int(height/2), topLeftPos[1] - ((x)*step) + j] = 1
            obj.append(frame[topLeftPos[0] + count + int(height/2), topLeftPos[1] - ((x)*step) + j] * image[topLeftPos[0] + count + int(height/2), topLeftPos[1] - ((x)*step) + j])
        count += 1
        

    return obj

def createLineDiamond(listObj, image, frame, firstTopLeft=[237, 57], lineLength=9):
    #Création d'un step de 2 car 2 cases différentes
    #Boucle pour les cases BLANCHES
    for i in range (0, lineLength, 2):
        listObj.append(sadDiamond(topLeftPos=[firstTopLeft[0] -int(i/2)*59, firstTopLeft[1] + int(i/2)*118], image=image, height=56, step=2, frame=frame ,center=0, topLength=4))

    #Boucle pour les cases noires
    x = 0
    for i in range (1, lineLength, 2):
        listObj.append(sadDiamond(topLeftPos=[firstTopLeft[0] -30 -x*59, firstTopLeft[1] + 60 + x*118], image=image, height=56, step=2, frame=frame ,center=0, topLength=4))
        x += 1
    
    frame = image * frame



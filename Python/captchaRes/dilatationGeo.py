import numpy as np
import cv2

def dilatationGedesique(image):
    # Définition de la structure d'élément structurant
    kernel = np.ones((3, 3), np.uint8)

    # Recherche des composantes connexes
    contours, hierarchy = cv2.findContours(image, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    # Comptage du nombre de composantes connexes
    object_count = len(contours)
    return object_count
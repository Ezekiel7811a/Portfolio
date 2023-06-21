import requests
from bs4 import BeautifulSoup
import numpy as np
from selenium import webdriver
from unidecode import unidecode
import writing

driver = webdriver.Chrome()

driver.get("https://www.wakfu.com/fr/mmorpg/encyclopedie/classes/1-feca/6972-goutte")
driver.implicitly_wait(2)
soup = BeautifulSoup(driver.page_source, "html.parser")
#----------- CHOISIR LE LVL DES INFOS A GET --------------
lvlSelector = soup.find("div", {"class": "ak-level-selector-target ak-level-230 show"})
# --------- CHOPPER L'IMAGE -----------------
image = lvlSelector.find("img")["src"]
lvlNumber = lvlSelector.find("span", {"class": "ak-spell-nb"}).text.strip()
name = lvlSelector.find("h2", {"class": "ak-spell-name"}).text.strip().split("\n")[0].strip()
paCost = lvlSelector.find("span", {"class": "pa"}).text.strip()
castRange = lvlSelector.find("span", {"class": "costs_range"}).text.strip()
#Condition pour savoir si la ligne de vue ou pas
if (lvlSelector.find("span", {"class": "sight_line"}).find("img")["src"] == "https://static.ankama.com/wakfu/ng/img/encyclo/ligne_not_vu.png"):
    noSight = False
else:
    noSight = True
#Condition pour savoir si portée modifiable
if (lvlSelector.find("span", {"class": "sight_line"}).find("img").find_next("img")["src"] == "https://static.ankama.com/wakfu/ng/img/encyclo/picto_portee_modif.png"):
    rangeModif = True
else:
    rangeModif = False
description = lvlSelector.find("span", {"class": "ak-spell-description"}).text.strip()

#----------- SECTION DOMMAGES --------------------
damageSection = lvlSelector.find("div", {"class": "ak-container ak-content-list ak-displaymode-col"})
damageText = damageSection.find("div", {"class": "ak-list-element"}).find("div", {"class": "ak-title"}).text.split(":")
if damageText[0].strip() == "Dommage":
    damage = damageText[1].strip()
else:
    damage = "no damage"
# ----------- CREATE A JSON --------------------
jsonType = {
    "image":image,
    "lvlnumber":lvlNumber,
    "name":name,
    "paCost":paCost,
    "castRange":castRange,
    "noSight":noSight,
    "rangeModif":rangeModif,
    "description":description,
    "damage":damage
}

filename = "data.json"
writing.writeData(filename, jsonType)
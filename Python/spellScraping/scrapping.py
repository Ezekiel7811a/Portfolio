import requests
from bs4 import BeautifulSoup
import numpy as np
from selenium import webdriver
from unidecode import unidecode
import time
import writing

def getSpellsName(list, element):
    if element == "special":
        elementSpell = divSpells.find("div", {"class": "ak-spell-list-row"})
    else:
        elementSpell = divSpells.find("div", {"class": "ak-elementary-spell-{elem}".format(elem=element)})

    indie = elementSpell.find_all("a")
    for spell in indie:
        string = spell["href"]#.strip().lower()
        # string = string.replace(" ", "-") ------------------ POUR FAIRE UNE TRANSFORMATION
        # string = unidecode(string)
        list.append(string)

def getSpellInfo(href, element):
    time.sleep(1)
    driver = webdriver.Chrome()

    driver.get("https://www.wakfu.com" + href)
    driver.implicitly_wait(2)
    soup = BeautifulSoup(driver.page_source, "html.parser")
    #----------- CHOISIR LE LVL DES INFOS A GET --------------
    if element == "special":
        lvlSelector = soup.find("div", {"class": "ak-level-selector-target ak-level-1 show"})
    else:
        lvlSelector = soup.find("div", {"class": "ak-level-selector-target ak-level-230 show"})
    # --------- CHOPPER L'IMAGE -----------------
    image = lvlSelector.find("img")["src"]
    lvlNumber = lvlSelector.find("span", {"class": "ak-spell-nb"}).text.strip()
    name = lvlSelector.find("h2", {"class": "ak-spell-name"}).text.strip().split("\n")[0].strip()

    if lvlSelector.find("span", {"class": "pa"}):
        paCost = lvlSelector.find("span", {"class": "pa"}).text.strip()
    else: 
        paCost = "0"

    if lvlSelector.find("span", {"class": "wakfu"}):
        wakfuCost = lvlSelector.find("span", {"class": "wakfu"}).text.strip()
    else:
        wakfuCost = "0"

    if lvlSelector.find("span", {"class": "costs_range"}):   
        castRange = lvlSelector.find("span", {"class": "costs_range"}).text.strip()
    else:
        castRange = "0"

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
        damage = damageText[1].strip().split(" ")[0]
    else:
        damage = "no damage"
    # ----------- CREATE A JSON --------------------
    jsonType = {
        "element":element,
        "image":image,
        "lvlnumber":lvlNumber,
        "name":name,
        "paCost":paCost,
        "wakfuCost":wakfuCost,
        "castRange":castRange,
        "noSight":noSight,
        "rangeModif":rangeModif,
        "description":description,
        "damage":damage
    }
    driver.quit()

    return jsonType

def appendSorts(struct, element):
    for id in struct:
        sort = getSpellInfo(id, element)
        sorts.append(sort)

driver = webdriver.Chrome()
url_dpt = "https://www.wakfu.com/fr/mmorpg/encyclopedie/classes/{}"
url_struct = "https://www.wakfu.com/fr/mmorpg/encyclopedie/classes/{}"  

classes = [
    "1-feca",
    "2-osamodas",
    "3-enutrof",
    "4-sram",
    "5-xelor",
    "6-ecaflip",
    "7-eniripsa",
    "8-iop",
    "9-cra",
    "10-sadida",
    "11-sacrieur",
    "12-pandawa",
    "13-roublard",
    "14-zobal",
    "15-ouginak",
    "16-steamer",
    "18-eliotrope",
    "19-huppermage"
]
sorts = []
sortsStructIDWater = []
sortsStructIDFire = []
sortsStructIDEarth = []
sortsStructIDWind = []
sortsStructIDSpecial = []

#Partie driver pour attendre que ça charge
driver.get(url_dpt.format(classes[0]))
driver.implicitly_wait(2)

s = requests.Session()

#response = s.get(url_dpt.format(classes[0])).content
soup = BeautifulSoup(driver.page_source, "html.parser")
#----------------- POUR TROUVER TOUTES LES REFS DE TOUS LES TYPES --------------------------------------------
divSpells = soup.find("div", {"class": "ak-spells-element-line"})
if divSpells.find("div", {"class": "ak-elementary-spell-water"}):
    getSpellsName(sortsStructIDWater, "water")
if divSpells.find("div", {"class": "ak-elementary-spell-fire"}):
    getSpellsName(sortsStructIDFire, "fire")
if divSpells.find("div", {"class": "ak-elementary-spell-earth"}):
    getSpellsName(sortsStructIDEarth, "earth")
if divSpells.find("div", {"class": "ak-elementary-spell-wind"}):
    getSpellsName(sortsStructIDWind, "wind")

divSpells = soup.find("div", {"class": "ak-spells-support ak-ajaxloader"})
getSpellsName(sortsStructIDSpecial, "special")

# -------------------------- POUR METTRE TOUS LES SORTS DANS LE JSON -----------------------------------------
driver.quit()
appendSorts(sortsStructIDWater, "water"); appendSorts(sortsStructIDFire, "fire"); appendSorts(sortsStructIDEarth, "earth")
appendSorts(sortsStructIDWind, "wind"); appendSorts(sortsStructIDSpecial, "special")

writing.writeData("data.json", sorts, indent=2)
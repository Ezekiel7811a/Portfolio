import requests
import json
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

data = json.loads(requests.get('https://wakfu.cdn.ankama.com/gamedata/config.json').content) # obtient la version actuelle
version = data['version']

data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/actions.json').content) # contient les descriptions des types d'effets (perte de PdV, boost de PA, etc)
with open(os.path.join(current_dir, 'actions.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/collectibleResources.json').content) # contient les actions de récolte
with open(os.path.join(current_dir, 'collectibleResources.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/equipmentItemTypes.json').content) # contient les définitions des types d'équipements et des emplacements associés
with open(os.path.join(current_dir, 'equipmentItemTypes.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/harvestLoots.json').content) # contient les objets récupérés via la récolte
with open(os.path.join(current_dir, 'harvestLoots.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/itemProperties.json').content) # contient les propriétés qui peuvent être appliquées à des objets
with open(os.path.join(current_dir, 'itemProperties.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/items.json').content) # contient les données relatives aux items, leurs effets, nom, description, etc.. À croiser avec les données actions, equipmentItemTypes et itemProperties
with open(os.path.join(current_dir, 'items.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/jobsItems.json').content) # contient les données relatives aux items récoltés, craftés et utilisés par les recettes de craft (version light du items.json)
with open(os.path.join(current_dir, 'jobsItems.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/recipeCategories.json').content) # contient la liste des métiers
with open(os.path.join(current_dir, 'recipeCategories.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/recipeIngredients.json').content) # contient les ingrédients des crafts
with open(os.path.join(current_dir, 'recipeIngredients.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/recipeResults.json').content) # contient les objets produits par les crafts
with open(os.path.join(current_dir, 'recipeResults.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/recipes.json').content) # contient la liste des recettes
with open(os.path.join(current_dir, 'recipes.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/resourceTypes.json').content) # contient les types de ressources
with open(os.path.join(current_dir, 'resourceTypes.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/resources.json').content) # contient les ressources 
with open(os.path.join(current_dir, 'resources.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/states.json').content) # contient les traductions des états utilisés par les équipements
with open(os.path.join(current_dir, 'states.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/itemTypes.json').content) # contient les catégories/types des objets du jeu
with open(os.path.join(current_dir, 'itemTypes.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    
data = json.loads(requests.get(f'https://wakfu.cdn.ankama.com/gamedata/{version}/blueprints.json').content) # contient la liste des plans
with open(os.path.join(current_dir, 'blueprints.json'), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
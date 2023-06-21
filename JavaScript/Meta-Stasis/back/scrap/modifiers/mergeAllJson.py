import json

def mergeAllJson(allJson):
    data = []
        
    for elem in allJson:
            data.append(elem)

    with open('back/scrap/modifiers/modifiers.json', 'w', encoding="utf-8") as file:
        json.dump(data, file, indent=1, ensure_ascii=False)
import json

def writeData(filename, data, indent=3):
    try:
        file = open(filename, 'w', encoding='utf-8')
    except:
        file = open(filename, 'x', encoding='utf-8')
    
    # for i in range(len(data)):
    #     file.write(data[i] + '\n')
    json.dump(data, file, indent=indent, ensure_ascii=False)
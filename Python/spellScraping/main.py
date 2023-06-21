import scrapping
import writing

filename = 'data.json'
fileHAD = 'fileHAD.json'

listHAD = scrapping.scrapFNEHAD()
list = scrapping.scrapAdvanced()

writing.writeData(fileHAD, listHAD, indent=2)
writing.writeData(filename, list)
import {
  minLevel,
  maxLevel,
  selectedPositions,
  setSelectedPositions,
  selectedRarities,
  setDisplayedEquipments,
  displayedEquipments,
} from "./BuilderStore";

function FetchingEngine() {


  const searchItems = async () => {

    console.log(selectedPositions)
    let minL;
    let maxL;
    minL = parseInt(minLevel());
    maxL = parseInt(maxLevel());

    let rarities = [];
    let selectedRaritiesCount = 0;
    selectedRarities.rarities.forEach((item) => {
      if (item.selected) {
        rarities.push(item.rarity);
        selectedRaritiesCount++;
      }
    });
    if (selectedRaritiesCount === 0) {
      selectedRarities.rarities.forEach((item) => {
        rarities.push(item.rarity);
      })
    }

    let positions = [];
    let selectPositionsCount = 0
    selectedPositions.positions.forEach((item) => {
      if (item.selected) {
        if (item.position === "unemain") {
          positions.push("une main")
          selectPositionsCount++
          return
        }
        if (item.position === "deuxmains") {
          positions.push("deux mains")
          selectPositionsCount++
          return
        }
        positions.push(item.position)
        selectPositionsCount++
      }
    })
    if (selectPositionsCount === 0) {
      positions = [
        "casque",
        "amulette",
        "plastron",
        "anneau",
        "bottes",
        "cape",
        "epaulettes",
        "ceinture",
        "montures",
        "bouclier",
        "dague",
        "une main",
        "deux mains",
        "emblème",
        "familiers",
        "outil",
      ]
    }

    // console.log(minL)
    // console.log(maxL)
    // console.log(rarities)
    console.log(positions)

    const requestBody = {
      queryType: "getEquipmentsByEverything",
      minLvl: minL,
      maxLvl: maxL,
      rarities: rarities,
      positions: positions
    };


    await fetch("http://localhost:3000/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setDisplayedEquipments(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <div className="flex h-fit w-full items-center justify-evenly p-1 text-white">
      <button class="bg-slate-900 w-16 h-8 text-center border-slate-500 bg-solid border-2 rounded-md" onClick={searchItems}>Search</button>
    </div>
  )


}
export default FetchingEngine

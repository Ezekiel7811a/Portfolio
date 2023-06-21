const resultsDiv = document.getElementById("results");
const languageSelector = document.getElementById("language");
const outputDiv = document.getElementById("output");
outputDiv.textContent = "fr";
languageSelector.addEventListener("change", function (event) {
  outputDiv.textContent = languageSelector.value;
});
document
  .getElementById("getEquipmentByIdForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const id = document.getElementById("id").value;
    const requestBody = {
      queryType: "getEquipmentById",
      singleId: id,
    };
    fetch("http://localhost:3000/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // handle response data here
      })
      .catch((error) => {
        console.error(error);
        // handle error here
      });
  });
document
  .getElementById("getEquipmentsByNameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const language = outputDiv.textContent;
    const requestBody = {
      queryType: "getEquipmentsByName",
      equipmentName: name,
      lang: language,
    };
    fetch("http://localhost:3000/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        displayResults(data);

        // handle response data here
      })
      .catch((error) => {
        console.error(error);
        // handle error here
      });
  });

function displayResults(data) {
  resultsDiv.innerHTML = "";
  data.forEach((equipment) => {
    const equipmentDiv = document.createElement("div");
    const title = document.createElement("h2");
    const rarity = document.createElement("p");
    const level = document.createElement("p");
    const type = document.createElement("p");
    const description = document.createElement("p");
    const statistics = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = equipment.titleFR;
    rarity.textContent = `Rareté : ${equipment.rarity}`;
    level.textContent = `Niveau : ${equipment.level}`;
    type.textContent = `Type : ${equipment.positionFR}`;
    description.textContent = `Description : ${equipment.descriptionFR}`;
    statistics.innerHTML = equipment.equipEffects
      .map((effect) =>
        effect.fr
          .replace("[#1]", effect.params[0])
          .replace("[#2]", effect.params[1])
          .replace("[#3]", effect.params[2])
      )
      .join("<br>");
    image.src = `https://vertylo.github.io/wakassets/items/${equipment.gfxId}.png`;
    equipmentDiv.appendChild(title);
    equipmentDiv.appendChild(image);
    equipmentDiv.appendChild(type);
    equipmentDiv.appendChild(level);
    equipmentDiv.appendChild(rarity);
    equipmentDiv.appendChild(statistics);
    equipmentDiv.appendChild(description);
    resultsDiv.appendChild(equipmentDiv);
  });
}


export function fetchModifiers(modifierOrigin, set) {
    const requestBody = {
        queryType: "getModifierByOrigin",
        modifierOrigin: modifierOrigin,
        lang:"fr"
      };

    fetch("http://localhost:3000/modifiers", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    })
    .then((response) => response.json())
    .then((data) => {
        set(data)
        // handle response data here
    })
    .catch((error) => {
        console.error(error);
        // handle error here
    });
}

export function fetchSpells(classID, set) {
    const requestBody = {
        queryType: "getSpellsByClass",
        class: classID,
        lang: "fr"
      };

    fetch("http://localhost:3000/spells", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    })
    .then((response) => response.json())
    .then((data) => {
        set(data)
        // handle response data here
    })
    .catch((error) => {
        console.error(error);
        // handle error here
    });
}
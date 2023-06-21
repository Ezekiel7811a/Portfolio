import { onMount } from "solid-js";
import { selectedRarities, setSelectedRarities } from "./BuilderStore";

function RaritySelector() {
    onMount(() =>
        selectedRarities.rarities.forEach(e => {
            if (e.selected) {
                document.querySelector(`[rarity = "${e.rarity}"]`).classList.remove("opacity-25");
            }
        })
    )

    const selectRarityHandler = (e) => {
        if (e.currentTarget.classList.contains("opacity-25")) {
            e.currentTarget.classList.remove("opacity-25")
        } else {
            e.currentTarget.classList.add("opacity-25")
        }
        setSelectedRarities("rarities", [(parseInt(e.currentTarget.getAttribute('rarity')) - 1)], "selected", s => !s)
    }

    return (
        <div className="flex h-fit w-full items-center justify-evenly p-1">
            <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" rarity="1" onClick={selectRarityHandler} >
                <img src="https://vertylo.github.io/wakassets/rarities/1.png" alt="1" />
            </div>
            <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" rarity="2" onClick={selectRarityHandler} >
                <img src="https://vertylo.github.io/wakassets/rarities/2.png" alt="2" />
            </div>
            <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" rarity="3" onClick={selectRarityHandler} >
                <img src="https://vertylo.github.io/wakassets/rarities/3.png" alt="3" />
            </div>
            <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" rarity="4" onClick={selectRarityHandler} >
                <img src="https://vertylo.github.io/wakassets/rarities/4.png" alt="4" />
            </div>
            <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" rarity="5" onClick={selectRarityHandler} >
                <img src="https://vertylo.github.io/wakassets/rarities/5.png" alt="5" />
            </div>
            <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" rarity="6" onClick={selectRarityHandler} >
                <img src="https://vertylo.github.io/wakassets/rarities/6.png" alt="6" />
            </div>
            <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" rarity="7" onClick={selectRarityHandler} >
                <img src="https://vertylo.github.io/wakassets/rarities/7.png" alt="7" />
            </div>
        </div>
    );
}

export default RaritySelector

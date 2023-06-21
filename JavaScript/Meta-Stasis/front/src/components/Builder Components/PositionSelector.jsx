import { onMount } from "solid-js";
import { selectedPositions, setSelectedPositions } from "./BuilderStore";

function PositionSelector() {


    onMount(() =>
        selectedPositions.positions.forEach(item => {
            if (item.selected) {
                document.querySelector(`[position=${item.position}]`).classList.remove("opacity-25");
            }
        })
    )

    const selectPositionHandler = (e) => {
        console.log(e.currentTarget)
        if (e.currentTarget.classList.contains("opacity-25")) {
            e.currentTarget.classList.remove("opacity-25")
        } else {
            e.currentTarget.classList.add("opacity-25")
        }
        setSelectedPositions("positions", obj => obj.position === e.currentTarget.getAttribute("position"), "selected", s => !s)
        console.log(selectedPositions)
    }

    return (
        <>
            <div className="text-white flex h-fit w-full items-center justify-evenly p-1">
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="casque" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/134.png" alt="casque" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="amulette" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/120.png" alt="amulette" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="plastron" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/136.png" alt="plastron" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="anneau" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/103.png" alt="anneau" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="bottes" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/119.png" alt="bottes" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="cape" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/132.png" alt="cape" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="epaulettes" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/138.png" alt="epaulettes" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="ceinture" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/133.png" alt="ceinture" />
                </div>
            </div>
            <div className="text-white flex h-fit w-full items-center justify-evenly p-1">
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="montures" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/611.png" alt="montures" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="bouclier" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/520.png" alt="bouclier" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="dague" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/571.png" alt="dague" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="unemain" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/518.png" alt="unemain" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="deuxmains" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/519.png" alt="deuxmains" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="emblème" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/646.png" alt="emblème" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="familiers" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/582.png" alt="familiers" />
                </div>
                <div className="opacity-25 bg-slate-900 border-white border-solid border-2 w-8 h-8 justify-center flex rounded-md" position="outil" onClick={selectPositionHandler} >
                    <img src="https://vertylo.github.io/wakassets/itemTypes/537.png" alt="outil" />
                </div>
            </div>
        </>
    );
}
export default PositionSelector
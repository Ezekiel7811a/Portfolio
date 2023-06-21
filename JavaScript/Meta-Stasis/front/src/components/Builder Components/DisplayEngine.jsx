import { displayedEquipments } from "./BuilderStore";

function DisplayEngine() {

    return (
        <div className="h-full flex flex-wrap overflow-auto scrollbar-thin content-start">
            {displayedEquipments() === undefined ? (
                <div></div>
            ) : (
                <For each={displayedEquipments()}>{(equipment) =>
                    <div className="bg-slate-800 border-solid border-2 border-slate-600 rounded-md w-28 h-16 flex flex-col justify-evenly text-xs text-slate-200">
                        <div className="flex">
                            <img className="w-8" src={`https://vertylo.github.io/wakassets/items/${equipment.gfxId}.png`} />
                            <a href="">{equipment.titleFR}</a>
                        </div>
                        <div className="flex items-center justify-evenly">
                            <img classname="" src={`https://vertylo.github.io/wakassets/rarities/${equipment.rarity}.png`} />
                            <span>{equipment.positionFR}</span>
                            <div>lvl {equipment.level}</div>
                        </div>
                        {/* <ul>
                            <For each={equipment.equipEffects}>{(effect) =>
                                // <li>{effect.fr}</li>
                            }
                            </For>
                        </ul> */}
                    </div>
                }
                </For>
            )}
        </div>
    );
}
export default DisplayEngine

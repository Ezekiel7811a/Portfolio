import { checkedSpell, spellValue } from "./CalculatorStore"
import { Image } from "@hope-ui/solid"
import { createEffect } from "solid-js"

function DisplaySpell() {

    return(
        <div class={checkedSpell() === "" ? "hidden bg-gray-200" : "p-5 show bg-gray-200 text-xl justify-items-center"}>
        {checkedSpell() !== "" ? (
            <div>
                <Image 
                boxSize="$28"
                src={`https://vertylo.github.io/wakassets/spells/${checkedSpell()}.png`}
                objectFit="cover"
                class={checkedSpell() === "" ? "hidden" : "show"}
                /> 
                {"Dommages : "}{spellValue.value} 
            </div> 
        ) : (
            <div></div>
        )}
        </div>
    )
}

export default DisplaySpell
import { createSignal } from "solid-js";
import { Image } from "@hope-ui/solid"
import { checkedSpell, setCheckedSpell, spellValue, setSpellValue } from "./CalculatorStore";

function ButtonClickable(props) {
    const { name, id, damage } = props
    //--------------- RENDRE LES ELEMS CLAIRS EN CLIQUANT ------------------------------------

    function handleClick() {
        if (checkedSpell() === id)
            {setCheckedSpell(""),
            setSpellValue({"value": 0})}
            
        else {
            setCheckedSpell(id),
            setSpellValue({"value": parseInt(damage)})
        }
    }

    // const imgClass = () => {name === checkedSpell() ? "hover:brightness-110 bg-gray-300" : "hover:brightness-110 bg-gray-100"};

    return(
        <button 
            onClick={handleClick}
            class={id === checkedSpell() ? "hover:brightness-110 bg-gray-400 p-2 max-h-20" : "hover:brightness-110 bg-gray-100 p-2 grow-0 max-h-20"}>
                <Image 
                boxSize="$16" 
                src={`https://vertylo.github.io/wakassets/spells/${id}.png`}
                objectFit="cover"
                />
        </button>
    )
}

export default ButtonClickable
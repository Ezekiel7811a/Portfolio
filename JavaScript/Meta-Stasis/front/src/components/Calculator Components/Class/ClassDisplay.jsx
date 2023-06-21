import { Image } from "@hope-ui/solid"
import { createEffect } from "solid-js"
import { selectedTeam } from "../CalculatorStore"
import ClassButton from "./ClassButton"
import ClassDisplayedButton from "./ClassDisplayedButton"


// {(elem) => (
//     <button>
//         <Image 
//         boxSize="$16" 
//         src={`https://vertylo.github.io/wakassets/spells/1.png`}
//         objectFit="cover"
//         />
//         <span className="absolute bottom-0 left-0">{elem.value}</span>
//     </button>
// )}flex flex-wrap gap-2 h-56 w-68 overflow-y-auto justify-items-center bg-gray-200 max-w-4xl h-64 flex-initial

function ClassDisplay() {

    return(
        <div class={"flex flex-wrap gap-2 bg-gray-100 justify-items-center bg-gray-200"}>
            <For each={selectedTeam}>
                {(elem, index) => (
                <ClassDisplayedButton className={elem.value} index={index}/>)}
            </For>
        </div>
        
    )
}

export default ClassDisplay
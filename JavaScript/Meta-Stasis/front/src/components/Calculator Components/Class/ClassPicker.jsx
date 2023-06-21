import { classes } from "../CalculatorStore"
import ClassButton from "./ClassButton"

function ClassPicker() {

    return(
        <div class="flex flex-wrap gap-2 h-56 w-68 overflow-y-auto justify-items-center bg-gray-200 max-w-4xl h-64 flex-initial">
            <For each={classes()}>
                {(elem) => (
                <ClassButton className={elem} />)}
            </For>
        </div>
    )
}

export default ClassPicker
import { selectedTeam, setSelectedTeam } from "../CalculatorStore"
import { Image } from "@hope-ui/solid"

function ClassDisplayedButton(props) {
    const { className, index } = props

    function handleClick() {
        const newSelected = selectedTeam.filter((elem, i) => i !== index())
        setSelectedTeam(newSelected)
        console.log(index)
    }

    return(
        <button 
            onClick={handleClick}
            class={"hover:brightness-110 bg-gray-100 p-2 grow-0 max-h-20 overflow-hidden relative"}>
                <Image 
                boxSize="$16" 
                src={`https://vertylo.github.io/wakassets/spells/1.png`}
                objectFit="cover"
                />
                <span className="absolute bottom-0 left-0">{className}{index}</span>
        </button>
    )
}

export default ClassDisplayedButton
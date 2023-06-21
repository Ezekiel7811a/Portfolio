import { createSignal, For } from 'solid-js';
import { modifierValue, setModifierValue } from './CalculatorStore';
import { fetchModifiers } from './Fetching';
import { Image } from "@hope-ui/solid"

function Modifiers() {
    
        //--------------------- PARTIE POUR LES MODIFIERS ---------------------------------
        const [modifiers, setModifiers] = createSignal([])

        fetchModifiers("feca", setModifiers)
        //--------------------- PARTIE POUR LES MODIFIERS ---------------------------------
    

    const [checkedValues, setCheckedValues] = createSignal([]);

    function handleCheckboxChange(event) {
    const value = Number(event.target.value);
    if (event.target.checked) {
        setCheckedValues([...checkedValues(), value]);
    } else {
        setCheckedValues(checkedValues().filter((num) => num !== value));
    }
        const sum = checkedValues().reduce((acc, cur) => acc + cur, 0);
        setModifierValue({"value" : sum})
    }

    return (
        <div>
            <ul>
                <For each={Array.from(modifiers())}>
                    {(modifier) => (
                    <li>
                        <Image 
                        boxSize="$16" 
                        src={`https://vertylo.github.io/wakassets/spells/${modifier.id}.png`}
                        objectFit="cover"
                        />
                        {modifier.name.fr}{" "}{modifier.spellEffects.percentDamage} <input 
                            type="checkbox"
                            value={modifier.spellEffects.percentDamage}
                            checked={checkedValues().includes(modifier.spellEffects.percentDamage)} 
                            onChange={handleCheckboxChange}
                        ></input>      
                    </li>)}
                </For>
            </ul>
        </div>
    )
}

export default Modifiers
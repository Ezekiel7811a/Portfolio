import { createEffect, createSignal, For } from 'solid-js';
import { classValue, spellValue, setSpellValue } from '../Calculator Components/CalculatorStore';
import { fetchSpells } from './Fetching';
import ButtonClickable from './ButtonClickable';

function Deck() {
    const [spells, setSpells] = createSignal(new Set())

    // ------------------------ FETCHING ------------------------------- 

    createEffect(() => {
        fetchSpells(classValue.value, setSpells)
    })

    // ------------------------ FETCHING ------------------------------

    return (
        <div class="flex flex-wrap gap-2 h-56 w-68 overflow-y-auto justify-items-center bg-gray-200 max-w-4xl h-64 flex-initial">
            <For each={Array.from(spells())}>
                {(spell) => (
                    <ButtonClickable name={spell.name} id={spell.id} damage={spell.damage} />
                )}
            </For>
        </div>
    )
}

export default Deck
import { createEffect } from "solid-js";
import { minLevel, setMinLevel, maxLevel, setMaxLevel } from "./BuilderStore";


function LevelSelector() {

    createEffect(() =>
        localStorage.setItem(`minLevelBuilderSearch`, JSON.stringify(parseInt(minLevel())))
    )
    createEffect(() =>
        localStorage.setItem(`maxLevelBuilderSearch`, JSON.stringify(parseInt(maxLevel())))
    )

    const handleMinLevel = (e) => {

        !isNaN(e.currentTarget.value) && Math.sign(e.currentTarget.value) || e.currentTarget.value == 0 //check if value is a positive number
            ? setMinLevel(e.currentTarget.value) //if true accepts requested value
            : e.currentTarget.value = minLevel()

        parseInt(e.currentTarget.value) > parseInt(maxLevel())
            ? setMinLevel(maxLevel())
            : e.currentTarget.value = minLevel()

        // parseInt(e.currentTarget.value) == 0
        //     ? setMinLevel()
        //     : e.currentTarget.value = minLevel()
    }

    const handleMinLevelFocus = (e) => {
        e.currentTarget.value.length == 0
            ? setMinLevel(0)
            : e.currentTarget.value = minLevel()

        e.currentTarget.value = e.currentTarget.value * 1
    }

    const handleMaxLevel = (e) => {
        !isNaN(e.currentTarget.value) && Math.sign(e.currentTarget.value) || e.currentTarget.value == 0
            ? setMaxLevel(e.currentTarget.value)
            : e.currentTarget.value = maxLevel()

        e.currentTarget.value > 230
            ? setMaxLevel(230)
            : e.currentTarget.value = maxLevel()

    }
    const handleMaxLevelFocus = (e) => {

        if (e.currentTarget.value === "") {
            setMaxLevel(minLevel())
        }
        if (parseInt(maxLevel()) <= parseInt(minLevel())) {
            setMaxLevel(minLevel())
        }
        e.currentTarget.value = maxLevel()
    }

    return (
        <div className="text-white flex h-fit w-full items-center justify-evenly p-1">
            <input class="bg-slate-900 w-16 h-8 text-center border-slate-500 bg-solid border-2 rounded-md" value={minLevel()} onInput={handleMinLevel} onfocusout={handleMinLevelFocus} on:DOMContentLoaded={handleMinLevelFocus} />
            <span class="relative -top-0.5">-</span>
            <input class="bg-slate-900 w-16 h-8 text-center border-slate-500 bg-solid border-2 rounded-md" value={maxLevel()} onInput={handleMaxLevel} onfocusout={handleMaxLevelFocus} on:DOMContentLoaded={handleMinLevelFocus} />
        </div>
    );
}

export default LevelSelector

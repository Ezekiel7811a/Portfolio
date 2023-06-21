import {
    Select,
    SelectTrigger,
    SelectPlaceholder,
    SelectValue,
    SelectTag,
    SelectTagCloseButton,
    SelectIcon,
    SelectContent,
    SelectListbox,
    SelectOptGroup,
    SelectLabel,
    SelectOption,
    SelectOptionText,
    SelectOptionIndicator,
  } from "@hope-ui/solid"
import { classValue, setClassValue, setMaitriseValue, setDIValue, classes } from '../Calculator Components/CalculatorStore';
import { createSignal } from "solid-js"

function WrittenStats() {

    const [value, setValue] = createSignal("")

    //value={classValue()} onChange={setClassValue}
    return (
        <div class="space-y-2">
            <div>
                <Select value={value()} onChange={(value) => {
                    setClassValue({ "value": value })
                }}>
                    <SelectTrigger rounded="$none">
                        <SelectPlaceholder>Choisissez votre classe</SelectPlaceholder>
                        <SelectValue />
                        <SelectIcon />
                    </SelectTrigger>
                    <SelectContent rounded="$none">
                        <SelectListbox>
                            <For each={classes()}>
                                {item => (
                                    <SelectOption value={item}>
                                        <SelectOptionText>{item}</SelectOptionText>
                                        <SelectOptionIndicator />
                                    </SelectOption>
                                )}
                            </For>
                        </SelectListbox>
                    </SelectContent>
                </Select>
            </div>
            <div><span>Total maitrise </span>
                <input type="number" min="0" value={0} onInput={(e) => setMaitriseValue({ "value": e.target.value })}>Test</input></div>
            <div><span>Total dégats infligés </span>
                <input type="number" min="0" value={0} onInput={(e) => setDIValue({ "value": e.target.value })}>Test</input></div>
        </div>
    )
}

export default WrittenStats
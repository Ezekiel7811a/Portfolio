import { resistanceValue, setResistanceValue } from "./CalculatorStore"

function MonsterStats() {
    const pourcentRes = (fixeRes) => {
        return (1 - (Math.pow(.8, (fixeRes / 100)))) * 100
    }

    setResistanceValue({
        "waterPourcent":parseInt(pourcentRes(resistanceValue.water)),
        "firePourcent":parseInt(pourcentRes(resistanceValue.fire)),
        "earthPourcent":parseInt(pourcentRes(resistanceValue.earth)),
        "windPourcent":parseInt(pourcentRes(resistanceValue.wind))
    })

    return(
        <div>
            <div>Résistances
                <div>Eau : {resistanceValue.water} {"("}{resistanceValue.waterPourcent}{"%)"}</div>
                <div>Terre : {resistanceValue.earth} {"("}{resistanceValue.earthPourcent}{"%)"}</div>
                <div>Air : {resistanceValue.wind} {"("}{resistanceValue.windPourcent}{"%)"}</div>
                <div>Feu : {resistanceValue.fire} {"("}{resistanceValue.firePourcent}{"%)"}</div>
            </div>
        </div>
    )
}

export default MonsterStats
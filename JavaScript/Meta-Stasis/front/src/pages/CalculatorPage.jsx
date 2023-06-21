import { createSignal, createEffect } from 'solid-js';
import Background from '../components/Base Components/Background';
import Header from '../components/Base Components/Header';
import Footer from '../components/Base Components/Footer';
import Deck from '../components/Calculator Components/Deck';
import Modifiers from '../components/Calculator Components/Modifiers';
import WrittenStats from '../components/Calculator Components/WrittenStats';
import MonsterDisplay from '../components/Calculator Components/MonsterDisplay';
import MonsterStats from '../components/Calculator Components/MonsterStats';
import { maitriseValue, DIValue, resistanceValue, spellValue, modifierValue, checkedSpell } from '../components/Calculator Components/CalculatorStore';
import DisplaySpell from '../components/Calculator Components/DisplaySpell';
import PanelContainer from '../components/Base Components/PanelContainer';
import ClassPicker from '../components/Calculator Components/Class/ClassPicker';
import ClassDisplay from '../components/Calculator Components/Class/ClassDisplay';

function CalculatorPage() {
    const [result, setResult] = createSignal(0)
    
    //------------------------------- PARTIE POUR LE CALCUL DES DAMAGES ---------------------------
    createEffect(() => {
        setResult(spellValue.value * (modifierValue.value / 100 + 1) * (maitriseValue.value / 100 + 1) * (DIValue.value / 100 + 1) * (1 - resistanceValue.waterPourcent / 100))
    })
    //------------------------------- PARTIE POUR LE CALCUL DES DAMAGES ---------------------------

    return (
        <Background imageUrl="../../src/assets/backgroundstasis2560x1440.jpg">
            <Header />
            <div class='flex flex-col flex-grow overflow-auto'>
                <div class="flex bg-slate-300 opacity-80 p-4 ml-10 mr-10 h-80 rounded-md">
                        <PanelContainer panelName={"1"} panelStyle={"bg-gray-200"}>
                            <ClassPicker />
                            <ClassDisplay />
                        </PanelContainer>
                </div>  
                <div class="flex bg-slate-300 opacity-80 p-4 ml-10 mr-10 h-80 mt-10 rounded-md" >
                        <PanelContainer panelName={"2"} panelStyle={"bg-gray-200"}>
                            <WrittenStats />
                            <Deck />
                            <DisplaySpell />
                            <Modifiers />
                        </PanelContainer>                        
                </div>
                <div class="flex justify-between bg-slate-300 opacity-80 p-4 ml-10 mr-10 mt-10 rounded-md" >
                        <MonsterDisplay />
                        <MonsterStats />
                </div>
                <div class="flex justify-between bg-slate-300 opacity-80 p-4 ml-10 mr-10 mt-10 rounded-md" >
                        <div>{parseInt(result())}</div>
                </div>            
            </div>            
            <Footer lang="fr" />
        </Background>
    );
}

export default CalculatorPage
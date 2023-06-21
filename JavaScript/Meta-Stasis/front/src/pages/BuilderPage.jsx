import "../components/Builder Components/builder.css"
import Background from '../components/Base Components/Background';
import Header from '../components/Base Components/Header';
import Footer from '../components/Base Components/Footer';
import PanelContainer from "../components/Base Components/PanelContainer";
import SearchEngine from "../components/Builder Components/SearchEngine";
import TabContainer from "../components/Base Components/TabContainer";


function BuilderPage() {

    return (
        <Background imageUrl="../../src/assets/backgroundbuilder2560x1440.jpg">
            <Header />
            <PanelContainer panelName={"builderPanel"} panelStyle={'bg-slate-900/40 rounded-md h-full'}>
                <TabContainer tabContainerName={"builderLeftPanelTabs"} tabs={[
                    { label: "⚔️", component: SearchEngine },
                    { label: "📖", component: <div>Contenu du Tab 2</div> },
                    { label: "📜", component: <div>Contenu du Tab 3</div> },
                ]} />
                <div></div>
                <div></div>
            </PanelContainer>
            <Footer lang="fr" />
        </Background >
    );
}

export default BuilderPage;




import PanelContainer from "../Base Components/PanelContainer";
import DisplayEngine from "./DisplayEngine";
import RequestEngine from "./RequestEngine";


const SearchEngine = () => {

    return (
        <PanelContainer panelName={"searchEnginePanel"} panelStyle={"select-none rounded-md bg-black/70 h-full"}>
            <RequestEngine />
            <DisplayEngine />
        </PanelContainer>
    );
}
export default SearchEngine


// search section : we need a text search to search by name, rarity filter, equipment type filter, statistics type filter those should all be combinable
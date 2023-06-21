import { createSignal } from 'solid-js';

const TabContainer = (props) => {

    const [activeTab, setActiveTab] = createSignal(JSON.parse(localStorage.getItem(`${props.tabContainerName}StoredActive`)) || props.tabs[0].label);
    const handleMouseClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem(`${props.tabContainerName}StoredActive`, JSON.stringify(tab));
    };

    return (
        <div class="flex cursor-default flex-col h-full m-0">
            <div class="select-none text-center h-1/20 items-center flex">
                <For each={props.tabs}>
                    {(tab) =>
                        <div
                            class={activeTab() === tab.label ?
                                "bg-slate-900 brightness-150 rounded-md flex-grow mt-1 mr-1 ml-1"
                                : "bg-slate-900 opacity-40 rounded-md flex-grow mt-1 mr-1 ml-1"}
                            onMouseDown={() => handleMouseClick(tab.label)}
                        >
                            {tab.label}
                        </div>
                    }
                </For>
            </div>
            <For each={props.tabs}>
                {(tab) =>
                    <div class={activeTab() === tab.label ? "flex m-1 h-19/20" : "hidden"}>
                        {tab.component}
                    </div>
                }
            </For>


        </div>
    );
};

export default TabContainer
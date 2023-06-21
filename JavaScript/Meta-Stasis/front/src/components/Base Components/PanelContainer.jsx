import { createSignal, createEffect, createMemo, onMount } from 'solid-js';
import { createElementBounds } from "@solid-primitives/bounds";
import { throttle } from "@solid-primitives/scheduled";

const PanelContainer = ({ children, panelName, panelStyle }) => {

    // it should also have a name so that the localStorage can store it independently of other PanelContainers in the website. It can have a style for its child divs.
    let parentElement
    onMount(() => {

        const throttleUpdate = fn => throttle(fn, 16);
        const parentBounds = createElementBounds(parentElement, { trackMutation: throttleUpdate, trackScroll: throttleUpdate, trackResize: throttleUpdate });

        const onMouseUp = () => { setIsResizing(false) }

        createEffect(() => {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            return () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };
        });

        const onMouseMove = (e) => {
            if (isResizing()) {
                const { index, x } = isResizing();
                const delta = e.clientX - x;
                const newPositions = [...separatorPositions()];
                newPositions[index] = newPositions[index] + (delta / parentBounds.width) * 100;
                setSeparatorPositions(newPositions);
                setIsResizing({ index, x: e.clientX });
            }
        }
    })

    const [isResizing, setIsResizing] = createSignal(false);
    const [separatorPositions, setSeparatorPositions] = createSignal(
        JSON.parse(localStorage.getItem(`${panelName}SeparatorPositions`)) || new Array(children.length).fill(0).map((_, i) => ((i + 1) * 100) / (children.length))
    );

    const elements = createMemo(() => {
        let remainingWidth = 100;
        return children.map((child, i) => {
            const width = i === children.length - 1
                ? remainingWidth
                : separatorPositions()[i] - (i === 0 ? 0 : separatorPositions()[i - 1]);
            remainingWidth -= width;
            return [
                <div className={panelStyle} style={{ width: `${width}%` }}>
                    {child}
                </div>,
                i < children.length - 1 && (
                    <div
                        class="w-1 m-1 cursor-col-resize opacity-60 bg-gray-700 rounded-md"
                        style={{ left: `${separatorPositions()[i]}%` }}
                        onmousedown={(e) => setIsResizing({ index: i, x: e.clientX })}
                    ></div>
                )
            ];
        }).concat();
    }, [children, separatorPositions]);

    createEffect(() => {
        localStorage.setItem(`${panelName}SeparatorPositions`, JSON.stringify(separatorPositions()));
    });

    return (
        <div ref={parentElement} className='flex w-full h-full'>
            {elements}
        </div>
    );
};
export default PanelContainer;
import { fadeIn } from "../../animations/basicAnimations";
function Background(props) {
    const { children, imageUrl } = props;
    return (
        <div className="bg-black bg-center cover h-screen w-screen">
            <div use:fadeIn class="h-screen w-screen bg-center bg-cover" style={`background-image: url(${imageUrl})`}>
                <div className="contentContainer flex justify-between ml-1 mr-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Background;
import React from "react";
import Data3 from "./Data3";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = React.useState(false);
    const [onceVisible, setOnceVisible] = React.useState(false);
  
    React.useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !onceVisible) {
                setIntersecting(true);
                setOnceVisible(true);
            }
        });
      
        if (ref.current) {
            intersectionObserver.observe(ref.current);
        }
      
        return () => {
            if (ref.current) {
                intersectionObserver.unobserve(ref.current);
            }
        };
    }, [ref, onceVisible]);
  
    return isIntersecting;
}

export default function Demos() {

    const [demos, setDemos] = React.useState(Data3);

    const ref1 = React.useRef();
    const isVisible1 = useIsVisible(ref1);

    return(
        <div className="pt-[120px] pb-[120px]">
            <div ref={ref1} className={`text-center text-4xl font-bold pb-20 md:text-[55px] md:leading-tight ${isVisible1 ? "header-slider" : ""}`}>
                <h1>Carefully crafted.</h1>
                <h1>Woocommerce Demos.</h1>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 min-[992px]:grid-cols-4">
                {demos.map(demos => (
                    <div key={demos.id} className="w-[95%] mx-auto p-4 border-[#2f2f2f] border rounded-lg relative temp">
                        {demos.new === "yes" && <div className="absolute right-0 bg-red-600 w-[50px] text-center font-bold text-sm float-right py-1">New</div>}
                        <a href={demos.link}>
                            <img src={demos.coverImg} alt={demos.title} className="rounded-md" />
                            <h1 className="text-center font-semibold text-[20px] mt-3 mb-2">{demos.title}</h1>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

import React from "react";

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

export default function Card() {

    const ref1 = React.useRef();
    const isVisible1 = useIsVisible(ref1);

    return(
        <div className="absolute z-10 right-0 bottom-[145px] -left-28 min-[992px]:bottom-[105px]">
            <div className="h-[420px] pt-16 bg-[#1f1f1f] tracking-wider pl-28 md:flex md:h-[315px] md:w-[850px] min-[992px]:h-[400px] min-[992px]:w-[1100px] min-[1200px]:w-[1270px] min-[1200px]:space-x-40 min-[1400px]:w-[1470px] min-[1400px]:space-x-80">
                <div ref={ref1} className={`md:ml-12 md:w-[470px] min-[992px]:w-fit min-[992px]:mt-12 ${isVisible1 ? "header-slider" : ""}`}>
                    <h1 className="text-3xl font-bold md:text-[40px] min-[992px]:text-[55px] leading-[40px] md:leading-[55px] min-[992px]:leading-[85px]">Build a stunning site today.</h1>
                    <h1 className="text-3xl font-bold md:text-[40px] min-[992px]:text-[55px] md:leading-[55px]">Let’s <span className="text-[42px] md:text-[55px] min-[992px]:text-[75px] font-normal tracking-normal font-['Brush_Script_MT']">get to work.</span></h1>
                </div>
                <div className="mt-12 w-fit h-fit mx-auto rounded-full md:mt-4 md:ml-0 min-[992px]:mt-16">
                    <a href="https://themeforest.net/checkout/102782331/create_account?clickid=z8bxQtV2cxyPRPUxoCTql0XVUkHX6LUPcVO63Q0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=3544009&mp_value1=&utm_campaign=af_impact_radius_3544009&utm_medium=affiliate&utm_source=impact_radius">
                        <button className="last w-40 h-40 relative flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#9ed300] before:duration-300 before:ease-out hover:before:h-40 hover:before:w-40">
                            <div className="block">
                                <img src="https://cdn-icons-png.flaticon.com/256/510/510682.png" className="invert rotate-180 w-3.5 mx-auto mb-2" />
                                <p className="relative">PURCHASE</p>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

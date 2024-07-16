import React from "react";
import Data2 from "./Data2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Inner() {

    const [inner, setInner] = React.useState(Data2);

    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="bg-[#1f1f1f] pb-[85px]">
            <div className="pt-32">
                <link href="https://fonts.cdnfonts.com/css/uniqloves-hollow" rel="stylesheet"></link>
                <link href="https://fonts.cdnfonts.com/css/bill-gates-windows" rel="stylesheet"></link>
                <div className="container">
                    <div className="slope">
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                    </div>
                    <div className="slope">
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                    </div>
                    <div className="slope">
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                        <h1 className="text-[9vw] text-[#5d5d5d] font-['Uniqloves_Hollow']"><span className="align-middle font-['BILL_GATES_WINDOWS']">+</span> 25 Inner Pages</h1>
                    </div>
                </div>
            </div>
            <div className="mt-32 ml-3">
                <Slider {...settings}>
                    {inner.map(inner => (
                        <div key={inner.id} className="p-6">
                            <a href={inner.link}>
                                <img src={inner.coverImg} alt={inner.title} className="rounded-xl" />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

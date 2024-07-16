import React from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isHomeOpen, setIsHomeOpen] = React.useState(false);
    const [isPageOpen, setIsPageOpen] = React.useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = React.useState(false);
    const [isBlogOpen, setIsBlogOpen] = React.useState(false);
    const [isShopOpen, setIsShopOpen] = React.useState(false);
    const [isGridOpen, setIsGridOpen] = React.useState(false);
    const [isMasonryOpen, setIsMasonryOpen] = React.useState(false);
    const [showDiv, setShowDiv] = React.useState(false);
    const menuRef = React.useRef();

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
      
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowDiv(true);
            } else {
                setShowDiv(false);
            }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  
    return(
        <>
            <nav className="flow-root bg-zinc-800 fixed top-0 z-50 w-[100%]">
                <a href="https://themeforest.net/item/bootsland-multipurpose-wordpress-theme/44853147?_ga=2.169911968.1625667972.1709010775-1680749170.1708498659">
                    <img src="https://d1bltcifwhkdae.cloudfront.net/uploads/envato-market-light.png" alt="envato-logo" className="h-[50px] p-[16px] float-left" />
                </a>
                <a href="https://themeforest.net/checkout/100569977/create_account?_ga=2.165866046.1625667972.1709010775-1680749170.1708498659">
                    <button className="bg-[#8ABC40] hover:bg-[#77a336] float-right text-white m-3 w-[100px] py-1 my-[12px] rounded">Buy now</button>
                </a>
            </nav>
            {showDiv && (
                <div className="slideDownTwo fixed bg-[#1f1f1f] top-[56px] z-50 w-[100%]">
                    <div className="flex items-center justify-between h-[87px] min-[992px]:w-[990px] min-[992px]:mx-auto min-[1200px]:w-[1180px] min-[1400px]:w-[1380px]">
                        <div className="ml-5">
                            <a href="https://uithemez.com/i/geekfolio/landing-preview.html#">
                                <img src="https://uithemez.com/i/geekfolio/dark/assets/imgs/logo-light.png" className="w-20" />
                            </a>
                        </div>
                        <div className="hidden min-[992px]:block ml-5 min-[1200px]:ml-10 min-[1400px]:ml-32">
                            <div className="flex space-x-16">
                                <div className="menu group relative cursor-pointer">
                                    <div className="flex items-center justify-between py-[34px]">
                                        <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="inline-flex justify-center space-x-1">
                                            <p className="font-semibold text-sm wave flex">
                                                <p className="wave">H</p>
                                                <p className="wave">O</p>
                                                <p className="wave">M</p>
                                                <p className="wave">E</p>
                                            </p>
                                            <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="invisible bg-zinc-900 border border-[#2f2f2f] grid grid-cols-4 w-[950px] -ml-28 py-8 pl-6 text-white absolute group-hover:visible">
                                        <div>
                                            <p className="block text-sm font-bold mb-8">HOME DARK</p>
                                            <ul className="space-y-4 text-sm w-[90%]">
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-main.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Main Home</p>
                                                                <span className="absolute left-[25px] bottom-[400px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-creative.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Creative Home</p>
                                                                <span className="absolute left-[25px] bottom-[365px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-corporate.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Corporate Business</p>
                                                                <span className="absolute left-[25px] bottom-[330px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-onepage.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Home One page</p>
                                                                <span className="absolute left-[25px] bottom-[293px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-digital-agency.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Digital Agency</p>
                                                                <span className="absolute left-[25px] bottom-[257px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-freelancer.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Freelancer</p>
                                                                <span className="absolute left-[25px] bottom-[221px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-marketing-agency.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Marketing Agency</p>
                                                                <span className="absolute left-[25px] bottom-[185px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-creative-agency.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Creative Agency</p>
                                                                <span className="absolute left-[25px] bottom-[150px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-startup.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Startup Bussines</p>
                                                                <span className="absolute left-[25px] bottom-[112px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-architecture.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Architecture</p>
                                                                <span className="absolute left-[25px] bottom-[78px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-personal.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Personal</p>
                                                                <span className="absolute left-[25px] bottom-[42px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="block text-sm font-bold mb-8">HOME LIGHT</p>
                                            <ul className="space-y-4 text-sm w-[90%]">
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-main.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Main Home</p>
                                                                <span className="absolute left-[255px] bottom-[400px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-corporate.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Corporate Business</p>
                                                                <span className="absolute left-[255px] bottom-[365px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span><span className="absolute left-[25px] bottom-[365px] w-0 transition-all duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-onepage.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Home One page</p>
                                                                <span className="absolute left-[255px] bottom-[330px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-digital-agency.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Digital Agency</p>
                                                                <span className="absolute left-[255px] bottom-[293px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-freelancer.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Freelancer</p>
                                                                <span className="absolute left-[255px] bottom-[257px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-marketing-agency.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Marketing Agency</p>
                                                                <span className="absolute left-[255px] bottom-[221px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-creative-agency.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Creative Agency</p>
                                                                <span className="absolute left-[255px] bottom-[185px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-startup.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Startup Bussines</p>
                                                                <span className="absolute left-[255px] bottom-[150px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-architecture.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Architecture</p>
                                                                <span className="absolute left-[255px] bottom-[112px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="block text-sm font-bold mb-8">SHOWCASES</p>
                                            <ul className="space-y-4 text-sm w-[90%]">
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-parallax-slider.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Parallax Slider</p>
                                                                <span className="absolute left-[485px] bottom-[400px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-frame-slider.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Frame Slider</p>
                                                                <span className="absolute left-[485px] bottom-[365px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-circle-slider.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Circle Slider</p>
                                                                <span className="absolute left-[485px] bottom-[330px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-carousel.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Showcase Carousel</p>
                                                                <span className="absolute left-[485px] bottom-[293px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-interactive-center-horizontal.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links1</p>
                                                                <span className="absolute left-[485px] bottom-[257px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-interactive-center.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links2</p>
                                                                <span className="absolute left-[485px] bottom-[221px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-parallax.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Vertical Parallax</p>
                                                                <span className="absolute left-[485px] bottom-[185px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                        <p className="block text-sm font-bold mb-8">SHOWCASES LIGHT</p>
                                            <ul className="space-y-4 text-sm w-[90%]">
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-parallax-slider.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Parallax Slider</p>
                                                                <span className="absolute left-[717px] bottom-[400px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-carousel.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Showcase Carousel</p>
                                                                <span className="absolute left-[717px] bottom-[365px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-interactive-center-horizontal.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links1</p>
                                                                <span className="absolute left-[717px] bottom-[330px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-interactive-center.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links2</p>
                                                                <span className="absolute left-[717px] bottom-[293px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-parallax.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Vertical Parallax</p>
                                                                <span className="absolute left-[717px] bottom-[257px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu group relative cursor-pointer">
                                    <div className="flex items-center justify-between py-[34px]">
                                        <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="inline-flex items-center justify-center space-x-1">
                                            <p className="font-semibold text-sm wave flex">
                                                <p className="wave">P</p>
                                                <p className="wave">A</p>
                                                <p className="wave">G</p>
                                                <p className="wave">E</p>
                                                <p className="wave">S</p>
                                            </p>
                                            <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="invisible w-[200px] bg-zinc-900 border border-[#2f2f2f] py-8 pl-6 -ml-8 text-white absolute group-hover:visible">
                                        <ul className="space-y-4 text-sm w-[90%]">
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-about.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">About</p>
                                                            <span className="absolute left-[25px] bottom-[330px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-services.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Services</p>
                                                            <span className="absolute left-[25px] bottom-[293px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-career.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Career</p>
                                                            <span className="absolute left-[25px] bottom-[257px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-single-service.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Single Service</p>
                                                            <span className="absolute left-[25px] bottom-[222px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-FAQS.html">
                                                            <p className="hover:pl-5 thover:ransition-all hover:duration-300">FAQS</p>
                                                            <span className="absolute left-[25px] bottom-[185px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-team.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Our Team</p>
                                                            <span className="absolute left-[25px] bottom-[150px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-single-team.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Single Team</p>
                                                            <span className="absolute left-[25px] bottom-[112px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-Oops404.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Oops 404</p>
                                                            <span className="absolute left-[25px] bottom-[77px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-comingsoon.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Coming Soon</p>
                                                            <span className="absolute left-[25px] bottom-[42px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu group relative cursor-pointer">
                                    <div className="flex items-center justify-between py-[34px]">
                                        <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="inline-flex items-center justify-center space-x-1">
                                            <p className="font-semibold text-sm wave flex">
                                                <p className="wave">P</p>
                                                <p className="wave">O</p>
                                                <p className="wave">R</p>
                                                <p className="wave">T</p>
                                                <p className="wave">F</p>
                                                <p className="wave">O</p>
                                                <p className="wave">L</p>
                                                <p className="wave">I</p>
                                                <p className="wave">O</p>
                                            </p>
                                            <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="absolute w-[200px] space-y-4 text-sm bg-zinc-900 border border-[#2f2f2f] py-8 pl-6 -ml-8 text-white z-20 invisible group-hover:visible">
                                        <div className="relative group2 group/line w-[110%]">
                                            <div className="flex">
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/landing-preview.html#0">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300 group-hover/line:pl-5">Classic Grid</p>
                                                    <span className="absolute bottom-[10px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                </a>
                                                <svg className="mr-[15%]" height="15px" width="20px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                                    <path fill="white" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z" />
                                                </svg>
                                            </div>
                                            <div className="absolute z-20 w-[200px] space-y-4 text-sm bg-zinc-900 border border-[#2f2f2f] -top-1 left-[210px] py-8 pl-3 -ml-8 text-white invisible group2-hover:visible">
                                                <div className="flex group/line2">
                                                    <a href="https://uithemez.com/i/geekfolio/dark/portfolio-grid-2.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Grid 2 Columns</p>
                                                        <span className="absolute bottom-[112px] w-0 group-hover/line2:transition-all group-hover/line2:duration-300 h-0.5 bg-white group-hover/line2:w-[10px]"></span>
                                                    </a>
                                                </div>
                                                <div className="flex group/line2">
                                                    <a href="https://uithemez.com/i/geekfolio/dark/portfolio-grid-3.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Grid 3 Columns</p>
                                                        <span className="absolute bottom-[78px] w-0 group-hover/line2:transition-all group-hover/line2:duration-300 h-0.5 bg-white group-hover/line2:w-[10px]"></span>
                                                    </a>
                                                </div>
                                                <div className="flex group/line2">
                                                    <a href="https://uithemez.com/i/geekfolio/dark/portfolio-grid-4.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Grid 4 Columns</p>
                                                        <span className="absolute bottom-[40px] w-0 group-hover/line2:transition-all group-hover/line2:duration-300 h-0.5 bg-white group-hover/line2:w-[10px]"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative group2 group/line w-[110%]">
                                            <div className="flex">
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/landing-preview.html#0">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300 group-hover/line:pl-5">Masonry</p>
                                                    <span className="absolute bottom-[10px] w-0 transition-all duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                </a>
                                                <svg className="mr-[15%]" height="15px" width="20px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                                    <path fill="white" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z" />
                                                </svg>
                                            </div>
                                            <div className="absolute z-20 w-[200px] space-y-4 text-sm bg-zinc-900 border border-[#2f2f2f] -top-1 left-[210px] py-8 pl-3 -ml-8 text-white invisible group2-hover:visible">
                                                <div className="flex group/line2">
                                                    <a href="https://uithemez.com/i/geekfolio/dark/portfolio-masonry-2.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Masonry 2 Columns</p>
                                                        <span className="absolute bottom-[112px] w-0 group-hover/line2:transition-all group-hover/line2:duration-300 h-0.5 bg-white group-hover/line2:w-[10px]"></span>
                                                    </a>
                                                </div>
                                                <div className="flex group/line2">
                                                    <a href="https://uithemez.com/i/geekfolio/dark/portfolio-masonry-3.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Masonry 3 Columns</p>
                                                        <span className="absolute bottom-[78px] w-0 group-hover/line2:transition-all group-hover/line2:duration-300 h-0.5 bg-white group-hover/line2:w-[10px]"></span>
                                                    </a>
                                                </div>
                                                <div className="flex group/line2">
                                                    <a href="https://uithemez.com/i/geekfolio/dark/portfolio-masonry-4.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Masonry 4 Columns</p>
                                                        <span className="absolute bottom-[40px] w-0 group-hover/line2:transition-all group-hover/line2:duration-300 h-0.5 bg-white group-hover/line2:w-[10px]"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-metro.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Portfolio Metro</p>
                                                    <span className="absolute bottom-[150px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-modern.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Modern Grid</p>
                                                    <span className="absolute bottom-[113px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/project-details1.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Project Details 1</p>
                                                    <span className="absolute bottom-[78px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/project-details2.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Project Details 2</p>
                                                    <span className="absolute bottom-[42px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu group relative cursor-pointer">
                                    <div className="flex items-center justify-between py-[34px]">
                                        <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="inline-flex items-center justify-center space-x-1">
                                            <p className="font-semibold text-sm wave flex">
                                                <p className="wave">B</p>
                                                <p className="wave">L</p>
                                                <p className="wave">O</p>
                                                <p className="wave">G</p>
                                                <p className="wave">S</p>
                                            </p>
                                            <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                            </svg>
                                        </a>
                                    </div>
                                        <div className="invisible w-[200px] bg-zinc-900 border border-[#2f2f2f] py-8 pl-6 -ml-8 text-white absolute z-20 group-hover:visible">
                                            <ul className="space-y-4 text-sm w-[90%]">
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-classic.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Blog Standerd</p>
                                                                <span className="absolute bottom-[149px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-list.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Blog List</p>
                                                                <span className="absolute bottom-[113px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-half-img.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Image Out Frame</p>
                                                                <span className="absolute bottom-[78px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-details.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Blog Details</p>
                                                                <span className="absolute bottom-[42px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                <div className="menu group relative cursor-pointer transition-all duration-300">
                                    <div className="flex items-center justify-between py-[34px]">
                                        <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="inline-flex items-center justify-center space-x-1">
                                            <p className="font-semibold text-sm wave flex">
                                                <p className="wave">S</p>
                                                <p className="wave">H</p>
                                                <p className="wave">O</p>
                                                <p className="wave">P</p>
                                            </p>
                                            <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="invisible w-[200px] bg-zinc-900 border border-[#2f2f2f] py-8 pl-6 -ml-8 text-white absolute z-20 group-hover:visible">
                                        <ul className="space-y-4 text-sm w-[90%]">
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-list.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Shop List</p>
                                                            <span className="absolute bottom-[149px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-product.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Single Product</p>
                                                            <span className="absolute bottom-[113px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-cart.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Cart</p>
                                                            <span className="absolute bottom-[78px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-checkout.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Checkout</p>
                                                            <span className="absolute bottom-[42px] w-0 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px] group-hover/line:block"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="menu group relative cursor-pointer">
                                        <div className="flex items-center justify-between py-[34px]">
                                            <a href="https://uithemez.com/i/geekfolio/dark/page-contact.html" className="inline-flex items-center justify-center">
                                                <p className="font-semibold text-sm wave flex">
                                                    <p className="wave">C</p>
                                                    <p className="wave">O</p>
                                                    <p className="wave">N</p>
                                                    <p className="wave">T</p>
                                                    <p className="wave">A</p>
                                                    <p className="wave">C</p>
                                                    <p className="wave">T</p>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-10 -mt-3">
                            <button onClick={() => setIsOpen(true)} className="min-[992px]:hidden">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" className="invert w-6" />
                            </button>
                        </div>
                        <div className={`${isOpen ? 'h-[555px]' : 'h-0'} bg-[#1f1f1f] block fixed w-[100%] top-[58px] -mt-0.5 overflow-y-scroll text-sm font-extrabold z-50`}>
                            <div className="flex justify-between mt-5 mx-6">
                                <div className="">
                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#">
                                        <img src="https://uithemez.com/i/geekfolio/dark/assets/imgs/logo-light.png" className="w-20" />
                                    </a>
                                </div>
                                <button onClick={() => setIsOpen(false)}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" className="invert w-6" />
                                </button>
                            </div>
                            <div>
                                <button className="border-t wave border-[#2f2f2f] py-5 px-6 mt-3 w-full text-left" onClick={() => setIsHomeOpen(!isHomeOpen)}>
                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="flex gap-1 tracking-wider w-fit">
                                        <p className="font-semibold text-sm flex">
                                            <p className="wave">H</p>
                                            <p className="wave">O</p>
                                            <p className="wave">M</p>
                                            <p className="wave">E</p>
                                        </p>
                                        <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                            {isHomeOpen && (
                                <div className="bg-[#191919]">
                                    <div>
                                        <p className="py-6 px-7 border-b border-t border-[#2f2f2f]">HOME DARK</p>
                                        <ul className="my-5 ml-7 space-y-5 text-sm w-[90%]">
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-main.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Main Home</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-creative.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Creative Home</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-corporate.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Corporate Business</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-onepage.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Home One page</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-digital-agency.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Digital Agency</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-freelancer.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Freelancer</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-marketing-agency.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Marketing Agency</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-creative-agency.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Creative Agency</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-startup.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Startup Bussines</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-architecture.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Architecture</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/home-personal.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Personal</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="py-6 px-7 border-b border-[#2f2f2f]">HOME LIGHT</p>
                                        <ul className="my-5 ml-7 space-y-5 text-sm w-[90%]">
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-main.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Main Home</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-corporate.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Corporate Business</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-onepage.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Home One page</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-digital-agency.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Digital Agency</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-freelancer.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Freelancer</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-marketing-agency.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Marketing Agency</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-creative-agency.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Creative Agency</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-startup.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Startup Bussines</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/home-architecture.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Architecture</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="py-6 px-7 border-b border-[#2f2f2f]">SHOWCASES</p>
                                        <ul className="my-5 ml-7 space-y-5 text-sm w-[90%]">
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-parallax-slider.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Parallax Slider</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-frame-slider.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Frame Slider</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-circle-slider.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Circle Slider</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-carousel.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Showcase Carousel</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-interactive-center-horizontal.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links1</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-interactive-center.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links2</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/showcase-parallax.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Vertical Parallax</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="py-6 px-7 border-b border-[#2f2f2f]">SHOWCASES LIGHT</p>
                                        <ul className="mt-5 pb-14 ml-7 space-y-5 text-sm w-[90%]">
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-parallax-slider.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Parallax Slider</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-carousel.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Showcase Carousel</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-interactive-center-horizontal.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links1</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-interactive-center.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Interactive Links2</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="group/line">
                                                    <div className="flex">
                                                        <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                        <a className="w-full" href="https://uithemez.com/i/geekfolio/light/showcase-parallax.html">
                                                            <p className="hover:pl-5 hover:transition-all hover:duration-300">Vertical Parallax</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <div>
                                <button className="border-t wave border-[#2f2f2f] py-5 px-6 w-full text-left" onClick={() => setIsPageOpen(!isPageOpen)}>
                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="flex gap-1 tracking-wider w-fit">
                                        <p className="font-semibold text-sm flex">
                                            <p className="wave">P</p>
                                            <p className="wave">A</p>
                                            <p className="wave">G</p>
                                            <p className="wave">E</p>
                                            <p className="wave">S</p>
                                        </p>
                                        <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                            {isPageOpen && (
                                <div className="bg-[#191919] border-t border-[#2f2f2f]">
                                    <ul className="pt-5 pb-14 ml-7 space-y-5 text-sm w-[90%]">
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-about.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">About</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-services.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Services</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-career.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Career</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-single-service.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Single Service</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-FAQS.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">FAQS</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-team.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Our Team</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-single-team.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Single Team</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-Oops404.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Oops 404</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/page-comingsoon.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Coming Soon</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <div>
                                <button className="border-t wave border-[#2f2f2f] py-5 px-6 w-full text-left" onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}>
                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="flex gap-1 tracking-wider w-fit">
                                        <p className="font-semibold text-sm flex">
                                            <p className="wave">P</p>
                                            <p className="wave">O</p>
                                            <p className="wave">R</p>
                                            <p className="wave">T</p>
                                            <p className="wave">F</p>
                                            <p className="wave">O</p>
                                            <p className="wave">L</p>
                                            <p className="wave">I</p>
                                            <p className="wave">O</p>
                                        </p>
                                        <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                            {isPortfolioOpen && (
                                <div className="bg-[#191919] border-t border-[#2f2f2f]">
                                    <div className="pt-5 pb-14 ml-7 space-y-5 text-sm">
                                        <div>
                                            <button className="w-[95%] group/line text-left flex items-center justify-between" onClick={() => setIsGridOpen(!isGridOpen)}>
                                                <div className="flex">
                                                    <svg className={`${isGridOpen ? "w-[50px] -ml-5" : "w-0"} group-hover/line:-ml-5 group-hover/line:-mr-0 group-hover/line:w-[50px] group-hover/line:transition-all group-hover/line:duration-300`} fill="#ffffff" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="20px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                                                        <g>
                                                            <path d="M26,50.5c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2s-0.896-2-2-2H28C26.896,48.5,26,49.396,26,50.5z" />
                                                        </g>
                                                    </svg>
                                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#0">Classic Grid</a>
                                                </div>
                                                <svg height="15px" width="20px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                                    <path fill="white" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z" />
                                                </svg>
                                            </button>
                                            {isGridOpen && (
                                                <div className="w-[90%] space-y-4 text-sm bg-[#191919] border border-[#2f2f2f] p-5 ml-6 my-3 text-white">
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-grid-2.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Grid 2 Columns</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-grid-3.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Grid 3 Columns</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-grid-4.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Grid 4 Columns</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <button className="w-[95%] group/line text-left flex items-center justify-between" onClick={() => setIsMasonryOpen(!isMasonryOpen)}>
                                                <div className="flex">
                                                    <svg className={`${isMasonryOpen ? "w-[50px] -ml-5" : "w-0"} group-hover/line:-ml-5 group-hover/line:-mr-0 group-hover/line:w-[50px] group-hover/line:transition-all group-hover/line:duration-300`} fill="#ffffff" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="20px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                                                        <g>
                                                            <path d="M26,50.5c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2s-0.896-2-2-2H28C26.896,48.5,26,49.396,26,50.5z" />
                                                        </g>
                                                    </svg>
                                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#0">Masonry</a>
                                                </div>
                                                <svg height="15px" width="20px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                                    <path fill="white" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z" />
                                                </svg>
                                            </button>
                                            {isMasonryOpen && (
                                                <div className="w-[90%] space-y-4 text-sm bg-[#191919] border border-[#2f2f2f] p-5 ml-6 my-3 text-white">
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-masonry-2.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Masonry 2 Columns</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-masonry-3.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Masonry 3 Columns</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="group/line">
                                                        <div className="flex">
                                                            <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                            <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-masonry-4.html">
                                                                <p className="hover:pl-5 hover:transition-all hover:duration-300">Masonry 4 Columns</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-metro.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Portfolio Metro</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/portfolio-modern.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Modern Grid</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/project-details1.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Project Details 1</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group/line">
                                            <div className="flex">
                                                <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/project-details2.html">
                                                    <p className="hover:pl-5 hover:transition-all hover:duration-300">Project Details 2</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div>
                                <button className="border-t wave border-[#2f2f2f] py-5 px-6 w-full text-left" onClick={() => setIsBlogOpen(!isBlogOpen)}>
                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="flex gap-1 tracking-wider w-fit">
                                        <p className="font-semibold text-sm flex">
                                            <p className="wave">B</p>
                                            <p className="wave">L</p>
                                            <p className="wave">O</p>
                                            <p className="wave">G</p>
                                            <p className="wave">S</p>
                                        </p>
                                        <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                            {isBlogOpen && (
                                <div className="bg-[#191919] border-t border-[#2f2f2f]">
                                    <ul className="pt-5 pb-14 ml-7 space-y-5 text-sm w-[90%]">
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-classic.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Blog Standerd</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-list.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Blog List</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-half-img.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Image Out Frame</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/blog-details.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Blog Details</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <div>
                                <button className="border-t wave border-[#2f2f2f] py-5 px-6 w-full text-left" onClick={() => setIsShopOpen(!isShopOpen)}>
                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#" className="flex gap-1 tracking-wider w-fit">
                                        <p className="font-semibold text-sm flex">
                                            <p className="wave">S</p>
                                            <p className="wave">H</p>
                                            <p className="wave">O</p>
                                            <p className="wave">P</p>
                                        </p>
                                        <svg className="invert mt-1.5" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                            {isShopOpen && (
                                <div className="bg-[#191919] border-t border-[#2f2f2f]">
                                    <ul className="pt-5 pb-14 ml-7 space-y-5 text-sm w-[90%]">
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-list.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Shop List</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-product.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Single Product</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-cart.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Cart</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group/line">
                                                <div className="flex">
                                                    <span className="w-0 mt-2 group-hover/line:transition-all group-hover/line:duration-300 h-0.5 bg-white group-hover/line:w-[10px]"></span>
                                                    <a className="w-full" href="https://uithemez.com/i/geekfolio/dark/shop-checkout.html">
                                                        <p className="hover:pl-5 hover:transition-all hover:duration-300">Checkout</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <div>
                                <button className="border-t border-[#2f2f2f] py-5 px-6 w-full text-left" onClick={() => setIsHomeOpen(!isHomeOpen)}>
                                    <a href="https://uithemez.com/i/geekfolio/landing-preview.html#">
                                        <p className="font-semibold text-sm wave flex">
                                            <p className="wave">C</p>
                                            <p className="wave">O</p>
                                            <p className="wave">N</p>
                                            <p className="wave">T</p>
                                            <p className="wave">A</p>
                                            <p className="wave">C</p>
                                            <p className="wave">T</p>
                                        </p>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div>
                            <a href="https://themeforest.net/checkout/102772226/create_account?clickid=z8bxQtV2cxyPRPUxoCTql0XVUkHX9cSfcVO63Q0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=3544009&mp_value1=&utm_campaign=af_impact_radius_3544009&utm_medium=affiliate&utm_source=impact_radius">
                                <button className="border-white border-2 px-5 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">Purchase</button>
                            </a>
                        </div>
                    </div>
                    <hr className="border border-[#2f2f2f]" />
                </div>
            )}
        </>
    )
}

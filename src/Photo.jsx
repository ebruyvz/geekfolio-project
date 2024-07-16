import Card from "./Card";

export default function Photo() {
    return(
        <div className="photo w-[95%] mx-auto relative min-[577px]:w-[548px] md:w-full h-[100vh]">
            <Card />
            <div className="py-10 bg-[#191919] absolute bottom-0 left-0 right-0 md:pt-[155px] min-[992px]:pt-[235px]">
                <div className="min-[577px]:w-[548px] min-[577px]:mx-auto md:w-[700px] min-[992px]:flex min-[992px]:justify-between min-[992px]:w-[950px] min-[1200px]:w-[1130px] min-[1400px]:w-[1310px]">
                    <div className="w-fit">
                        <a href="https://uithemez.com/i/geekfolio/landing-preview.html#0">
                            <img src="https://uithemez.com/i/geekfolio/dark/assets/imgs/logo-light.png" className="w-32 h-fit" />
                        </a>
                    </div>
                    <h1 className="text-sm mt-5 min-[992px]:mt-0">© 2024 Geekfolio is Proudly Powered by <a href="https://themeforest.net/user/uithemez" className="underline">Ui-ThemeZ</a></h1>
                </div>
            </div>
        </div>
    )
}

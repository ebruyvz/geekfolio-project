import React from "react";

export default function Loading() {

    const [Loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    if(Loading) {
        return(
            <div className="transition-opacity ease-in duration-700 bg-black w-screen h-screen flex items-center justify-center loading-container">
                <h1 className="loading tracking-[10px] text-sm text-transparent md:text-xl md:tracking-[30px] min-[992px]:text-[25px]">LOADING</h1>
            </div>
        )
    }

    return null;
}

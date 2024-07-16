import React from "react";
import Data from "./Data";

export default function Templates() {
    
    const [templates, setTemplates] = React.useState(Data);
    const [all, setAll] = React.useState(true);
    const [dark, setDark] = React.useState(false);
    const [light, setLight] = React.useState(false);
    const [showcases, setShowcases] = React.useState(false);

    const darkTemplates = templates.filter(template => template.theme === "dark");
    const lightTemplates = templates.filter(template => template.theme === "light");
    const showcasesTemplates = templates.filter(template => template.theme2 === "showcases");
    
    return (
        <div className="pt-24 bg-[#1f1f1f]">
            <div className="flex space-x-6 mx-auto w-fit mb-32 text-[16px] font-medium text-[#ababab] tracking-widest">
                <button onClick={() => {setAll(true); setDark(false); setLight(false); setShowcases(false);}} className={`${all ? "text-white" : ""} flex`}>
                    ALL
                    <p className="text-[12px] -mt-5">27</p>
                </button>
                <button onClick={() => {setAll(false); setDark(true); setLight(false); setShowcases(false);}} className={`${dark ? "text-white" : ""} flex`}>
                    DARK
                    <p className="text-[12px] -mt-5">16</p>
                </button>
                <button onClick={() => {setAll(false); setDark(false); setLight(true); setShowcases(false);}} className={`${light ? "text-white" : ""} flex`}>
                    LIGHT
                    <p className="text-[12px] -mt-5">11</p>
                </button>
                <button onClick={() => {setAll(false); setDark(false); setLight(false); setShowcases(true);}} className={`${showcases ? "text-white" : ""} flex`}>
                    SHOWCASES
                    <p className="text-[12px] -mt-5">07</p>
                </button>
            </div>
            {all && (
                <div className="space-y-8 md:grid md:grid-cols-2 min-[992px]:grid-cols-3">
                    {templates.map(template => (
                        <div key={template.id} className="grow w-[90%] mx-auto p-4 border-[#2f2f2f] border rounded-lg relative temp change">
                            {template.new === "yes" && <div className="absolute right-0 bg-red-600 w-[50px] text-center font-bold text-sm py-1">New</div>}
                            <a href={template.link}>
                                <img src={template.coverImg} alt={template.title} className="rounded-md" />
                                <h1 className="text-center font-semibold text-[20px] mt-3 mb-2">{template.title}</h1>
                            </a>
                        </div>
                    ))}
                </div>
            )}
            {dark && (
                <div className="space-y-8 md:grid md:grid-cols-2 min-[992px]:grid-cols-3">
                    {darkTemplates.map(template => (
                        <div key={template.id} className="grow w-[90%] mx-auto p-4 border-[#2f2f2f] border rounded-lg relative temp">
                            {template.new === "yes" && <div className="absolute right-0 bg-red-600 w-[50px] text-center font-bold text-sm py-1">New</div>}
                            <a href={template.link}>
                                <img src={template.coverImg} alt={template.title} className="rounded-md" />
                                <h1 className="text-center font-semibold text-[20px] mt-3 mb-2">{template.title}</h1>
                            </a>
                        </div>
                    ))}
                </div>
            )}
            {light && (
                <div className="space-y-8 md:grid md:grid-cols-2 min-[992px]:grid-cols-3">
                    {lightTemplates.map(template => (
                        <div key={template.id} className="grow w-[90%] mx-auto p-4 border-[#2f2f2f] border rounded-lg relative temp">
                            {template.new === "yes" && <div className="absolute right-0 bg-red-600 w-[50px] text-center font-bold text-sm py-1">New</div>}
                            <a href={template.link}>
                                <img src={template.coverImg} alt={template.title} className="rounded-md" />
                                <h1 className="text-center font-semibold text-[20px] mt-3 mb-2">{template.title}</h1>
                            </a>
                        </div>
                    ))}
                </div>
            )}
            {showcases && (
                <div className="space-y-8 md:grid md:grid-cols-2 min-[992px]:grid-cols-3">
                    {showcasesTemplates.map(template => (
                        <div key={template.id} className="grow w-[90%] mx-auto p-4 border-[#2f2f2f] border rounded-lg relative temp">
                            {template.new === "yes" && <div className="absolute right-0 bg-red-600 w-[50px] text-center font-bold text-sm py-1">New</div>}
                            <a href={template.link}>
                                <img src={template.coverImg} alt={template.title} className="rounded-md" />
                                <h1 className="text-center font-semibold text-[20px] mt-3 mb-2">{template.title}</h1>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

import React, { useState } from "react";
import './RoadmapPage.css'
import cross_icon from '../Assets/red_cross_icon.png'

function RoadmapPage() {
    const langs = ["JS", "Python", "Go", "Java", "Kotlin", "PHP", "C#", "Swift",
        "R", "Ruby", "C", "C++", "Matlab", "TypeScript", "Scala", "SQL",
        "HTML", "NoSQL", "Rust", "Perl"];

    const [selectedLangs, setSelectedLangs] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [langSectionVisible, setLangSectionVisible] = useState(false); // Manage visibility of language section

    const handleLangChange = (lang) => {
        if (selectedLangs.includes(lang)) {
            setSelectedLangs(selectedLangs.filter(selectedLang => selectedLang !== lang));
        } else {
            if (selectedLangs.includes("N/A")) {
                setSelectedLangs(["N/A"]);
                setDropdownOpen(!dropdownOpen)
            } else if (!selectedLangs.includes("N/A")) {
                setSelectedLangs([...selectedLangs, lang]);
            }
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
    };

    const handleClear = (e) => {
        e.preventDefault();
        setSelectedLangs([]);
    }

    const handleRadioChange = (e) => {
        if (e.target.value === "yes") {
            setLangSectionVisible(true);
        } else {
            setLangSectionVisible(false);
            setSelectedLangs([]); // Clear selected languages if "No" is chosen
        }
    }

    return (
        <>
            <div className="m-10">
                <div className="flex justify-center  text-2xl font-bold mb-5">
                    Give us your details to create a personalised roadmap for you
                </div>
                <div className="flex justify-center">
                    <form action="" className="justify-left main-in-container w-[40%] rounded-lg p-7 border-blue-400 border-2 shadow-md">

                        <div className="flex mb-5 shadow-md p-3 main-in-in">
                            <div className="mr-5 w-[35%]">
                                Enter your year of passing:
                            </div>
                            <input type="text" className="rounded-sm h-[25px] border-2 w-[100px] pl-3 border-black" />
                        </div>

                        <div className="flex mb-5 shadow-md p-3 main-in-in">
                            <div className="mr-5 w-[35%]">
                                Enter your field:
                            </div>
                            <input type="text" className="rounded-sm border-black border-2 pl-2" />
                        </div>

                        <div className="mb-5 main-in-in-qn">
                            <div>
                                Have you learnt any programming languages?
                            </div>
                            <div className="main-in-in-qn-qn">
                                <label htmlFor="yes" className="mr-5">
                                    <input name="isLanguages" type="radio" value="yes" onChange={handleRadioChange} /> Yes
                                </label>
                                <label htmlFor="no">
                                    <input name="isLanguages" type="radio" value="no" onChange={handleRadioChange} /> No
                                </label>
                            </div>
                        </div>

                        {/* Conditionally render the languages section */}
                        {langSectionVisible && (
                            <div className="flex mb-5 shadow-md p-3 main-in-in">
                                <div className="mr-5 w-[35%]">
                                    Enter the languages you have learnt:
                                </div>

                                <div className="relative w-full main-in-in">
                                    <div className="border-2 border-black rounded-sm p-2 cursor-pointer main-in-in-sel-lang" onClick={toggleDropdown}>
                                        Select Languages 
                                    </div>
                                    {dropdownOpen && (
                                        <div className="absolute z-10 mt-1 w-full border border-black rounded-md bg-white shadow-lg p-3 max-h-[200px] overflow-y-auto main-in-in-sel">
                                                <img src={cross_icon} onClick={()=> setDropdownOpen(false)} alt="" />
                                            <div className="grid grid-cols-4 gap-5 mt-3 p-1 text-align-center">
                                                {langs.map((lang, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <label className="cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedLangs.includes(lang)}
                                                                value={lang}
                                                                onChange={() => handleLangChange(lang)}
                                                                className="mr-0 cursor-pointer"
                                                            />
                                                            <br />
                                                            {lang}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {langSectionVisible && (
                            <div className="mt-2 mb-5">
                                <strong>Selected Languages: </strong>{selectedLangs.join(", ")}
                            </div>
                        )}

                        {langSectionVisible && (
                            <button onClick={handleClear} className="duration-300 rounded-md border-2 border-black font-bold hover:bg-red-300 p-1 main-in-in-cl-button">
                                Clear languages
                            </button>
                        )}

                    </form>
                </div>
            </div>
            <div className="main-in-in-button">
                <button className="rounded-full p-2 font-bold bg-blue-500 text-white hover:border hover:border-black w-[200px] h-[50px]">Create Roadmap</button>
            </div>
        </>
    );
}

export default RoadmapPage;

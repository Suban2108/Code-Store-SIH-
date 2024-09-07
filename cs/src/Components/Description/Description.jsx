import React, { useState } from 'react';

function Description({ title, description }) {

    const [isActive, setIsActive] = useState(false);
    const toggleDescription = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className="bg-blue-400 text-white p-4 w-[910px] rounded-lg m-5">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-2xl">
                        {title}
                    </div>
                    <button onClick={toggleDescription} className="text-xl focus:outline-none">
                        {isActive ? '▲' : '▼'}
                    </button>
                </div>

                {/* Description with transition */}
                <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                        isActive ? 'max-h-40' : 'max-h-0'
                    }`}
                >
                    <div className="text-xl mt-4">
                        {description}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;

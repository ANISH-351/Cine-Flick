 import React from "react";

function Pagination({prevPage, nextPage, page}) {
    return (
        <div className="bg-gray-900 p-10 w-full flex justify-center">
            <div onClick={prevPage} className="text-white font-bold hover:cursor-pointer ">← Previous </div>
            <div className="text-white ml-10 mr-10 font-bold">{page}</div>
            <div onClick={nextPage} className="text-white font-bold hover:cursor-pointer">Next →</div>
        </div>
    );
}

export default Pagination;

import React, { useState } from "react";

function MoviesCard({ poster_path, name, handleWatchList, movieObj, removeWatchList, watchList }) {
  const [showOverview, setShowOverview] = useState(false);
  const isInWatchList = watchList.some((item) => item.id === movieObj.id);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const toggleWatchList = () => {
    if (isInWatchList) {
      removeWatchList(movieObj);
    } else {
      handleWatchList(movieObj);
    }
  };

  return (
    <div>
      {/* Movie Card */}
      <div
        onClick={toggleOverview}
        className="relative h-[40vh] w-[200px] bg-cover bg-center ml-5 mr-10 mb-10 rounded-2xl hover:scale-105 duration-300 cursor-pointer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
        }}
      >
        {isInWatchList ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
              removeWatchList(movieObj);
            }}
            className="mr-2 mt-2 absolute top-0 right-0 text-red-600 text-3xl"
          >
            &#10084;
          </div>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleWatchList(movieObj);
            }}
            className="mr-4 mt-2 absolute top-0 right-0 text-white text-3xl bg-black bg-opacity-90 rounded-full"
          >
            &#9825;
          </div>
        )}

        <div className="absolute bottom-0 text-white w-full p-1 text-center text-xl bg-black bg-opacity-50 rounded-b-2xl">
          {name}
        </div>
      </div>

      {/* Pop-Up Modal */}
      {showOverview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={toggleOverview}
        >
          <div
            className="bg-gray-900 text-white p-5 rounded-lg w-3/4 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <p className="text-lg mb-5">{movieObj.overview}</p>

            {/* Add to WatchList Button */}
            <button
              onClick={toggleWatchList}
              className={`px-4 py-2 rounded-lg font-semibold mr-4 ${
                isInWatchList
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isInWatchList ? "Remove from WatchList" : "Add to WatchList"}
            </button>

            {/* Close Button */}
            <button
              onClick={toggleOverview}
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviesCard;
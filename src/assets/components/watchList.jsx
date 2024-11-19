import React, { useEffect, useState } from "react";

import genresId from '../genre';


function WatchList({ watchList, setWatchList }) {
  const [search, setSearch] = useState("");

  const [genres, setGenres] = useState(['All Genres']);
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  function handleSearch(event) {
    setSearch(event.target.value);
  }


  function handleGenre(genre) {
    
    setSelectedGenre(genre);
  }

  function topRated() {
    let topMovies = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(topMovies);
  }
  
  useEffect(()=>{
    let temp = watchList.map((movieObj) => {
      return genresId.find((genre) => genre.id === movieObj.genre_ids[0]).name;   
    });
    temp= new Set(temp);
    setGenres(['All Genres',...temp]);
    console.log(temp)
  },[watchList])

  const deleteWatchList = (movieObj) => {
    const newWatchList = watchList.filter((movie) => movie.id !== movieObj.id);
    setWatchList(newWatchList);
    console.log('Removed from watchlist:', newWatchList);
  };
  

  return (
    <>
      <div className="flex justify-center items-center mt-28 display flex-wrap hover:cursor-pointer ">
        {genres.map((genre) => {
             return<div onClick={()=>handleGenre(genre)} className={selectedGenre==genre?'m-5 flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 text-white font-bold rounded-3xl':
             'm-5 flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 text-white font-bold rounded-3xl'}>
             {genre}
           </div>
        }
        )}
        
      
      </div>

      <div className="flex flex-row flex-wrap justify-center mt-5">
        <input
          onChange={handleSearch}
          className="w-1/3 p-2 m-2 border-2 border-gray-800 rounded-lg"
          type="search"
          placeholder="Search"
        /><div onClick={topRated} className="m-5 flex justify-center items-center h-[2rem] w-[7rem] bg-gray-800 text-white font-bold rounded-xl">
          Top Rated
        </div>
         
      </div>

      <div className="overflow-hidden border-gray-400 m-10">
        <table className="w-full border-2 text-center">
          <thead className="border-b-2 border-gray-400">
            <tr>
              <th>Movie</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchList.filter((movieObj) => {
              if (selectedGenre === 'All Genres') {
                return movieObj;
              } else {
                return  genresId.some((genre) => genre.name === selectedGenre && genre.id === movieObj.genre_ids[0]);

              }
            })
              .filter((movieObj) => {
                return movieObj.original_title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 border-gray-400" key={movieObj.id}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[10rem] w-[20rem] rounded-xl"
                        src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                        alt={movieObj.original_name}
                      />
                      <div className="ml-10">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genresId.find((genre) => genre.id === movieObj.genre_ids[0]).name}</td>
                    <td>
                      <button onClick={() => deleteWatchList(movieObj)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-full">
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
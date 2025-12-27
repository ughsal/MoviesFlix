import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card text-white m-[20px]">
      {/* Movie Poster */}
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />

      {/* Title and Details */}
      <div className="mt-4">
        {/* Title left-aligned */}
        <h3 className="text-white">{title}</h3>

        {/* Rating / Year / Language row left-aligned */}
        <div className="content flex gap-2 mt-1 text-sm text-gray-300 items-center">
          <div className="rating flex items-center gap-1">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "NA"}</p>
          </div>
          <span>• {release_date ? release_date.split("-")[0] : "NA"}</span>
          <span>• {original_language.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

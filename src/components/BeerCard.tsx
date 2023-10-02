import React from "react";
import { useAccount } from "wagmi";
import { Beer } from "../typings";
import useStore from "../store";

type BeerCardProps = {
  beer: Beer;
  onImageClick: () => void;
};
const BeerCard: React.FunctionComponent<BeerCardProps> = ({ beer, onImageClick }) => {
  const { address } = useAccount();
  const { favorites, addOrRemoveFromFavorites, checkBeerIntegrity } = useStore();

  const isFavorited = favorites.has(beer.id);
  const isUpdatedSinceFavorited = checkBeerIntegrity(beer);
  const imageUrl = beer.image_url ? beer.image_url : "/no-image-placeholder.svg";

  return (
    <div className="flex py-4 pr-4 shadow-sm bg-white rounded-md border hover:shadow-lg">
      <div
        className="h-48 w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center hover:cursor-pointer"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        onClick={onImageClick}
      ></div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-900 font-bold text-xl mb-2">{beer.name}</div>
        <p className="text-sm text-gray-600 flex items-center">{beer.tagline}</p>
        <p
          className="text-gray-700 text-base overflow-hidden text-ellipsis whitespace-initial line-clamp-3"
          style={{ display: "-webkit-box", boxOrient: "vertical" }}
        >
          {beer.description}
        </p>
        <div className="flex w-fit ml-auto">
          {isFavorited && isUpdatedSinceFavorited ? <span>updated</span> : null}

          <button
            className={`${isFavorited ? "text-blue-600" : "text-black"} ${
              isFavorited ? "hover:text-black" : "hover:text-blue-600"
            } py-2 px-4 rounded`}
            onClick={() => addOrRemoveFromFavorites(address!, beer)}
          >
            <svg viewBox="0 0 24 24" className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;

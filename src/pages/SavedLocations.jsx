import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useWeatherContext } from "../hooks/useWeatherContext";

const SavedLocations = () => {
  const { savedLocations } = useWeatherContext();

  return (
    <section>
      <div>
        <div className="h-[15vh] bg-gray-700"></div>
        <div className="h-[85vh] bg-gray-500 text-white">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <Link
              to={"/"}
              className="inline-block p-3 bg-gray-300 text-black border border-black rounded-full relative -top-6"
            >
              <BsArrowLeft className="text-2xl" />
            </Link>
          </div>
          <div className="text-center p-2">
            <h1 className="text-[1.8rem] md:text-[2.5rem] font-bold">
              Saved Locations
            </h1>
            <p className="my-[1.2rem] text-lg font-semibold">
              Find your locations here
            </p>
            <div>
              {savedLocations.length > 0 ? (
                <ul className="text-left max-w-[500px] mx-auto">
                  {savedLocations.map((location) => (
                    <li key={location.name}>
                      <Link
                        to={`/city-weather`}
                        className="font-semibold xl:text-xl "
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg font-semibold">
                  You do not have a location saved yet. Your locations will show
                  up here when you have saved them.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavedLocations;

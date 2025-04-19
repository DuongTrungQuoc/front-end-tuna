import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const FishList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        },
      };
      const url = "https://tuna-wiki-api.onrender.com/v1";
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mb-10 p-10 text-black">
      <h2 className="mb-4 text-xl uppercase">Fish list</h2>
      <div className="flex items-center space-x-6">
        {data.length > 0 &&
          data?.map((item) => (
            <div
              className="relative h-[200px] w-[200px] rounded border bg-black text-white"
              key={item.url}
            >
              <img
                src={item.image}
                alt="temp"
                className="absolute h-[80px] w-full border bg-ocean-300 object-cover transition-transform duration-500 ease-in-out hover:z-50 hover:h-auto hover:scale-125"
              />
              <div className="absolute bottom-4 left-2 z-10">
                <p className="text-sm font-bold uppercase">{item.name}</p>
                <p className="text-xs">
                  {item.common_length} - {item.max_length}
                </p>
                <p className="text-xs">{item.max_weight}</p>
                <p className="text-xs">{item.max_age}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default FishList;

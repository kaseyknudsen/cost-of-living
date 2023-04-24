import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import GetWeather from "../../components/GetWeather";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://cost-of-living-and-prices.p.rapidapi.com/cities", {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "e4d7bbfa41msh9e5b8e66e9504e3p1502ecjsna45b1ba37e80",
          "X-RapidAPI-Host": "cost-of-living-and-prices.p.rapidapi.com",
        },
      })
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <div>
          <button
            style={{ border: "2px solid black", padding: "10px" }}
            onClick={() => console.log(data.cities[0].city_name)}
          >
            Cost of Living
          </button>
          <GetWeather prices={data?.cities?.[0]?.city_name}/>
        </div>
      </main>
    </>
  );
}

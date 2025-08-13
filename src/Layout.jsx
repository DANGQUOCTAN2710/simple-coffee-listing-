import { useEffect, useState } from "react";
import HeaderContent from "./HeaderContent";

export default function Layout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // dữ liệu thật
        setData(data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <>
      <div className="absolute mx-28 bg-[#1B1D1F] -mt-42 flex justify-center w-[calc(100%-224px)] rounded-2xl">
        <HeaderContent data={data} />
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import HeaderContent from "./HeaderContent";
import BodyContent from "./BodyContent";
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
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#1B1D1F] lg:-mt-42 sm:-mt-32 flex justify-center items-center flex-col sm:min-w-[965px] rounded-2xl">
        <HeaderContent />
        <BodyContent data={data}/>
      </div>
    </>
  );
}

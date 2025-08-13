import { useState } from "react";
import star from "./assets/svg/Star_fill.svg";
import star_NoFill from "./assets/svg/Star.svg";

export default function BodyContent({data}) {

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center w-[calc(100% - 100px)] gap-7 pt-8 lg:flex-row">
        {data.map((item) => (
          <div key={item.id} className="relative w-1/3 w-65">
            <img src={item.image} alt={item.name} className="rounded-2xl relative" />
            {item.popular && (<div className="bg-[#F6C768] absolute top-0 left-0 rounded-lg text-[10px] text-[#1B1D1F] font-medium mt-[8px] ml-[8px] px-3 items-center py-[2px]">popular</div>)}
            <div className="flex item-center justify-between mt-3">
              <div className="text-[#FEF7EE] ">{item.name}</div>
              <span className="bg-[#BEE3CC] rounded-sm px-2 text-[#111315] font-bold text-xs flex items-center">{item.price}</span>
            </div>
            <div className="flex flex-row items-center mt-1">
              
              {item.votes > 0 ? ( 
                <><img src={star} alt="Star icon" className="w-5 h-5 mr-1" />
                <p className="text-sm font-bold text-[#FEF7EE] mr-1 text-xs">{item.rating}</p>
                <span className="text-xs text-[#4D5562] font-medium">({item.votes} votes)</span>
              </>
              ):(<>
                  <img src={star_NoFill} alt="Star icon" className="w-5 h-5 mr-1" />
                  <span className="text-xs text-[#4D5562] font-medium">No ratings</span>
                </>)}
              {!item.available && (<div className="ml-auto text-xs text-[#ED735D] font-medium">Sold out</div>)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function HeaderContent() {
  return (
    <>
      <div className="relative flex flex-col items-center max-w-[455px] ">
        <h1 className="text-[32px] font-bold pt-22 mb-5">Our Collection</h1>
        <p className="text-center text-[#6F757C]">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="inline-block mt-[22px]">
          <button className="mx-[11px] bg-[#4D5562] rounded-lg py-2 px-3 text-sm font-medium">
            All Products
          </button>
          <button className="mx-[11px] text-sm font-medium">
            Available Now
          </button>
        </div>
        {/* <img src="" alt="" className="absolute" /> */}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

export default function Products() {
  const [data, setData] = useState<[]>();
  useEffect(() => {
    const fun = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    };
    fun();
  }, []);
  return (
    <>
      {data ? (
        <>
          <div className="flex flex-wrap min-h-[100vh] w-[100vw] justify-center bg-slate-400">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-slate-200 flex flex-col size-[max(23vw,10rem)] gap-[5%] m-[1vh] justify-center items-center border-2 border-slate-950"
              >
                <img
                  src={item["image"]}
                  className="size-[50%] object-contain"
                ></img>
                <div className="whitespace-nowrap text-[max(1.5vw,1rem)] w-[80%] text-center overflow-hidden text-ellipsis">
                  {item["title"]}
                </div>
                <div className="flex justify-around items-center w-full">
                  <div className="text-[max(1.5vw,1rem)]">
                    {"$" + item["price"]}
                  </div>
                  <div className="flex justify-center items-center p-[1px] md:p-[.1vw] rounded-[10%] bg-green-500">
                    <svg
                      className="size-[max(2vw,1rem)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#FFFFFF"
                    >
                      <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                    </svg>
                    <div>{item["rating"]["rate"]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

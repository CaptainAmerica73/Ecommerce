export default function Dashboard() {
  return (
    <>
      <div className="dashboard fixed w-[100vw] min-h-[100vh] bottom-0 bg-[url('e-commerce-pictures-mxicxzb5ysgpep7w.jpg')] flex flex-col justify-center items-center gap-[10vh]">
        <div className="text-[max(2.2vw,1.5rem)] z-10 text-cyan-300 font-bold">
          Welcome to our Ecommerce website!!!
        </div>
        <div className="text-[max(2.2vw,1.5rem)] font-black z-10 text-cyan-300">
          Here you can find all products in an user friendly environment with
          lot of features
        </div>
        <div className="text-[max(2.2vw,1.5rem)] z-10 text-cyan-300 font-bold">
          All of our products are of high quality
        </div>
      </div>
    </>
  );
}

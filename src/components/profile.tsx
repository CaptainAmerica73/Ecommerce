export default function Profile(props) {
  return (
    <>
      <div className="bg-slate-400 absolute top-0 w-[100vw] min-h-[100vh] flex flex-col gap-[6vh] justify-center items-center">
        <div className="flex flex-col w-full h-fit justify-center items-center text-[max(1.8vw,1.2rem)]">
          Profile Info
          <div className="min-w-[30%] border-2 border-black h-full flex flex-col gap-[3vw] p-[3vw]">
            <div className="flex justify-between items-center text-[max(1.5vw,1rem)]">
              <p>Name:</p>
              <p>{props.user ? props.user.displayName : ""}</p>
            </div>
            <div className="flex justify-between items-center text-[max(1.5vw,1rem)]">
              <p>Email:</p>
              <p>{props.user ? props.user.email : ""}</p>
            </div>
            <div className="flex justify-between items-center text-[max(1.5vw,1rem)]">
              <p>Mobile No:</p>
              <p>{props.user ? "XXXXXXXXXX" : ""}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-fit justify-center items-center text-[max(1.8vw,1.2rem)]">
          Orders
          <div className="min-w-[30%] border-2 border-black h-full flex flex-col gap-[3vw] p-[3vw]"></div>
        </div>
      </div>
    </>
  );
}

export default function Submit(props) {
  return (
    <button
      className="rounded-[max(1vw,0.5rem)] border-[max(0.2vw,2px)] text-[max(1.5vw,12px)] font-bold text-inherit px-[max(1.5vw,10px)]
           py-[max(0.5vw,4px)] mt-[3%] text-center border-inherit hover:shadow-[2px_2px_5px_1px] hover:shadow-inherit"
    >
      {props.name}
    </button>
  );
}

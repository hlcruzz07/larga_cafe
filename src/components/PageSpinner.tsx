import logo from "../assets/img/logo.png";
export default function PageSpinner() {
  return (
    <div className="w-screen h-screen bg-stone-800 flex items-center justify-center overflow-hidden relative">
      <div className="animate-spin border-t-5 border-white w-50 h-50 rounded-full"></div>
      <img
        src={logo}
        className="absolute w-40 h-40 animate-pulse bg-white rounded-full p-2"
        alt="Page Spinner"
      />
    </div>
  );
}

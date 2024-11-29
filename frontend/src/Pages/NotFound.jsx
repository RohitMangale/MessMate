import img from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center object-contain relative">
      <img className="max-w-[600px] min-w-[100px] z-10  " src={img} alt="404 Not Found" />
    </div>
  );
};

export default NotFound;

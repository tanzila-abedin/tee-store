import { FaHome } from "react-icons/fa";

const Navigate = () => {
  return (
    <nav className="flex justify-between items-center p-4 px-16 fixed w-full h-16 bg-teal-400 shadow-2xl z-10">
      <p className="text-white italic font-medium text-3xl"> Tee-Store</p>
      <a href="/">
        <FaHome color="white" className="h-10 w-10" />
      </a>
    </nav>
  );
};

export default Navigate;

import Link from "next/link";

const navbar = () => {
  return (
    <div className="bg-[#4A249D] flex items-center justify-between font-medium  h-[70px] p-4 md:px-12  text-white ">
      {/* keyboard logo or name */}
      <div className="flex gap-2 items-center">
        <img
          src="https://media.karousell.com/media/photos/products/2024/4/27/choice65_65_custom_mechanical__1714217820_4f2ac4bd_progressive.jpg"
          className="md:w-12 md:h-10 w-6 h-6 rounded-full"
          alt=""
        />
        <h2 className="text-xl md:text-2xl">
          Mechanical <span className="text-[#ECC500]">Keyboard</span> Store
        </h2>
      </div>
      {/* others */}
      <div>
        <ul
          className={`md:flex gap-8 z-10 md:bg-transparent text-white  font-medium md:static absolute text-xl items-center  `}
        >
          <li className="text-lg">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg">
            <Link href="/products">Product</Link>
          </li>
          <li className="text-lg">
            <Link href="/products/addProduct">Add Product</Link>
          </li>
          <li className="text-lg">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;

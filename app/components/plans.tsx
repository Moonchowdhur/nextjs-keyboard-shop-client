import { FaArrowRight } from "react-icons/fa";

const plans = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://www.shutterstock.com/image-photo/male-hands-typing-on-laptop-260nw-2086966642.jpg",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h2 className="tracking-widest mb-2 leading-snug text-3xl font-bold  w-full">
            {" "}
            The Best Choice For <br />{" "}
            <span className="text-[#a58a00]">Keyboard</span> Repair
          </h2>
          <h2 className="font-normal mb-2 text-lg">
            Explore{" "}
            <span className="text-[#a58a00] font-medium tracking-wide">
              Logitech
            </span>{" "}
            wide range of keyboards. Whether you are a gamer, content creator,
            or professional, Logitech offers cutting-edge technology to enhance
            your computing experience.
          </h2>
          <div className="flex mt-4 gap-6 items-center">
            <button className="bg-[#a58a00] text-lg shadow-xl font-medium px-3 py-2 rounded-lg">
              View Services
            </button>
            <button className="text-lg shadow-md flex items-center gap-2 font-medium px-3 py-2 rounded-lg border-2 border-[#a58a00]">
              Pricing Plans <FaArrowRight className="text-[#a58a00] mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default plans;

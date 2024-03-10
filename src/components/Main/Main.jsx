import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="min-h-full pb-[15vh] flex-1 relative font-Outfit ">
      <div className="flex items-center justify-between p-5">
        <p className="text-xl text-[#585858] ">Gemini</p>
        <img src={assets.user_icon} className="rounded-full w-12 " />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="text-6xl font-medium p-5 my-12 text-gray-400 font-Outfit">
          <p className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hello, Dev
          </p>
          <p>How can I help you Today?</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 font-Outfit">
          <div className="bg-slate-100 rounded-md p-4 h-[200px] cursor-pointer relative hover:bg-gray-300 active:bg-blue-200">
            <p className="text-lg text-gray-700">
              Help me find the latest trends
            </p>
            <img
              src={assets.compass_icon}
              alt="compass_icon"
              className="rounded-full bg-white absolute bottom-3 right-3 p-1 w-10 "
            />
          </div>
          <div className="bg-slate-100 rounded-md p-4 h-[200px] cursor-pointer relative hover:bg-gray-300 active:bg-blue-200">
            <p>Compare the differences between pickleball and tennis</p>
            <img
              src={assets.bulb_icon}
              alt="bulb_icon"
              className="rounded-full bg-white absolute bottom-3 right-3 p-1 w-10 "
            />
          </div>
          <div className="bg-slate-100 rounded-md p-4 h-[200px] cursor-pointer relative hover:bg-gray-300 active:bg-blue-200">
            <p>Help me craft a text response to my friend</p>
            <img
              src={assets.message_icon}
              alt="message_icon"
              className="rounded-full bg-white absolute bottom-3 right-3 p-1 w-10 "
            />
          </div>
          <div className="bg-slate-100 rounded-md p-4 h-[200px] cursor-pointer relative hover:bg-gray-300 active:bg-blue-200">
            <p>Generate an image and a bedtime story about </p>
            <img
              src={assets.code_icon}
              alt="code_icon"
              className="rounded-full bg-white absolute bottom-3 right-3 p-1 w-10 "
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full mx-auto max-w-5xl p-5">
          <div className="flex items-center justify-between px-8 py-2 gap-2 bg-slate-200 rounded-full">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className=" w-full outline-none bg-transparent text-lg p-2  "
            />
            <div className="flex space-x-4 items-center">
              <img
                className="w-6 cursor-pointer  "
                src={assets.gallery_icon}
                alt="gallery_icon"
              />
              <img
                className="w-6  cursor-pointer "
                src={assets.mic_icon}
                alt="mic_icon"
              />
              <img
                className="w-6 cursor-pointer  "
                src={assets.send_icon}
                alt="send_icon"
              />
            </div>
          </div>
          <p className="my-4 mx-auto items-center text-center text-md font-light  ">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <span className="underline ">Your privacy & Gemini Apps</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

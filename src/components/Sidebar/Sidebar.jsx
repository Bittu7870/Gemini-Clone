import { useEffect, useState } from "react";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
  const [extend, setExtend] = useState(true);
  const [location, setLocation] = useState("Delhi");
  const handleExtend = () => {
    setExtend(!extend);
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const result = await res.json();
        setLocation(result);
      } catch (error) {
        console.log(error);
      }
    };
    getLocation();
  }, []);

  return (
    <div className="inline-flex flex-col justify-between bg-[#f0f4f9] min-h-[100vh] px-2 py-5 font-Outfit">
      {/* top menu */}
      <div className="">
        <img
          className="w-5 block ml-2 cursor-pointer "
          src={assets.menu_icon}
          alt="menu-icon"
          onClick={handleExtend}
        />
        <div className="inline-flex items-center gap-3 rounded-full bg-[#e6eaf1] text-gray-600 mt-14 text-xl cursor-pointer px-4 py-2">
          <img className="w-5" src={assets.plus_icon} alt="plus-icon" />
          {extend ? <p>New chat</p> : null}
        </div>
        {extend ? (
          <div className="flex flex-col">
            <p className="mt-7 mb-5">Recent</p>
            <div className="flex gap-2 text-[#282828] items-start  truncate p-[10px] pr-10 rounded-full cursor-pointer hover:bg-[#e2e6eb] ">
              <img
                className="w-5"
                src={assets.message_icon}
                alt="message-icon"
              />
              <p>What is recent ...</p>
            </div>
          </div>
        ) : null}
      </div>
      {/* bottom menu */}
      <div className="flex flex-col">
        <div className="flex gap-2 text-[#282828] items-start  truncate p-[10px] pr-10 rounded-full cursor-pointer hover:bg-[#e2e6eb] ">
          <img className="w-5" src={assets.question_icon} alt="q&a-icon" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="flex gap-2 text-[#282828] items-start  truncate p-[10px] pr-10 rounded-full cursor-pointer hover:bg-[#e2e6eb] ">
          <img className="w-5" src={assets.history_icon} alt="history-icon" />
          {extend ? <p className="font-Outfit ">Activity</p> : null}
        </div>
        <div className="flex gap-2 text-[#282828] items-start  truncate p-[10px] pr-10 rounded-full cursor-pointer hover:bg-[#e2e6eb] ">
          <img className="w-5" src={assets.setting_icon} alt="setting-icon" />
          {extend ? <p>Setting</p> : null}
        </div>
        {extend ? (
          <div className="text-sm pl-3">
            <p>
              &#8226; {location.city}, {location.country}
            </p>
            <span className="text-xs pl-2 text-blue-700">
              From your IP address
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;

import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    loading,
    resultData,
    recentPrompt,
    setInput,
    input,
    onSent,
    showResult,
  } = useContext(Context);

  return (
    <div className="min-h-full pb-40 flex-1 relative font-Outfit ">
      <div className="flex items-center justify-between p-5">
        <p className="text-xl text-[#585858] ">Gemini</p>
        <img src={assets.user_icon} className="rounded-full w-12 " />
      </div>
      <div className="max-w-5xl mx-auto">
        {!showResult ? (
          <>
            <div className="text-6xl font-medium p-5 my-12 text-gray-400 font-Outfit">
              <p className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hello, Dev
              </p>
              <p>How can I help you Today?</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 pb-16 font-Outfit">
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
          </>
        ) : (
          <div className="max-h-[70vh] overflow-y-scroll result ">
            <div className="flex items-center space-x-6 my-10">
              <img
                src={assets.user_icon}
                alt="user"
                className="w-10 rounded-full "
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex mt-10 gap-4 items-start">
              {loading ? (
                <img
                  src={assets.gemini}
                  alt="gemini"
                  className="animate-cir360 w-10"
                />
              ) : (
                <img src={assets.gemini_icon} alt="gemini" className="w-10" />
              )}
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-5 w-[760px] bg-gradient-to-r from-blue-400 via-purple-500 to-white rounded-full m-2.5"></div>
                  <div className="h-5 w-[690px] bg-gradient-to-r from-blue-400 via-purple-500 to-white rounded-full m-2.5"></div>
                  <div className="h-5 w-[650px] bg-gradient-to-r from-blue-400 via-purple-500 to-white rounded-full m-2.5"></div>
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-xl font-light "
                />
              )}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 w-full max-w-5xl mx-auto p-5">
          <div className="flex items-center justify-between px-8 py-2 gap-2 bg-slate-200 rounded-full">
            <input
              type="text"
              value={input}
              placeholder="Enter a prompt here"
              className=" w-full outline-none bg-transparent text-lg p-2"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
            />
            <div className="flex space-x-4 items-center">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt="gallery_icon"
              />
              <img
                className="w-6  cursor-pointer "
                src={assets.mic_icon}
                alt="mic_icon"
              />
              {input && (
                <img
                  className="w-6 cursor-pointer"
                  src={assets.send_icon}
                  alt="send_icon"
                  onClick={() => onSent()}
                />
              )}
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

import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [resultData, setResultData] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const typingEffect = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setLoading(true);
    setShowResult(true);
    setResultData("");
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    const responseArray = response.split("**");
    let newResponseArray = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponseArray += responseArray[i];
      } else {
        newResponseArray += `<p class="text-xl font-semibold">${responseArray[i]}</p>`;
      }
    }
    const finalResponseArray = newResponseArray.split("*").join("<br/>");
    const finalResponse = finalResponseArray.split(" ");
    for (let i = 0; i < finalResponse.length; i++) {
      const nextWord = finalResponse[i];
      typingEffect(i, nextWord + " ");
    }
    // setResultData(finalResponseArray);
    setInput("");
    setLoading(false);
  };

  const contextValue = {
    onSent,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    resultData,
    showResult,
    loading,
    newChat,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

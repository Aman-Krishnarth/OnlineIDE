import React, { useState } from "react";
import EditorNavbar from "../components/EditorNavbar";
import Editor from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";

function EditorPage() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false)
  const [tab, setTab] = useState("html")
  const [htmlCode, setHtmlCode] = useState("<h1>Hello world</h1>");
  const [cssCode, setCssCode] = useState("body { background-color: #f4f4f4; }");
  const [jsCode, setJsCode] = useState('console.log("Hello world!")');

  const changeTheme = () => {
    if (isLightMode) {
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

  return (
    <div>
      <EditorNavbar />
      <div className="flex">
        <div className={`${isExpanded ? "w-screen" : "w-1/2"}`}>
          <div
            className={`flex ${
              isLightMode ? "bg-white" : "bg-[#1A1919]"
            } items-center justify-between gap-2 w-full  h-[50px] px-[40px]`}
          >
            <div className="flex items-center gap-2">
              <div className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
				onClick={()=> setTab("html")}
			  >
                HTML
              </div>
              <div className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
			  onClick={()=> setTab("css")} 
			  >
                CSS
              </div>
              <div className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
			  onClick={()=> setTab("js")} 
			  >
                JavaScript
              </div>
            </div>

            <div className="flex items-center gap-2">
              <i
                className={`text-xl cursor-pointer ${
                  isLightMode ? "text-black" : "text-white"
                }`}
                onClick={changeTheme}
              >
                <MdLightMode />
              </i>
              <i className={`text-xl cursor-pointer ${
				isLightMode ? "text-black" : "text-white"
			  }`}
			 onClick={()=> setIsExpanded(!isExpanded)} 
			  >
                <AiOutlineExpandAlt />
              </i>
            </div>
          </div>

          {tab === "html" ? (
            <Editor
              onChange={(value) => {
                setHtmlCode(value || "");
                run();
              }}
              height="82vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="html"
              value={htmlCode}
            />
          ) : tab === "css" ? (
            <Editor
              onChange={(value) => {
                setCssCode(value || "");
                run();
              }}
              height="82vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="css"
              value={cssCode}
            />
          ) : (
            <Editor
              onChange={(value) => {
                setJsCode(value || "");
                run();
              }}
              height="82vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="javascript"
              value={jsCode}
            />
          )}
        </div>

        <iframe
          id="output"
          className={`${isExpanded ? "w-0" : "w-1/2"} min-h-screen bg-red-400`}
        ></iframe>
      </div>
    </div>
  );
}

export default EditorPage;

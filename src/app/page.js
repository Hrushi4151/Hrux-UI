"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const LandingPage = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");
  const [isprocess, setisprocess] = useState(true);
  const [model, setModel] = useState("1");

  const [showPreview, setShowPreview] = useState(true)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopySuccess("Code copied!");
      setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
    } catch (error) {
      setCopySuccess("Failed to copy.");
      setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
    }
  };

  const generateCode1 = async () => {
    setGeneratedCode(null);
    setisprocess(false);
    
    if (prompt !== "") {
      try {
        const response = await fetch("/api/getData2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idea: prompt+" give only html code no extra information just html in tailwind css" }),
        });
  
        if (response.status !== 200) {
          throw new Error("Failed to generate code");
        }
  
        const data = await response.json();
        let rawData = data.data;
        rawData=rawData.replaceAll("\\n","\n")
        setGeneratedCode(rawData);
      } catch (error) {
        console.log(error);
        
        toast.error("Error Generating. Try Again...!");
        setGeneratedCode("Error generating code. Please try again.");
      }
    } else {
      toast.error("Please Enter Prompt...!", {
        duration: 2000,
      });
    }
    setisprocess(true);
  };


  
  
 

  const generateCode2 = async () => {
    setGeneratedCode(null)
    setisprocess(false)
   if(prompt!=""){ try {
      const response = await fetch("/api/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea: prompt+" give only html code no extra information just html in tailwind css" }),
      });

      if (!response.status==200) {
        throw new Error("Failed to generate code");
      }
      
      const data = await response.json();
    
      let fdata=data.response.html
      setGeneratedCode(fdata);
    } catch (error) {
      console.log(error);
      
      toast.error("Error Generating. Try Again...!")
      setGeneratedCode("Error generating code. Please try again.");
    }}else{
    
      toast.error("Please Enter Prompt...!",{
        duration: 2000,
      })
    }
    setisprocess(true);
  };


  const generateCode3 = async () => {
    setGeneratedCode(null)
    setisprocess(false)
   if(prompt!=""){ try {
      const response = await fetch("/api/geminiApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: prompt }),
      });

      if (!response.status==200) {
        throw new Error("Failed to generate code");
      }
      
      const data = await response.json();
      console.log(data)
      let fdata=data.output.replaceAll("```html","").replaceAll("```","")
      setGeneratedCode(fdata);
    } catch (error) {
      toast.error("Error Generating. Try Again...!")
      setGeneratedCode("Error generating code. Please try again.");
    }}else{
    
      toast.error("Please Enter Prompt...!",{
        duration: 2000,
      })
    }
    setisprocess(true);
  };


  const handleClick = () => {
    if (model === "1") {
      generateCode3();
    } else if (model === "2") {
      generateCode1();
    } else {
      generateCode2();
    }
  };




  return (
    <StyledWrapper>
      <main>
      <div
      style={{
        fontFamily: "Copperplate, Papyrus, fantasy",
        fontWeight:"1000",
        textAlign: "center",
        padding: "50px 20px",
        minHeight: "100vh",
      }}
    >
      
      <h1 className=" font-[1000] text-3xl md:text-6xl mb-3">Welcome to <span className="font-[1300] text-red-500"> Hrux UI</span></h1>
      <p className="text-xl md:text-3xl" style={{  color: "gray", marginBottom: "40px" }}>
        Say goodbye to tedious coding and hello to beautiful designs.
      </p>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <p className="font-semibold text-md mb-4" >
          Generate stunning UI components from simple text prompts.
        </p>
        <div className=" flex justify-center mb-4 space-x-8">
              <button
onClick={()=>setModel("1")}
              className={`${model=="1" ? "bg-black border-white text-white":"bg-white border-black"} hover:bg-black border-2 border-black text-black hover:text-white hover:border-white  font-bold py-2 px-4 rounded-lg`}
               
                variant={showPreview ? "default" : "outline"}
              >
                Model 1
              </button>
              <button
              onClick={()=>setModel("2")}
              className={`${model=="2" ? "bg-black border-white text-white":"bg-white border-black"} hover:bg-black border-2 border-black text-black hover:text-white hover:border-white  font-bold py-2 px-4 rounded-lg`}
                variant={showPreview ? "default" : "outline"}
              >
                Model 2
              </button>
              <button
              onClick={()=>setModel("3")}
              className={`${model=="3" ? "bg-black border-white text-white":"bg-white border-black"} hover:bg-black border-2 border-black text-black hover:text-white hover:border-white  font-bold py-2 px-4 rounded-lg`}
               
                variant={showPreview ? "default" : "outline"}
              >
                Model 3
              </button>
            
          </div>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your idea"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ced4da",
            fontSize: "1rem",
          }}
          rows={1}
        ></textarea>
        <button
         onClick={handleClick}
          disabled={!isprocess}
          style={{
            padding: "10px 20px",
            backgroundColor: "black",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            background:`${!isprocess ? "gray" :"black"}`
          }}
        >
          {!isprocess ? "Generating....":"Generate"}
        </button>
        </div>

        {generatedCode && (
          <div className="w-[70vw] mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Generated Design</h1>
          <div className=" flex justify-center mb-4 space-x-8">
              <button

              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
                onClick={() => setShowPreview(true)}
                variant={showPreview ? "default" : "outline"}
              >
                Preview
              </button>
              <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
                onClick={() => setShowPreview(false)}
                variant={!showPreview ? "default" : "outline"}
                
              >
                Code
              </button>
            
          </div>
          <div className="border border-gray-300 rounded-lg p-4 text-black bg-white shadow-xl shadow-black shadow-[0 2px 5px rgba(0, 0, 0, 0.1)]">
            {showPreview ?   
              <>
              <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
              <div dangerouslySetInnerHTML={{ __html: generatedCode }} />
                {/* <iframe srcDoc={generatedCode} className="w-full h-[80vh] " ></iframe> */}
              </>
             : (
              <div
              style={{
                marginTop: "30px",
                padding: "15px",
                border: "1px solid #e9ecef",
                borderRadius: "8px",
                backgroundColor: "#f8f9fc",
                textAlign: "left",
                position: "relative",
              }}
            >
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                  fontSize: "0.9rem",
                  color: "#212529",
                }}
              >
                {generatedCode}
              </pre>
              <button
                onClick={copyToClipboard}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
               {copySuccess=="" ? "Copy" : copySuccess} 
              </button>
            </div>
            )}
          </div>
        </div>
    
        )}
        </div>
      </main>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  font-family:Copperplate, Papyrus, fantasy;
  color:black;

  .hero {
    background: #282c34;
    color: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .input-section {
    margin: 2rem auto;
    max-width: 600px;
    text-align: center;
  }

  .input-section textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .input-section button {
    background: #00aaff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
  }

  .input-section button:hover {
    background: #008ecc;
  }

  .output-section {
    margin: 2rem auto;
    max-width: 600px;
    text-align: left;
    background: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
  }

  .code-preview {
    font-family: "Courier New", Courier, monospace;
    background: #1e1e1e;
    color: #00ff6c;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    white-space: pre-wrap;
  }
`;

export default LandingPage;

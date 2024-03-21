// src/Translator.js
import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    console.log("Target Language:", targetLang);
    console.log("Target Language:", sourceLang);
    try {
    //   const formData = new URLSearchParams();
    //   formData.append("text", inputText);
    //   formData.append("source", sourceLang);
    //   formData.append("target", targetLang);
      const encodedParams = new URLSearchParams();
      encodedParams.set("source_language", sourceLang);
      encodedParams.set("target_language", targetLang);
      encodedParams.set("text", inputText);

      const response = await axios.post(
        "https://text-translator2.p.rapidapi.com/translate",
        encodedParams,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "text-translator2.p.rapidapi.com",
            "x-rapidapi-key":
              "a7a5207bb2msh2d2ebd64286c39fp14452djsnb7ed461e8e44",
          },
        }
      );
      console.log(response.data.data.translatedText);
      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };


  return (
    <div>
      <h1>Universal Language Translator</h1>
      <div>
        <label>Source Language:</label>
        <input
          type="text"
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        />
      </div>
      <div>
        <label>Target Language:</label>
        <input
          type="text"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        />
      </div>
      <div>
        <label>Enter Text:</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>
      <button onClick={translateText}>Translate</button>
      {translatedText && (
        <div>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;

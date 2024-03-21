import logo from "./logo.svg";
import "./App.css"; // Import App.css here
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  async function getTranslatedData() {
    try {
      const encodeData = new URLSearchParams();
      encodeData.append("source_language", sourceLanguage);
      encodeData.append("target_language", targetLanguage);
      encodeData.append("text", data);

      const option = {
        method: "post",
        url: "https://text-translator2.p.rapidapi.com/translate",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "a7a5207bb2msh2d2ebd64286c39fp14452djsnb7ed461e8e44",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
        data: encodeData,
      };
      const res = await axios.request(option);
      setResult(res.data.data.translatedText);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="select-container">
        <select
          name="source"
          onChange={(e) => {
            setSourceLanguage(e.target.value);
          }}
          value={sourceLanguage}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="ml">Malayalam</option>
          <option value="ta">Tamil</option>
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="ar">Arabic</option>
          <option value="hy">Armenian</option>
          <option value="az">Azerbaijani</option>
          <option value="eu">Basque</option>
          <option value="be">Belarusian</option>
          <option value="bs">Bosnian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="zh-CN">Chinese</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="gu">Gujarati</option>
          <option value="ga">Irish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="kn">Kannada</option>
          <option value="ko">Korean</option>
          <option value="la">Latin</option>
          <option value="mr">Marathi</option>
          <option value="ne">Nepali</option>
          <option value="pa">Punjabi</option>
          <option value="sr">Serbian</option>
        </select>
      </div>
      <div className="select-container">
        <select
          name="target"
          onChange={(e) => {
            setTargetLanguage(e.target.value);
          }}
          value={targetLanguage}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="ml">Malayalam</option>
          <option value="ta">Tamil</option>
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="ar">Arabic</option>
          <option value="hy">Armenian</option>
          <option value="az">Azerbaijani</option>
          <option value="eu">Basque</option>
          <option value="be">Belarusian</option>
          <option value="bs">Bosnian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="zh-CN">Chinese</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="gu">Gujarati</option>
          <option value="ga">Irish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="kn">Kannada</option>
          <option value="ko">Korean</option>
          <option value="la">Latin</option>
          <option value="mr">Marathi</option>
          <option value="ne">Nepali</option>
          <option value="pa">Punjabi</option>
          <option value="sr">Serbian</option>
        </select>
      </div>
      <div className="input-container">
        <input
          className="form-control"
          name="data"
          placeholder="Enter data here"
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
      </div>
      <div className="button-container">
        <button className="btn btn-primary" onClick={getTranslatedData}>
          Translate
        </button>
      </div>
      <div className="result-container">
        <p className="result">{result}</p>
      </div>
    </div>
  );
}

export default App;

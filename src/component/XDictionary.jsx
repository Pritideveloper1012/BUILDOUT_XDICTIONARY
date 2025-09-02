import React, { useState } from "react";

function XDictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundWord) {
      setResult(
        <div>
          <h3>Definition:</h3>
          <p>{foundWord.meaning}</p>
        </div>
      );
    } else {
      setResult(<p>Word not found in the dictionary.</p>);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ marginTop: "20px" }}>{result}</div>
    </div>
  );
}

export default XDictionary;

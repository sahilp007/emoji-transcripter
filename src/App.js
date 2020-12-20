import React, { useState } from "react";
import "./styles.css";

var inputStyles = {
  marginTop: "1rem",
  padding: "1rem",
  width: "80%",
  border: "2px solid",
  borderRadius: "11px",
  fontSize: "larger",
  textAlign: "center"
};

var spanStyles = {
  padding: "0 2rem",
  cursor: "pointer"
};

var emojiDict = {
  "🙆‍♀️‍": "Gesturing NO",
  "🧏‍♂️": "Can't Hear",
  "🙇‍♀️": "Bowing",
  "🤦‍♂️": "Facepalm : Disappointed",
  "🤳": "Selfie",
  "🤙": "Call me hand",
  "👋": "Waveing Hand",
};

// get list of emojis from the dict
var emojiList = Object.keys(emojiDict);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function inputEventHandler(event) {
    var inputEmoji = event.target.value;

    // if text is cleared, reset the emojiMeaning to empty string
    if (inputEmoji === "") {
      setEmojiMeaning("");
    } else {
      if (inputEmoji in emojiDict) {
        setEmojiMeaning(emojiDict[inputEmoji]);
      } else {
        setEmojiMeaning("Sorry, this emoji is not in the database.");
      }
    }
  }

  function emojiClickHandler(item) {
    var emojiClicked = item;
    var meaning = emojiDict[emojiClicked];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Animals Emoji</h1>

      <input
        placeholder="Enter some animal emoji"
        style={inputStyles}
        onChange={inputEventHandler}
      />

      <div className="showMeaning">{emojiMeaning}</div>

      <div className="emojiContainer">
        {emojiList.map((item) => {
          return (
            <span
              key={item}
              style={spanStyles}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

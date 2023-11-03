import { useState } from "react";
import "./ScrambleGame.css";

const ScrambleGame = () => {
  //   const msg = document.querySelector(".msg");
  //   const guess = document.querySelector("input");
  //   const btn = document.querySelector(".btn");

  //   let newWords = "";
  //   let randWords = "";
  //   let play = false;

  const [newWords, setNewWords] = useState("");
  const [randWords, setRandWords] = useState("");
  const [play, setPlay] = useState(false);
  const [tempWord, setTempWord] = useState("");
  const [message, setMessage] = useState("");
  const [isInputHidden, setInputHidden] = useState(true);

  let sWord = [
    "python",
    "react",
    "node",
    "c++",
    "java",
    "javascript",
    "django",
    "express",
    "php",
    "html",
    "css",
    "angular",
    "swift",
  ];

  const createNewWords = () => {
    let ranNo = Math.floor(Math.random() * sWord.length);
    // console.log("Random Num :", ranNo);
    let newTempsWord = sWord[ranNo];
    return newTempsWord;
  };

  const scrambleWord = (arr) => {
    let len = arr.length - 1;
    for (let i = len; i >= 0; i--) {
      let tem = arr[i];
      // console.log("Value of temporary Num :", tem);
      let j = Math.floor(Math.random() * (i + 1));
      //   console.log("Value of i :", i);
      //   console.log("Value of j :", j);

      arr[i] = arr[j];
      arr[j] = tem;
    }
    return arr;
  };

  //   btn.addEventListener("click", function () {
  //     if (!play) {
  //       play = true;
  //       btn.innerHTML = "Guess";
  //       guess.classList.toggle("hidden");
  //       newWords = createNewWords();
  //       randWords = scrambleWord(newWords.split("")).join("");
  //       //   console.log("Random Words :", randWords.join(""));
  //       msg.innerHTML = `Guess the word: ${randWords}.`;
  //     } else {
  //       let tempWord = guess.value;
  //       if (tempWord === newWords) {
  //         // console.log("Correct");
  //         play = false;
  //         msg.innerHTML = `Awesome. Its Correct. It is ${newWords}.`;
  //         btn.innerHTML = "Start Again";
  //         guess.classList.toggle("hidden");
  //         guess.value = " ";
  //       } else {
  //         // console.log("Incorrect");
  //         msg.innerHTML = `oops! Its Incorrect. Please try again!
  //         ${randWords}`;
  //       }
  //     }
  //   });

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    if (!play) {
      setPlay(true);
      const newWord = createNewWords();
      const scrambledWord = scrambleWord(newWord.split("")).join("");
      setNewWords(newWord);
      setRandWords(scrambledWord);
      setMessage(`Guess the word: ${scrambledWord}`);
      setInputHidden(false);
    } else {
      if (tempWord === newWords) {
        setPlay(false);
        setMessage(`Awesome. It's Correct. It is ${newWords}.`);
        setInputHidden(true);
        setTempWord("");
      } else {
        setMessage(`Oops! It's Incorrect. Please try again! ${randWords}`);
      }
    }
  };

  return (
    <div>
      <header className="header">
        <h1 className="mainHeading"> Guess the Word Game</h1>
      </header>
      <section className="section">
        <div className="gameArea">
          <h3 className="msg">{message}</h3>
          <input
            type="text"
            className={isInputHidden ? "hidden" : ""}
            value={tempWord}
            onChange={(e) => setTempWord(e.target.value)}
            onKeyPress={handleEnterPress}
          />
          <button className="btn" onClick={handleButtonClick}>
            {play ? "Guess" : "Click here to start!"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ScrambleGame;

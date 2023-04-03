//BY SWANKYNOOB, UNDER MIT LICENSE
function InitHanna() {
  let knownWords = {
    "hello": "Hi there!",
    "how are you": "I'm doing well, thank you.",
    "what's your name": "My name is Hanna.",
    "hi": "Hello, how are you?",
    "yes": "Ok.",
    "what is your name?": "My name is Hanna.",
    "who is your favorite artist?": "Racionais MCs",
    "what kind of music do you like?": "Racionais MCs",
    "who raised you?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "who made you?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "who developed you?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "who created you?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "who is your creator?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "who is your developer?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "what is your developer?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "what time is it": () => {
      let date = new Date();
      alert(`It is now ${date.toLocaleTimeString()} on ${date.toLocaleDateString()}.`);
    },
    "play music": (song) => {
      window.open(`https://soundcloud.com/search?q=${song}`);
    },
    "turn on bluetooth": () => {
      // code to turn on Bluetooth
    }
  };

  knownWords["tocar música"] = () => {
  let song = prompt("Que música você quer tocar?");
  window.open(`https://soundcloud.com/search?q=${song}`);
};

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ask me something!";
  document.body.appendChild(input);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let question = input.value.toLowerCase();
      let answer;

      if (knownWords[question]) {
        answer = knownWords[question];
      } else {
        answer = prompt(`I don't know the answer to that. Can you teach me?`);
        knownWords[question] = answer;
      }

      if (typeof answer === "function") {
        answer();
      } else {
        alert(answer);
      }

      input.value = "";
    }
  });
}

let recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

let isRecording = false;
let button = document.createElement("button");
button.textContent = "Start Recording";
document.body.appendChild(button);

button.addEventListener("click", () => {
  if (!isRecording) {
    recognition.start();
    isRecording = true;
    button.textContent = "Stop Recording";
  } else {
    recognition.stop();
    isRecording = false;
    button.textContent = "Start Voice Recognition";
  }
});

recognition.onresult = (event) => {
  let transcript = event.results[event.results.length - 1][0].transcript;
  input.value = transcript;
};

recognition.onend = () => {
  if (isRecording) {
    recognition.start();
  }
};

console.log("AI API by SwankyNoob, Hanna Update 1.0.0")

function InitHanna() {
  let knownWords = {
    "hello": "Hi there!",
    "how are you": "I'm doing well, thank you.",
    "what's your name": "My name is Hanna.",
    "oi": "Olá! Tudo Bem?",
    "sim": "Ok.",
    "qual é seu nome?": "Meu nome é Hanna.",
    "qual é seu artista favorito?": "Racionais MCs",
    "que tipo de música você gosta?": "Racionais MCs",
    "quem te criou?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "quem te fez?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "quem te desenvolveu?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "quem criou você?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "quem é seu criador?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "quem é seu desenvolvedor?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "qual é seu desenvolvedor?": "Wesley Yan Soares Brehmer, CEO/Fundador da SwankyNoob",
    "que horas que é": () => {
      let date = new Date();
      alert(`O horário atual é ${date.toLocaleTimeString()} on ${date.toLocaleDateString()}.`);
    },
    "toque música": (song) => {
      window.open(`https://soundcloud.com/search?q=${song}`);
    },
    "ligue o bluetooth": () => {
      // code to turn on Bluetooth
    }
  };

  knownWords["tocar música"] = () => {
  let song = prompt("Que música você quer tocar?");
  window.open(`https://soundcloud.com/search?q=${song}`);
};

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Me pergunte algo!";
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
button.textContent = "Iniciar Gravação";
document.body.appendChild(button);

button.addEventListener("click", () => {
  if (!isRecording) {
    recognition.start();
    isRecording = true;
    button.textContent = "Parar de Gravar";
  } else {
    recognition.stop();
    isRecording = false;
    button.textContent = "Iniciar Recohecimento de Voz";
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

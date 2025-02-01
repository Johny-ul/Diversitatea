const quizData = [
    {
      question: "Care este adâncimea maximă a Mării Negre??",
      options: ["1.500 m", "2.212 m", "3.100 m", "850 m"],
      answer: "2.212m"
    },
    {
      question: "Câte specii de delfini trăiesc în Marea Neagră?",
      options: ["4", "1", "3", "5"],
      answer: "3"
    },
    {
        question: "Ce problemă ecologică afectează cel mai mult Marea Neagră la adâncimi mari?",
        options: ["Lipsa oxigenului", "Temperaturile scăzute", "Exploatarea petrolieră", "Supra-popularea peștilor"],
        answer: "Lipsa oxigenului"
      },
      {
        question: "Care este cel mai valoros pește din Marea Neagră datorită icrelor sale??",
        options: ["Hamsia", "Sturionul", " Scrumbia", "Stavridul"],
        answer: "Sturionul"
      },
      {
        question: "De ce este Marea Neagră mai puțin sărată decât oceanul?",
        options: ["Pentru că primește apă dulce din râuri", "Pentru că este foarte adâncă", "Pentru că este legată de Oceanul Planetar", "Pentru că nu are maree"],
        answer: "Pentru că primește apă dulce din râuri"
      },
      {
        question: "Câte specii de alge gāsim în Marea Neagră?",
        options: ["3", "1", "4", "2"],
        answer: "3"
      },
      {
        question: "Cum a fost Marea Neagră în urmă cu aproximativ 7.500 de ani?",
        options: ["O mare sărată deschisă", "Un lac de apă dulce ", " Un râu subteran", " Un ocean format recent"],
        answer: "Un lac de apă dulce "
      },
      {
        question: "Ce efect are pescuitul excesiv asupra ecosistemului Mării Negre?",
        options: ["Crește numărul de pești", "Afectează populațiile de pești și delfini", "Îmbunătățește biodiversitatea", "Crește salinitatea apei"],
        answer: "Afectează populațiile de pești și delfini"
      },
      {
        question: "Ce fenomen face ca epavele din Marea Neagră să fie foarte bine conservate?",
        options: ["Lipsa oxigenului", "Curenții marini puternici", "Prezența coraliilor", "Aciditatea ridicată a apei"],
        answer: "Lipsa oxigenului "
      },
      {
        question: "Care dintre următoarele specii de pești este migratoare și urcă pe Dunăre pentru reproducere?",
        options: [" Hamsia", "Scrumbia de Dunăre", "Sturionul", "Chefalul"],
        answer: "Scrumbia de Dunăre "
      },

    
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Chestionar completat</h1>
      <p>Rāspunsuri corecte: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
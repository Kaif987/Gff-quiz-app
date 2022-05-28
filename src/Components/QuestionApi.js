const qBank = [
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "099091"
    },
    {
      question:
        "Who build facebook ?",
      answers: ["Mark zukerberg", "Elon musk", "Jack Dorsey", "Einstein"],
      correct: "Mark zukerberg",
      questionId: "099096"
    },
    {
      question:
        "What is the capital of turkey?",
      answers: ["Anakara", "kathmandu", "New Delhi", "Istanbul"],
      correct: "Ankara",
      questionId: "099095"
    },
    {
      question:
        "Who is the president of Russia?",
      answers: ["Vladimir Putin", "Joe biden", "Vladimir Zelenski", "Kp Oli"],
      correct: "Vladimir Putin",
      questionId: "099094"
    },    
    {
      question:
        "Who is the first education minister of India ?",
      answers: ["Moulana Abdul Kalam Azad", "Modi ", "Yogi ", "Denesh Sharma"],
      correct: "Moulana Abdul Kalam Azad",
      questionId: "099092"
    },
   
  ];
    
  // n = 5 to export 5 question
  export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
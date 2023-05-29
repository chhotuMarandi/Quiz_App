const quesData = [
  {
    id: 1,
    question: " The smallest unit in a digital system is a",
    a: " Mega Byte",
    b: "text",
    c: "bit",
    d: "character",
  },
  {
    id: 2,
    question: " Type of software that can be described as “end-user” software",
    a: " DOS",
    b: " application software",
    c: "system software",
    d: " operation software",
  },
  {
    id: 3,
    question:
      "Which of these operating system does not have a graphical user interface ?",
    a: "Windows 95",
    b: "Mac OS",
    c: "Linux",
    d: "Ms Dos",
  },
];


const questionContainer = document.querySelector(".question-container");

function displayQues () {
  let mapQues = quesData.map((item) => {

   console.log(item.question)

     return `<div class="data">
        <div class="questions">
          <h4>1. {item.question}</h4>
        </div>
        <div class="ans-list">
          <ul class="ans">
            <li>
              <input type="radio" name="ansBox">
              <label for="">item.a</label>
            </li>
            <li>
              <input type="radio" name="ansBox">
              <label for="">item.b</label>
            </li>
            <li>
              <input type="radio" name="ansBox">
              <label for="">item.c</label>
            </li>
            <li>
              <input type="radio" name="ansBox">
              <label for="">item.d</label>
            </li>
          </ul>
        </div>
    </div>`;

   })
      mapQues = mapQues.join("");
      questionContainer.innerHTML = mapQues;
  }

displayQues();
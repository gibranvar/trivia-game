const url = 'https://opentdb.com/api.php?amount=10&type=multiple'

let score = 0;

async function getTrivia() {
  let response = await fetch (url);
 
  let data = response.json ();
  return data;

}

function shuffleArray(arr) {
  console.log(arr)
   for (let i = arr.length - 1; i >= 0; i -- ) {
    const s = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[s]] = [arr[s], arr[i]] 
  //   console.log(i);
  //  console.log(s);
  //  console.log(arr);
  }
}


getTrivia().then((data) => {
  const results = data.results[0];
  console.log(results);

  
  let question = document.getElementById("question").innerHTML = results.question;
  let category = document.getElementById("category").innerHTML = `${"CATEGORY: ".bold()}${results.category.toUpperCase()}`;

  const difficulty =
    results.difficulty.toUpperCase() ;
  document.getElementById('difficulty').innerHTML = `${"DIFFICULTY: ".bold()}${difficulty}`;
  const answers = [...results.incorrect_answers, results.correct_answer];

  shuffleArray(answers);
  for (let i = 0; i < 4; i++) {
    let index = i + 1;
    document.getElementById(`choice${index}label`).innerHTML = answers[i];
    document.getElementById(`choice${index}`).value = answers[i];
  }
  document.getElementById("guess").addEventListener("click", () => {
    document.querySelectorAll('input[name="choice"]').forEach((el) => {
      if (el.checked) {
       
        // if (el.value === results.correct_answers)
      }
      // let form = document.querySelector("form");
      const wrongAnswer = "<img width='300px' src='https://c.tenor.com/FYS4s3ttBIMAAAAC/gordon-ramsay-hells-kitchen.gif'><p>☠ BAD LUCK, THE CORRECT ANSWER IS</p></img>"

      const correctAnswer = "<img src='https://c.tenor.com/NVlG12ERFzwAAAAM/clapping-leonardo-dicaprio.gif'><p>YOU'RE THE MASTER CHIEF 😎</p></img>"

      document.getElementById("guess").addEventListener("click", () => {
        document.querySelectorAll('input[name="choice"]').forEach((el) => {
          const result = document.getElementById("result");
          if (el.checked) {
            
            if (el.value === results.correct_answer) {
              result.innerHTML = correctAnswer; 
            } else
              result.innerHTML = `${wrongAnswer} ${results.correct_answer}`;
          }
        });
      });
    });
  });
  document.getElementById("new").addEventListener("click", () => {
    location.reload();
  });
});




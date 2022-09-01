const url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple'


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
const results =data.results[0];
console.log(results);

document.getElementById ('question').innerHTML = results.question;
document.getElementById('category').innerHTML = results.category;

const answers = [...results.incorrect_answers, results.correct_answer];

shuffleArray(answers);


for(let i = 0; i < 4; i++){
  let index = i + 1; 
 document.getElementById(`choice${index}label`).innerHTML = answers [i];
 document.getElementById(`choice${index}`).value = answers [i];
}
let form = document.querySelector('form');

document.getElementById('guess').addEventListener('click', () => {

 document.querySelectorAll('input[name="choice"]').forEach((el)=> {
if(el.checked){
  console.log(el.value  )
console.log (results.correct_answer)

  // if (el.value === results.correct_answers)
    }
let form = document.querySelector('form');

document.getElementById('guess').addEventListener('click', () => {
 document.querySelectorAll('input[name="choice"]').forEach((el) =>{
  const result = document.getElementById('result');
  if(el.checked){
   console.log(el.value);
   console.log(results.correct_answer)

   if (el.value === results.correct_answer){
    result.innerHTML = 'Buena esa es la correcta'
   }
  }
 })
})

    });
  });
});


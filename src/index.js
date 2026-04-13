
console.log(document.querySelector("#user-instructions"));


function displayPoem(response){
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });

}


function generatePoem(event) {
    event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
let key = "fb6a7o33d928a9e256t114bb04022298";
let prompt =`Generate a French poem about ${instructionsInput.value}`;
let context = "You are a French romantic poet. Write a 4-line poem in basic HTML, separating the lines with a br/. Don't include any other symbols, quote marks, html tag, only the poem text. Sign the poem with `SheCodes Ai` inside a <strong> element";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

axios.get(apiUrl).then(displayPoem);

   


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);


/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.querySelector('#submit-btn').addEventListener('click', (calculate) =>{
    calculate.preventDefault();
    let kilograms = document.querySelector('#search').value;
    const output = document.querySelector("#output");
    // sukuriam elementą h1
    let div = document.createElement('p');
      // elementui "uždedam" stilių
    div.style.display = "block";
    div.style.textAlign = "center";
    div.style.fontSize = "1.5rem"
    // eleemntui gauna reikšmes
    div.innerText = '| Weight in lb: ' + (kilograms* 2.2046) + ' | Weight in g: ' + (kilograms / 0.0010000) + ' | Weight in oz: ' + (kilograms* 35.274) + ' |';
    // naujas rezultatas viršuje
    output.prepend(div);
} );

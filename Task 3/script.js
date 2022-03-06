/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', ()=>
{
    document.querySelector('#message').style.display = 'none';
    const output = document.querySelector('#output');
    // Div su id output stiliaus parapetrai
    output.style.display = "flex"; 
    output.style.flexWrap = "wrap";
    output.style.justifyContent = "center";
    fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
             // Sukurama kortelė ir jos stilius stilius
            const card = document.createElement("div");
            card.setAttribute("class", "card");
            card.style.borderStyle = "solid"; "black";
            card.style.width = "110px";
            card.style.margin = "10px";
            output.append(card);
            // du nauji elementai sukuriami
            const para = document.createElement("p");
            const img = document.createElement("img");
            // nuotraukos stilius
            img.style.width = "100%";
            img.style.margin = "auto";
            img.style.display = "block";
            img.setAttribute("src", element.avatar_url);
            para.innerText = element.login;
            // vardo stilius
            para.style.color = "blue";
            para.style.textAlign = "center";
            card.appendChild(img);
            card.appendChild(para);
        });
     })
}
);
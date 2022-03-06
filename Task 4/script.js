/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector('#output');
// Div su id output stiliaus parapetrai
output.style.display = "flex"; 
output.style.flexWrap = "wrap";
output.style.justifyContent = "center";

fetch(ENDPOINT)
  .then(res => res.json()) 
  .then(data => {
      data.forEach(element => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.style.borderStyle = "solid"; 
        card.style.borderColor = "black";
        card.style.width = "120px";
        card.style.margin = "10px";
        card.style.color = "red";
        card.style.textAlign = "center";
        card.textContent = element.brand;
        output.appendChild(card);
        element.models.forEach(el => {
            const div = document.createElement('div');
            div.style.color = "blue";
            div.style.textAlign = "left";
            div.textContent = el;
            card.appendChild(div);
        });
          
      });
});



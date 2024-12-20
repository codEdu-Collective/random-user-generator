const button = document.querySelector(".button");
const box = document.querySelector(".box");

const veriGetir = async () => {
  const result = await fetch("https://randomuser.me/api/");
  const data = await result.json();
  console.log(data);
  ekranaBas(data);
};
veriGetir();

const ekranaBas = (person) => {
  box.innerHTML = `
    <img class="image" src="${person.results[0].picture.large}" alt="" />
    <h3>${person.results[0].name.title} ${person.results[0].name.first} ${person.results[0].name.last}</h3>
    <h5>${person.results[0].email}</h5>
    <h5>${person.results[0].phone}</h5>`;
};
button.addEventListener("click", (e) => {
  veriGetir();
});

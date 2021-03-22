
const botao = document.querySelector('button');
const select = document.querySelector('select');
let moedas;


fetch('https://economia.awesomeapi.com.br/json/all')

.then(res => res.json())
.then(res => {

  
    moedas = Object.values(res)

    moedas.forEach((element, key) => {
        
        select.innerHTML += `<option value="${key}">${element.name}</option>`;
    })


})


botao.onclick = () => {
    
    let input = Number(document.querySelector('input').value.replace(',','.'));

    let resposta = (input * Number(moedas[select.value].ask)).toFixed(2);

    document.querySelector('h2').innerHTML = 'R$ '+resposta;

}
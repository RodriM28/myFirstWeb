
const mensagem = document.getElementById('bot1').addEventListener('click', () => {
    document.getElementById('msg1').innerText= 'Olá mundo';
    document.getElementById('msg2').innerText= 'Olá mundo';
});

const texto = document.getElementById('bot1').innerText='click Aqui';
const minhaDiv = document.createElement("div");
minhaDiv.id = 'xpto';
document.body.appendChild(minhaDiv);

const meuBotao = document.createElement("button");
meuBotao.textContent = "Clique aqui para apagar";
meuBotao.id = 'omb' ;
document.getElementById('xpto').appendChild(meuBotao)


const cor = document.getElementById('h001').style.color = 'green'

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => document.getElementById('h001').innerText = 'Olá mundo', 5000)
})
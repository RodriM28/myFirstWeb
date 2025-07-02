
//body
document.body.style.backgroundColor='#ffffff'
document.body.style.fontFamily= 'Arial, sans-serif'
document.body.style.margin= '30px'
document.body.style.padding='0px'

//header
const header = document.createElement("header");
header.id = 'header';
document.body.appendChild(header);

const h1header = document.createElement("h1");
h1header.textContent='HEADER'
h1header.id = 'h1header';
document.getElementById('header').appendChild(h1header)
//header css
const headerdisplay = document.getElementById('header').style.display = 'flex'
const headerjjustify = document.getElementById('header').style.justifyContent='center'
const headeralign = document.getElementById('header').style.alignItems='center'
const headercorfundo = document.getElementById('header').style.backgroundColor='#d9d9d966'
const headercor = document.getElementById('header').style.color='black'
const headerheight = document.getElementById('header').style.height='100px'
//header h1
const h1headerfont = document.getElementById('h1header').style.fontSize = '3em'
const h1headerbold = document.getElementById('h1header').style.fontWeight ='bold'

//nav
const navegador = document.createElement("nav");
navegador.id = 'navegador';
document.body.appendChild(navegador);

const navDiv1 = document.createElement("div");
navDiv1.textContent='HOME';
navDiv1.id = 'navdiv1';
document.getElementById('navegador').appendChild(navDiv1)

const navDiv2 = document.createElement("div");
navDiv2.textContent='ABOUT'
navDiv2.id = 'navdiv2';
document.getElementById('navegador').appendChild(navDiv2)

const navDiv3 = document.createElement("div");
navDiv3.textContent='SERVICE'
navDiv3.id = 'navdiv3';
document.getElementById('navegador').appendChild(navDiv3)

const navDiv4 = document.createElement("div");
navDiv4.textContent='CONTACT'
navDiv4.id = 'navdiv4';
document.getElementById('navegador').appendChild(navDiv4)
//nav css
const navdisplay = document.getElementById('navegador').style.display = 'flex'
const navjustify = document.getElementById('navegador').style.justifyContent='center'
const navalign = document.getElementById('navegador').style.alignItems='center'
const navcorfundo = document.getElementById('navegador').style.backgroundColor=' #3b3a3a'
const navrcor = document.getElementById('navegador').style.color='rgb(255, 255, 255)'
const navheight = document.getElementById('navegador').style.height='50px px'
//div1
const navDiv1width = document.getElementById('navdiv1').style.width ='25%'
const navDiv1align = document.getElementById('navdiv1').style.textAlign='center'
const navDiv1padding = document.getElementById('navdiv1').style.padding ='10px'
const navDiv1size = document.getElementById('navdiv1').style.fontSize= '1.5em'
const navDiv1weight = document.getElementById('navdiv1').style.fontWeight= 'bold'
//div2
const navDiv2width = document.getElementById('navdiv2').style.width ='25%'
const navDiv2align = document.getElementById('navdiv2').style.textAlign='center'
const navDiv2padding = document.getElementById('navdiv2').style.padding ='10px'
const navDiv2size = document.getElementById('navdiv2').style.fontSize= '1.5em'
const navDiv2weight = document.getElementById('navdiv2').style.fontWeight= 'bold'
//div3
const navDiv3width = document.getElementById('navdiv3').style.width ='25%'
const navDiv3align = document.getElementById('navdiv3').style.textAlign='center'
const navDiv3padding = document.getElementById('navdiv3').style.padding ='10px'
const navDiv3size = document.getElementById('navdiv3').style.fontSize= '1.5em'
const navDiv3weight = document.getElementById('navdiv3').style.fontWeight= 'bold'
//div4
const navDiv4width = document.getElementById('navdiv4').style.width ='25%'
const navDiv4align = document.getElementById('navdiv4').style.textAlign='center'
const navDiv4padding = document.getElementById('navdiv4').style.padding ='10px'
const navDiv4size = document.getElementById('navdiv4').style.fontSize= '1.5em'
const navDiv4weight = document.getElementById('navdiv4').style.fontWeight= 'bold'

//main
const main = document.createElement("main");
main.id = 'main';
document.body.appendChild(main);
//main css
const maindisplay = document.getElementById('main').style.display = 'flex'
const mainjustify = document.getElementById('main').style.justifyContent='center'
const mainalign = document.getElementById('main').style.alignItems='center'
const maincorfundo = document.getElementById('main').style.backgroundColor=' #ffffff'
const mainheight = document.getElementById('main').style.height='400px'
const mainpadding = document.getElementById('main').style.padding='10px'

//foto-space dentro da mein
const section1 = document.createElement("section");
section1.id = 'section1';
document.getElementById('main').appendChild(section1)

const h1foto = document.createElement("h1");
h1foto.textContent='IMAGE'
h1foto.id = 'h1foto';
document.getElementById('section1').appendChild(h1foto)
//foto-space dentro da mein css
const fotodisplay = document.getElementById('section1').style.display = 'flex'
const fotojustify = document.getElementById('section1').style.justifyContent='center'
const fotoalign = document.getElementById('section1').style.alignItems='center'
const fotocorfundo = document.getElementById('section1').style.backgroundColor ='#9ad3e866'
const fotowidth = document.getElementById('section1').style.width='70%'
const fotoheight = document.getElementById('section1').style.height='100%'
const fotofont = document.getElementById('section1').style.fontSize ='1.5em'

//continuar main
const section2 = document.createElement("section");
section2.id = 'section2';
document.getElementById('main').appendChild(section2)
//cards-conteiner
const cardsdisplay = document.getElementById('section2').style.display = 'flex'
const cardsdirection = document.getElementById('section2').style.flexDirection = 'column'
const cardsalign = document.getElementById('section2').style.alignItems='center'
const cardsjustify = document.getElementById('section2').style.justifyContent ='center'
const cardspadding = document.getElementById('section2').style.padding='0px 0px 0px 10px'
//card 1
const cardDiv1 = document.createElement("div");
cardDiv1.id = 'carddiv1';
document.getElementById('section2').appendChild(cardDiv1)

const h2card1 = document.createElement("h2");
h2card1.textContent='TITLE'
h2card1.id = 'h2card1';
document.getElementById('carddiv1').appendChild(h2card1)

const pcard1 = document.createElement("p");
pcard1.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.'
pcard1.id = 'pcard1';
document.getElementById('carddiv1').appendChild(pcard1)
//card 1 css
const card1display = document.getElementById('carddiv1').style.display = 'flex'
const card1direction = document.getElementById('carddiv1').style.flexDirection = 'column'
const card1justify = document.getElementById('carddiv1').style.justifyContent = 'center'
const card1corfundo = document.getElementById('carddiv1').style.backgroundColor = 'white'
const card1borda = document.getElementById('carddiv1').style.border = '#a3a2a2 solid 1px'
const card1padding = document.getElementById('carddiv1').style.padding = '0 0 0 10px'
const card1margin = document.getElementById('carddiv1').style.margin = '10px'
const card1height = document.getElementById('carddiv1').style.height = '30%'
const h2card1size = document.getElementById('h2card1').style.fontSize = '2.5em'
const h2card1weight = document.getElementById('h2card1').style.fontWeight = 'bold'
const h2card1margin = document.getElementById('h2card1').style.margin = '0px'
//card 2
const cardDiv2 = document.createElement("div");
cardDiv2.id = 'carddiv2';
document.getElementById('section2').appendChild(cardDiv2)

const h2card2 = document.createElement("h2");
h2card2.textContent='TITLE'
h2card2.id = 'h2card2';
document.getElementById('carddiv2').appendChild(h2card2)

const pcard2 = document.createElement("p");
pcard2.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.'
pcard2.id = 'pcard2';
document.getElementById('carddiv2').appendChild(pcard2)

//card 2 css
const card2display = document.getElementById('carddiv2').style.display = 'flex'
const card2direction = document.getElementById('carddiv2').style.flexDirection = 'column'
const card12ustify = document.getElementById('carddiv2').style.justifyContent = 'center'
const card2corfundo = document.getElementById('carddiv2').style.backgroundColor = 'white'
const card2borda = document.getElementById('carddiv2').style.border = '#a3a2a2 solid 1px'
const card2padding = document.getElementById('carddiv2').style.padding = '0 0 0 10px'
const card2margin = document.getElementById('carddiv2').style.margin = '10px'
const card2height = document.getElementById('carddiv2').style.height = '30%'
const h2card2size = document.getElementById('h2card2').style.fontSize = '2.5em'
const h2card2weight = document.getElementById('h2card2').style.fontWeight = 'bold'
const h2card2margin = document.getElementById('h2card2').style.margin = '0px'

//card 3
const cardDiv3 = document.createElement("div");
cardDiv3.id = 'carddiv3';
document.getElementById('section2').appendChild(cardDiv3)

const h2card3 = document.createElement("h2");
h2card3.textContent='TITLE'
h2card3.id = 'h2card3';
document.getElementById('carddiv3').appendChild(h2card3)

const pcard3 = document.createElement("p");
pcard3.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.'
pcard3.id = 'pcard3';
document.getElementById('carddiv3').appendChild(pcard3)
//card 3 css
const card3display = document.getElementById('carddiv3').style.display = 'flex'
const card3direction = document.getElementById('carddiv3').style.flexDirection = 'column'
const card3ustify = document.getElementById('carddiv3').style.justifyContent = 'center'
const card3corfundo = document.getElementById('carddiv3').style.backgroundColor = 'white'
const card3borda = document.getElementById('carddiv3').style.border = '#a3a2a2 solid 1px'
const card3padding = document.getElementById('carddiv3').style.padding = '0 0 0 10px'
const card3margin = document.getElementById('carddiv3').style.margin = '10px'
const card3height = document.getElementById('carddiv3').style.height = '30%'
const h2card3size = document.getElementById('h2card3').style.fontSize = '2.5em'
const h2card3weight = document.getElementById('h2card3').style.fontWeight = 'bold'
const h2card3margin = document.getElementById('h2card3').style.margin = '0px'

//footer
const footer = document.createElement("footer");
footer.id = 'footer';
document.body.appendChild(footer);
const h1footer = document.createElement("h1");
h1footer.textContent='FOOTER'
h1footer.id = 'h1footer';
document.getElementById('footer').appendChild(h1footer)
//footer css
const footerdisplay = document.getElementById('footer').style.display = 'flex'
const footerjustify = document.getElementById('footer').style.justifyContent='center'
const footeralign = document.getElementById('footer').style.alignItems='center'
const footercorfundo = document.getElementById('footer').style.backgroundColor='#d9d9d966'
const footercor = document.getElementById('footer').style.color='black'
const footerheight = document.getElementById('footer').style.height='100px'
//footer h1
const h1footerfont = document.getElementById('h1footer').style.fontSize = '3em'
const h1footerbold = document.getElementById('h1footer').style.fontWeight ='bold'
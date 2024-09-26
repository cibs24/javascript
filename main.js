
console.log('Olá mundo!');

let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
let elementoBody = document.body;
elementoBody.appendChild(novoElemento);


novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';


    const cone = document.createElement('div');
    cone.style.width = '0';
    cone.style.height = '0';
    cone.style.borderLeft = '50px solid transparent';
    cone.style.borderRight = '50px solid transparent';
    cone.style.borderBottom = '100px solid #D19A6A'; // Cor do cone
    cone.style.position = 'relative';
    cone.style.margin = '0 auto';


    const bola = document.createElement('div');
    bola.style.width = '100px';
    bola.style.height = '100px';
    bola.style.backgroundColor = '#FF6F61'; // Cor da bola de sorvete
    bola.style.borderRadius = '50%';
    bola.style.position = 'absolute';
    bola.style.top = '-50px'; // Coloca a bola acima do cone
    bola.style.left = '0';


    const cereja = document.createElement('div');
    cereja.style.width = '20px';
    cereja.style.height = '20px';
    cereja.style.backgroundColor = '#FF0000'; // Cor da cereja
    cereja.style.borderRadius = '50%';
    cereja.style.position = 'absolute';
    cereja.style.top = '-70px'; // Coloca a cereja acima da bola
    cereja.style.left = '40px';


    document.body.appendChild(cone);
    cone.appendChild(bola);
    bola.appendChild(cereja);


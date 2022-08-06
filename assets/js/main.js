// Trabalhando com NodeList não é Array mas é semelhante

const paragrafos = document.querySelector('.paragrafos');
const listaParagrafos = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of listaParagrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF';
    console.log(p);
}
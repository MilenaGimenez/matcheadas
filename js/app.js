//GRILLA

const gridBox = document.getElementById('grid-box');

let icons = ["🌎", "⭐", "🌙", "🚀", "🌀"];
let level = 5;

// Función para crear la grilla

const createGrid = () => {
    gridBox.innerHTML = "";

    for(let i = 0; i < level; i++){
        for(let j = 0; j < level; j++){
            const createIcon = document.createElement("p");
            createIcon.setAttribute("id", `${i}-${j}`);
            createIcon.innerHTML = icons[iconRandom(0, 5)];
            gridBox.appendChild(createIcon);
        }
    }
    getIcons()
};

//Función para darle eventos a los icons
const getIcons = () => {
    const icon = document.getElementsByTagName("p")
    for(let i = 0; i < icon.length; i++){
        icon[i].addEventListener('click', (icon) => {
            console.log(icon)
        })
        }
}

// Función para generar icons aleatorios

const iconRandom = (min, max) => {
    let random = Math.random();
    return Math.floor(random * (max - min)) + min;
};
const ramdom = iconRandom(0, 4);

createGrid()


//que cada emogi sea clicleable
const getItem = () => {
  const item = document.getElementsByTagName("p")
  console.log(item)
  for(let i=0; i < item.length; i++){//item.length nos traemos los 25 p (osea todos los emogis en total suponiendo ser 5)
    item[i].addEventListener('click', (item) => {
      console.log(item)
    });    
  }
}
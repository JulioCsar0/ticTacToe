const currentPlayer = document.querySelector(".currentPlayer")
let selected
let player = "X"

const positionWinner = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,5,9],
  [3,5,7],
  [1,4,7],
  [3,6,9],
  [2,5,8],
]
//celula.forEach(celula => {celula.addEventListener("click", Click)} ) //Cria um EventListenner para cada celula observando o click e chamando a função CLICK

function init(){
  selected = []
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`

  document.querySelectorAll(".celula").forEach(itemCelula => { 
    itemCelula.innerHTML = ""
    itemCelula.addEventListener("click", newMovie)
  })
}


function newMovie(event){
  const numeroCelula = event.target.getAttribute("data-index")
  event.target.innerText = player
  event.target.removeEventListener("click", newMovie)
  console.log("O clique foi na celula: ", numeroCelula)

  selected[numeroCelula] = player
  setTimeout(() =>{
    checkWinner()

  },100)

  player = player === "X" ? "O" : "X" //e possivel fazer dessa forma mais curta
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`
}

function checkWinner(){
  let playerLastMovie = player === "X" ? "O" : "X"
  
  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMovie)
    .map((item) => item[1])

  for (pos of positionWinner) {
    if (pos.every((item) => items.includes(item))){
      alert("O JOGADOR '" + playerLastMovie + "' GANHOUUUUUUUUU!!!!!!!!!!!!")
      init()
      return
    }
  }
  
  if(selected.filter(item => item).length === 9) {
    alert("DEU VELHAAA!!!")
    init()
    return
  }
}

init()




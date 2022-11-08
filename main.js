function createGame(player1, hour, player2){
  return `
 <li>
    <img src="./assets/icon-${player1}.svg" 
    alt="${player1} flag">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" 
    alt="${player2} flag">
  </li> 
  `
}

let delay = -0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
   <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
      createGame("switzerland", "07h00", "cameroon") +
      createGame("portugal", "13h00", "gana") +
      createGame("brazil", "16h00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
      createGame("southkorea", "10h00", "gana") +
      createGame("brazil", "13h00", "switzerland") +
      createGame("portugal", "16h00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
      createGame("southkorea", "12h00", "portugal") +
      createGame("serbia", "16h00", "switzerland") +
      createGame("brazil", "16h00", "cameroon")
  )
  

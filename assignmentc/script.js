//obj1.sort((a, b) => b.score - a.score);
//obj1.sort((a, b) => a.name.localeCompare(b.name));
function main() {
  const input = Number(prompt("please enter number of players"));
  if (Number.isNaN(input)) {
    alert("Invalid input, please enter a number");
  }
  const players = [];
  for (let i = 0; i < input; i++) {
    const player = {
      name: prompt(`Enter name for player ${i + 1}`),
      score: Number(prompt(`Enter score for player ${i + 1}`)),
    };

    if (Number.isNaN(player.score)) {
      alert("Invalid score, please enter a number");
      return;
    }
    players.push({
      playerName: player.name,
      playerScore: player.score,
    });

    //   players.sort((a, b) => {
    players.sort((a, b) => {
      if (a.playerScore == b.playerScore) {
        return a.playerName.localeCompare(b.playerName);
      } else return b.playerScore - a.playerScore;
    });

    //   if (a.name > b.name) return 1;
    //   else return -1;
    // } else {
    //  if (a.score > b.score) return -1;
    //  if (a.score < b.score) return 1;
  }
  //   });
  for (let i = 0; i < players.length; i++) {
    const name = players[i].playerName;
    const score = players[i].playerScore;
    document.write(`<h3>${name} : ${score}</h3>`);
  }
}
main();

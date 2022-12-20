function getComputerChoice() {
  const computerChoice = ['Rock', 'Paper', 'Scissors']
  let randomNumber = Math.floor(Math.random() * computerChoice.length)
  console.log(randomNumber)
  return computerChoice[randomNumber]
}
getComputerChoice()
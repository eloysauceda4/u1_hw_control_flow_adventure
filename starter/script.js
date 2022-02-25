let game = () => {
let userName = prompt ('Lets get started! What is your name?')
console.log('userName')

let destination = prompt(`What destination would you like to travel to ${userName}?`)
console.log('destination')

switch (destination) {
    case 'sink hole':
        let sinkHole = prompt (`Good choice of destination, did you know you can sink.`)
        break
    case 'Cave' :
        break
    case 'The dark hole':
        break
    case 'find a new destination':
        break
    default:
        alert('Good luck on you travel!')

}
}
game ()
let restart = ""
restart = prompt ("Would you like to restart game? Y/N")
switch (restart) {
    case 'y':
        game()
    case 'n':
}
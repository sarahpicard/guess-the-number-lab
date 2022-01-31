const game = {
  title: 'Guess the Number!',
  biggestNum: 3,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  getGuess: function () {
    let guess
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {

      guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      guess = parseInt(guess)
      console.log(guess)
    }
    return guess
  },

  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) {
      this.prevGuesses.push(this.getGuess())
      console.log(this.prevGuesses)
      this.render()
    }
  },

  render: function () {
    if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      alert(`Guess is too high. Previous guesses: ${this.prevGuesses.join(', ')}.`)
    }
    if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
      alert(`Guess is to low. Previous guesses: ${this.prevGuesses.join(', ')}.`)
    }
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      alert(`You guessed the secret number in ${this.prevGuesses.length} tries!`)
    }
  },

  changeRange: function (guess) {
    if (guess > this.smallestNum && guess < this.secretNum) {
      this.smallestNum = guess
    } else if (guess < this.biggestNum && guess > this.secretNum) {
      this.biggestNum = guess
    }
  },

  setRange: function () {
    let lowest, highest = null
    while (isNaN(lowest) || isNaN(highest) || lowest > highest || lowest === highest) {
      lowest = parseInt(prompt(`Enter a lower limit.`))
      highest = parseInt(prompt(`Enter an upper limit.`))
    }
    this.smallestNum = lowest
    this.biggestNum = highest
  }
}

game.play()

// STEPS 

//// add prevGuesses property to object - initialized to an empty array 

//// add getGuess method that prompts player to enter guess with a message formatted as (Enter a guess between [smallestNum] and [biggestNum].)
    //// use a template literal here

// getGuess should return a value that: is a number (not string), between smallestNum and biggestNum (inclusive)
    // hints: while loop
    // hints: parseInt returns Nan if string cannot be parsed into a number

// inside play method - invoke getGuess method from inside a loop, then add the new guess to the prevGuesses array 
    // hint: while loop (or do...while loop)

// add a render method to game that play will call after a guess has been made 
    // ALERTS
    // if secret has been guessed: 'Congrats! You guessed the number in [number of prevGuesses]!'
    // otherwise: 'Your guess is too [high|low] Previous guesses: x, x, x, x, x
        // hints: render won't be able to access any of plays local variables (eg guess) - pass render any arguments as needed ?
        // template literals honor whitespace and line breaks!
        // list of previous guesses can be generated using the array join method

// play method should end (return) when the guess matches secretNum 



// BONUS 

// if player enters number greater than secretNum, make it the new biggestNum - so that the player can't enter a number greater than it (in slack)
// if player enters a number that is less than secretNum - make it the new smallestNum - so that the player can't enter a number less than it 
    // hint: you may want to add a helper function for this



// MORE BONUS 

// when play is run, immediately prompt the player to enter the smallest and biggest number instead of pre-setting values 


// OBJECTIVES 

// Allow player to continually be prompted to enter their guess (until they guess correctly)
// if incorrect guess, display alert message that states (whether guess is too high or too low) AND (a list of all previously guessed numbers- don't show array brackets)
// If player guessed right, display alert message that congratulates player (inform them of how many guesses it took)
// end game play after right guess is made 

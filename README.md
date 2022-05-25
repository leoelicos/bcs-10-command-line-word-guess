# Command Line Word Guess

![Node.js](https://img.shields.io/badge/16.15.0%20LTS-0?label=Node.js&style=for-the-badge&labelColor=white&color=black) ![Inquirer](https://img.shields.io/badge/8.2.4-0?label=Inquirer&style=for-the-badge&labelColor=white&color=black) ![Jest](https://img.shields.io/badge/28.1.0-0?label=Jest&style=for-the-badge&labelColor=white&color=black) ![Chalk](https://img.shields.io/badge/5.0.1-0?label=Chalk&style=for-the-badge&labelColor=white&color=black)

## Introduction

Command Line Word Guess is a command-line application that allows the user to play a game to guess the name of a movie by typing letters from the keyboard.

The app uses `inquirer` to prompt the user with queries rendered with `chalk`, and the returned data is used to determine whether the user has won or lost the game.

I made this app to learn about Object-oriented programming concepts including Classes, Test-Driven Development and separation of concerns using classes.

## Installation

| Steps                | Details                                                                      |
| -------------------- | ---------------------------------------------------------------------------- |
| Install Node.js      | Download it at https://nodejs.org/en/                                        |
| Clone this repo      | ` git clone https://github.com/leoelicos/bcs-10-command-line-word-guess.git` |
| Install dependencies | ` npm install`                                                               |

## Usage

| Steps                                      | Details                                 |
| ------------------------------------------ | --------------------------------------- |
| Start                                      | `npm start`                             |
| Read the hint                              | `___ ___`                               |
| Type a letter, then press Enter            | <kbd>o</kbd> <kbd>Enter</kbd>           |
| If correct, it will render                 | `_o_ ___`                               |
| Type another letter, then press Enter      | <kbd>y</kbd> <kbd>Enter</kbd>           |
| If incorrect, you have 9 guesses left      | `_o_ ___`                               |
| Keep going until you guess all the letters | `Top Gun`                               |
| End the game at any time                   | <kbd>Ctrl + C</kbd> or <kbd>⌘ + C</kbd> |

## Video Demo

https://user-images.githubusercontent.com/99461390/170268840-e2e9c153-d694-4735-bbf7-cb895c160623.mp4

---

## Testing

The tests are for the classes `Letter` and `Word`. In order to run tests, simply type in the command line

```js
npm run test
```

## Screenshots

### Screenshot: Start of game

![Screenshot: Start of game](https://user-images.githubusercontent.com/99461390/170268864-38dcc46f-f03c-499c-816d-6504d7125a16.png)

### Screenshot: Gameplay

![Screenshot: Gameplay](https://user-images.githubusercontent.com/99461390/170269148-307aecbb-da67-405f-9ad4-f0d33f3f33c4.png)

### Screenshot: End of game

![Screenshot: End of game](https://user-images.githubusercontent.com/99461390/170269156-395a01d4-9669-489c-8f2c-d7c95cf699be.png)

## Credits

-  BCS Resources

## License

&copy; Leo Wong <leoelicos@gmail.com>

Licensed under the [MIT License](./LICENSE).

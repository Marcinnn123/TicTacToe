# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game implemented using React. It allows two players to take turns and play the classic game on a 3x3 grid.

## How to Play

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your web browser and navigate to `http://localhost:3000` to play the game.
5. Players can take turns by clicking on the squares on the board.
6. The game will display a message when a player wins or if it's a tie.
7. To reset the game, simply refresh the page.

## Technologies Used

- React
- JavaScript (ES6)
- CSS

## Project Structure

The main components of the project are as follows:

- `App.js`: The main component that handles the game logic and rendering of the board.
- `Square.js`: A functional component that represents each square on the game board.
- `Posibilities.js`: A module that defines all possible winning combinations.

## How the Game Works

The game starts with an empty 3x3 grid. Players take turns placing their symbols (X or O) on the board by clicking on the squares. The game checks for a win condition after each move and also detects if the game is a tie.

The game will display a congratulatory message to the winning player and reset the board when a game is won or tied.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

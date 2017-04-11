## Connect Four

[Connect Four Game](https://en.wikipedia.org/wiki/Connect_Four) implemented using Angular 2.

### Problem Statement
Implement the Connect Four game as a web or mobile application with two modes:

1. Play against a friend (on the same computer) and
2. Play against a computer AI (that should beat a random human 60-100% of the time).

### Solution
1. Problem statement boils down to 2 important points ie
	* Check if current player wins or draws by analyzing current state of game.
	* Creating an AI for getting next best move according to present state of game.

2. Solution for first part, as game will grow step by step it will be efficient to have counts of same colored discs in horizontal, vertical and diagonal direction. As soon as some event have count to 4 that plyaer wins or if all columns are filled ( Array having the count of filled columns ) match is draw.
3. Solution of second part, utilizes famous [MiniMax Algorithm](https://en.wikipedia.org/wiki/Minimax) where we need to find best column for computer to have his disc. Current version works pretty decently but that can be imporved, as current version's heuristic function only considers discs at bottom, left, right and diagonal direction. That can be improved by considering remaing blank slots in column for example if blank slots are 3 (we have an array which have count of filled slots) and it is not possible to win game from that column we should leave that column or move that column to less priority.

### Modes in App

* Human and Human Mode (Default)

Each player drops their discs alternatively, and who ever gets to [winning state](https://en.wikipedia.org/wiki/Connect_Four#Gameplay) first wins the game.

* Human and Computer Mode
    
Game starts with human's chance and computer plays its chance on its turn.


### Application Architecture 

1. App is divided a per functionality areas, this helps in quickly understanding logic flow and debugging.
2. There are some container components, which uses re-usable components. Having this pattern helps in re-usability and testing.
3. Application uses TypeScript for better code architecture and better error handling at compile time.
4. There are different folder of re-usable constants and models which are used by components and services for data storage. This maintains uniformity of data-structure across application.

### Testing (E2E is pending)
1. Basic testing is present for re-usable components and services.
2. TODO: Need to add more robust tests for components and services and complete e2e tests.


### Steps to run in local box 
1. Install angular cli
	```
    npm install -g @angular/cli	
    ```
2. Go to root directory of this project, run
	```
    npm install
    ```
    ```
    ng serve -o
	```
    please visit http://localhost:4200/
3. To run test and e2e run.
	```
    ng test
    ```
    ```
    ng e2e
    ```
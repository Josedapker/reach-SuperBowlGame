# reach-SuperBowlGame

This code is a script for a simple two-player betting game that takes place on a blockchain network. The script uses the @reach-sh/stdlib and a custom backend library to interact with the blockchain. At the start, the user is asked whether they are Alice or Bob. Depending on their answer, the script will either prompt the user to create a new account or input an existing account secret. Next, the script will either prompt the user to enter contract information or retrieve the contract information from the blockchain.

The user is then asked to select a team for the Super Bowl Game, and the outcome of the game is displayed. The player will also be prompted to wager an amount of currency. The script then interacts with the contract, representing either Alice or Bob, depending on the user's initial answer. Finally, the script displays the user's updated balance. The script uses the ask.done() function to close the user interface when finished.

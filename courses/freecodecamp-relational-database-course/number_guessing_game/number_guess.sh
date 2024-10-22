#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo "Enter your username:"
read USERNAME

USER_ID=$($PSQL "SELECT u_id FROM users WHERE name = '$USERNAME'")
USER_ID=$(echo $USER_ID | xargs)

if [[ -n $USER_ID ]]; then
  GAMES_PLAYED=$($PSQL "SELECT COUNT(*) FROM games WHERE u_id = '$USER_ID'")
  BEST_GUESS=$($PSQL "SELECT MIN(guesses) FROM games WHERE u_id = '$USER_ID'")
  echo -e "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GUESS guesses."
else
  echo -e "Welcome, $USERNAME! It looks like this is your first time here."
  $PSQL "INSERT INTO users(name) VALUES('$USERNAME')" > /dev/null 2>&1
  USER_ID=$($PSQL "SELECT u_id FROM users WHERE name = '$USERNAME'")
  USER_ID=$(echo $USER_ID | xargs)
fi

SECRET=$((1 + $RANDOM % 1000))
TRIES=0
GUESSED=0
echo -e "Guess the secret number between 1 and 1000:"

while [[ $GUESSED -eq 0 ]]; do
  read GUESS
  if [[ ! $GUESS =~ ^[0-9]+$ ]]; then
    echo -e "That is not an integer, guess again:"
  elif [[ $SECRET -eq $GUESS ]]; then
    TRIES=$(($TRIES + 1))
    echo -e "You guessed it in $TRIES tries. The secret number was $SECRET. Nice job!"
    $PSQL "INSERT INTO games(u_id, guesses) VALUES($USER_ID, $TRIES)" > /dev/null 2>&1
    GUESSED=1
  elif [[ $SECRET -gt $GUESS ]]; then
    TRIES=$(($TRIES + 1))
    echo -e "It's higher than that, guess again:"
  else
    TRIES=$(($TRIES + 1))
    echo -e "It's lower than that, guess again:"
  fi
done

#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
echo $($PSQL "truncate games, teams")


cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS 
do
  if [[ $WINNER != winner ]]

  ### WINNER TEAM NAME ###
  then
    TEAM_W=$($PSQL "select team_id from teams where name='$WINNER'")
    # if not found
    if [[ -z $TEAM_W ]]
    then
      # insert team
      INSERT_TEAM_W=$($PSQL "insert into teams(name) values('$WINNER')")
    fi
  
  ### OPPONENT TEAM NAME ###
    TEAM_O=$($PSQL "select team_id from teams where name='$OPPONENT'")
    # if not found
    if [[ -z $TEAM_O ]]
    then
      # insert team
      INSERT_TEAM_O=$($PSQL "insert into teams(name) values('$OPPONENT')")
    fi
  
  ### GAMES INFO ###
    WINNER_ID=$($PSQL "select team_id from teams where name='$WINNER'")
    OPPONENT_ID=$($PSQL "select team_id from teams where name='$OPPONENT'")
    # insert student
    INSERT_GAMES=$($PSQL "insert into games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) values('$YEAR', '$ROUND', '$WINNER_ID', '$OPPONENT_ID', '$WINNER_GOALS', '$OPPONENT_GOALS')")
  fi
done
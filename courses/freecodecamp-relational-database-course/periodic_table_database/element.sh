#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=periodic_table -t --tuples-only -c"

if [[ -z $1 ]]; then
  echo -e "Please provide an element as an argument."
  exit
fi

query_condition=""
if [[ $1 =~ ^[0-9]+$ ]]; then
  query_condition="atomic_number = '$1'"
else
  query_condition="name = '$1' OR symbol = '$1'"
fi

element=$($PSQL "SELECT atomic_number, name, symbol, type, atomic_mass, melting_point_celsius, boiling_point_celsius 
                  FROM elements 
                  JOIN properties USING (atomic_number) 
                  JOIN types USING (type_id) 
                  WHERE $query_condition")

if [[ -z $element ]]; then
  echo -e "I could not find that element in the database."
  exit
fi

echo "$element" | while IFS=" |" read -r an name symbol type mass mp bp; do
  echo -e "The element with atomic number $an is $name ($symbol). It's a $type, with a mass of $mass amu. $name has a melting point of $mp celsius and a boiling point of $bp celsius."
done

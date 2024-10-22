#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\n~~~~~ Salon Appointment ~~~~~\n"

MAIN_MENU() {
  # main menu options
  AVAILABLE_SERVICES=$($PSQL "select service_id, name from services order by service_id")
  echo "Which service would you like to schedule?" 
  echo "$AVAILABLE_SERVICES" | sed 's/ |/)/' | while read SERVICE_ID NAME
  do
    echo "$SERVICE_ID $NAME"
  done
  # selecting service
  read SERVICE_ID_SELECTED
  # if its not a number
  if [[ ! $SERVICE_ID_SELECTED =~ ^[0-9]+$ ]]
  then
    echo "That is not a valid service number."
    MAIN_MENU
  else
    SERVICE_AVAILABILITY=$($PSQL "select * from services where service_id = $SERVICE_ID_SELECTED")
    # if the service doesnt exists
    if [[ -z $SERVICE_AVAILABILITY ]]
    then
      echo "That is not a valid service number."
      MAIN_MENU
    else
      # get customers phone number
      echo -e "\nWhat's your phone number?"
      read CUSTOMER_PHONE
      CUSTOMER_NAME=$($PSQL "select name from customers where phone = '$CUSTOMER_PHONE'")
      # if customer doesnt exist
      if [[ -z $CUSTOMER_NAME ]]
      then
        echo -e "\nWhat's your name?"
        read CUSTOMER_NAME
        # insert new customer
        INSERT_CUSTOMER_RESULT=$($PSQL "insert into customers(phone, name) values('$CUSTOMER_PHONE', '$CUSTOMER_NAME')") 
      else
        CUSTOMER_NAME=$(echo $CUSTOMER_NAME | sed -r 's/^ *| *$//g')
      fi
      # get customer_id
      CUSTOMER_ID=$($PSQL "select customer_id from customers where phone='$CUSTOMER_PHONE'")
      echo -e "\nPlease enter a preferred time for your appointment (HH:MM):"
      read SERVICE_TIME
      # insert appointment
      INSERT_APPOINTMENT_RESULT=$($PSQL "insert into appointments(customer_id, service_id, time) values($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME')")
      # get service info
      SERVICE_INFO=$($PSQL "select name from services where service_id = $SERVICE_ID_SELECTED")
      SERVICE_NAME=$(echo $SERVICE_INFO | sed -r 's/^ *| *$//g')
      # confirmation message
      echo "I have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."
    fi
  fi
}

MAIN_MENU
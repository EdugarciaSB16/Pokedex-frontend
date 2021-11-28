![alt text](https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png)
# Pokedex-Frontend

## Developer: Eduardo García

## Deployed Application

#### Important: Please note that the following links cant take up to 10 seconds to load.
React App deployed on Heroku: https://pokedex-test-web.herokuapp.com/

Public RESTful API deployed on Heroku: https://pokedex-test-api.herokuapp.com (You can use this URL on your own front end application or to test its endpoints).

## Instructions to run the app on local environment
Open your terminal and run the following command to download the project:
  ```
  git clone https://github.com/EdugarciaSB16/Pokedex-backend.git
  git clone https://github.com/EdugarciaSB16/Pokedex-frontend.git
  ```
To start the API (from the same root directory where the repo was cloned):
  ```
  cd pokedex-backend
  npm install
  npm run seeds
  npm run dev
  ```
To start the React App open a new terminal tab or window and go to pokedex-frontend directory then:
  ```
  cd pokedex-frontend
  npm install
  npm start
  ```
Once you run npm start the app should open automatically on your default browser. Otherwise go to http://localhost:3000/ after running it.

## Technologies
- **Backend:** Node.js with Express
- **Data base:** MongoDB with Mongoose
- **Frontend:** React hooks
- Design SCSS and Bootstrap V5

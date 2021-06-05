## README

#Movie Challenge

## Index

- [1. Movie Search](#1-Movie-Search)
- [2. Get Movies](#2-Get-Movies)
- [3. Find and Replace](#3-Find-and-Replace)

---

## 1. Movie Search

API created with the function of collecting information from an API http://www.omdbapi.com/ by Title and saving it in a database, the movies are required by the user using the GET method, using the Database from Mongo, you can additionally search the header for year of the movie and make the search more precise.

The information collected is:

- Title
- Year
- Released
- Gender
- Director
- Actors
- Plot
- Ratings.

The system is designed to avoid duplication and to return information stored in the console.

## 2. Get Movies

The API also allows Get method to return all the movies that have been saved in the Database, organize them by pages and limit them to 5 for each one.

This request can be made by the header.

## 3. Find and Replace

The user can replace and modify the Plot of the saved movie, through the POST Method, thus returning a String with the modifications.

Technology: Nodejs
Framework: KOA
ODM: Mongoose
API URL: http://www.omdbapi.com/

Pending:

- Validate the input contracts and / or headers for the endpoints before performing the logic.
- Use of Joi to validate contracts / headers
- Use of Docker / Swarm to lift all services.
- Use of middleware for contract validation and error handling.
- Use of Logs for error handling.
- Documentation of the exercise in swagger.

Environment variables required to run the application:

- APIKEY
- URL
- MONGOURI

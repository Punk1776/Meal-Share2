# Meal Share - A Recipe Sharing Web Application
Meal Share is a web application that allows users to share and discover delicious recipes. Whether you're a seasoned chef or a cooking enthusiast, Meal Share provides a platform to showcase your culinary creations and explore new dishes.
https://meal-share-748a47c90b3f.herokuapp.com/

## Features
User Authentication: Users can create accounts, log in, and manage their profiles.

Recipe Creation: Users can create and share their favorite recipes. Each recipe includes details such as ingredients, nutritional information, and cooking instructions.

Recipe Discovery: Explore a wide variety of recipes created by the Meal Share community.

User Profiles: Users can customize their profiles with their names, avatars, and favorite recipes.

## Installation
Clone this repository to your local machine:

bash
git clone https://github.com/your-username/meal-share-app.git
Install the required dependencies:

bash

npm install
Configure the database:

Ensure you have a database (e.g., MySQL) set up using the following commands:
mysql -u root -p
source db/schema.sql
Update the database connection details in the config/connection.js file.
Start the application:

bash
npm run seed
then
npm start
Open a web browser and go to http://localhost:3001 to access the Meal Share app.

## Usage
Creating an Account: Sign up for a new account to start sharing your recipes. You can also log in if you already have an account.

Sharing a Recipe: After logging in, you can create and share your recipes. Include details such as ingredients, nutritional information, and cooking instructions.

Discovering Recipes: Explore a vast collection of recipes created by other Meal Share users. Find new ideas for your next meal.

Saving Recipes: When you find a recipe you love, click the "Save" button to add it to your saved recipes.

Editing Your Profile: Customize your profile by adding your name and an avatar.

Technologies Used
Node.js
Express.js
Handlebars.js (View Engine)
Sequelize (ORM)
MySQL (Database)
HTML, CSS, and JavaScript
Contributing
We welcome contributions from the open-source community. If you have ideas for improvements or would like to report issues, please open a GitHub issue or create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
We'd like to express our gratitude to the open-source community and the developers of the tools and libraries used in this project
David cox UCLA TA
and https://picnicss.com/


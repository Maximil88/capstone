# ArtExplorer
Overview

ArtExplorer is designed for art enthusiasts that would like to catalog their favorite artists. Whether a user is interested in learning more about contemporary or classical artists, considering collecting art/NFTs or would like to view images of artwork from a particular artist, ArtExplorer provides a method to find and save that information. After searching for an artist by name, the user has the option to save a card with artist's name, an image of one of the artist's artworks and a link with more information on the artist's background. Furthermore, the User login information is secured to the database using hash authentication. 

Technical Details

ArtExplorer is a full stack application built with React, React-Bootstrap, Node, Express, Sequelize, and PostgreSQL. The front end was built using React and styled with React-Bootstrap. JSON web tokens were used to authenticate users when they logged in. The back end of the web application was built using Node and Express. Sequelize was used to create the models and migrations for the database and PostgreSQL was used as the database. The live site is hosted [here](https://art-explorer-app.herokuapp.com/).

• Frontend: [React](https://reactrouter.com/)
• [React-Bootstrap](https://react-bootstrap.github.io/)
• Backend: [Node.js](https://nodejs.org/en/)
• [Express](https://expressjs.com/)
• [JWT](https://jwt.io/)
• Database: [PostgreSQL](https://www.postgresql.org/)
• ORM: [Sequelize](https://sequelize.org/)

 
 Functionality
 
The app uses an axios post request to send the users registration email and password to the PostgreSQL database and authenticates this information in the login using a secure hash. Once logged in the user has access to their personalized favorites list and the search page. The search feature fetches the artistId and image inputs and renders them in bootstrap cards. The modal feature on the card renders the inputs of the biography and artwork image. If the user saves the card to favorites, the save button dissapears on the card and is replaced with the delete button on the favorites page. On deleting a card, Sequelize is used to "destroy" the card.

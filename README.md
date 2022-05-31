# SQL Query Runner 

This web application run SQL queries on some tables stored in a cloud database.

This project is bootstrapped with Create-React-App. The entire project has three brief , yet different sections.

1.> FrontEnd - The frontend is built using React Library. Styling Components such as Material UI and http client frameworks such as Axios.FrontEnd application takes the SQL query as an input and passes it to the server and recieves the SQL table as an response.That table is then rendered onto the window using Material UI's DataGrid component.


2.> Backend - The backend is built using Express . Cors package has been implemented in the server side , to prevent errors due to strict cors policy.  Due to some recent breaking changes in the webpack 5.0 release , Sequelize could not be implemented directly onto frontend and hence has to be filtered through a express server.The Server recieves the SQL query and throws it to the Sequelize package which returns the resultant table in form of JSON , which is then sent to the frontend.

3.> Database - The database is a MySQL database whic is hosted onto the web using Clever Cloud Database Services.

# Scripts 

`npm start` -- Starts the Application in development mode. Run the script in your terminal and visit https://localhost:3000/ to view your application.

# Frameworks

`Material UI` -- Material UI offers comprehensive range of production-ready UI components which gives great styling options to the application.

`axios` -- Axios provides a promise based http client for web applications and node js development. It makes fetch requests easier to handle .

`Sequelize` -- Sequelize is an open-source Node. js module that enables JavaScript developers to work with relational databases more easily, including but limited to MySQL, Postgres , Redis. Sequelize has been implemented in the server-side , and not on the client side , due to some breaking changes in the webpack 5.x framework.


# Loading Speed Test 
 According to SpeedLabs (https://www.browserstack.com/speedlab). The website scores a 98 on 100 in mobile and a 75 on 100 in desktop.
 A full report could be seen here : https://www.browserstack.com/speedlab/report/a0e21ef79dea479389a844cc460145f88158363a

 # Links

 Live: - FrontEnd : - https://atlan-frntend.vercel.app/
         BackEnd  : - https://atlanserver.herokuapp.com/runQ?query=`query`
Source Code - FrontEnd - https://github.com/prophet7821/atlan-frntend
              BackEnd  -  https://github.com/prophet7821/Atlan_Server
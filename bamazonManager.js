var mySql = require("mysql");
var inquirer = require("inquirer");
var menu = require ("inquirer-menu");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NODE.JS + MYSQL ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Connects to supplied path, connect with MySQL Bamazon database.
var connection = mySql.createConnection({
  host: "localhost",
  port: 3306,

  // user name
  user:"root",

  // password + Bamazon database name
  password:"",
  database: "Bamazon"
});


const blueMenu = {
  message: 'blue-menu',
  choices: {
    callApi: function() {
      console.log('blue-api called');
      return;
    }
  }
};
 
const redMenu = {
  message: 'red-menu',
  choices: {
    callApi: function() {
      console.log('red-api called');
      return;
    }
  }
};
 
let level = 0;
 
function createMenu() {
  return {
    message: 'main-menu level ' + level,
    choices: {
      setupData: function() {
        level++;
        console.log('success');
 
        return;
      },
      blueMenu: blueMenu,
      redMenu: redMenu
    }
  };
};
 
menu(createMenu)
  .then(function() {
    console.log('bye');
  })
  .catch(function(err) {
    console.log(err.stack);
  });


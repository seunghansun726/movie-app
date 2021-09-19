import React from 'react';

function Food({favFood}) {
  let foodStatement = "I Like ";
  favFood.forEach(element => {
    console.log(element);
    foodStatement = `${foodStatement} ${element} `;
  }
  );  
  return(
    <h2>{foodStatement}</h2>
  );
}

function App() {
  return(
    <div>
      <h1>Hello My First React Application</h1>
      <Food favFood = {["Apple", "Watermelon", "Orange", "Grape"]}/>
    </div>
  );
}

//local: http://localhost:3000
//On Network: http://192.169.35.85:3000
export default App;
 
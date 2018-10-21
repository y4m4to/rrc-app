import React from 'react';
import propTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Yamato', age: 5 },
    { name: 'Fanny', age: 26 },
  ];

  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }      
    </div>
  )
}

const User = (props) => {
  return <div>Hi, i am {props.name}, and {props.age} years old !!</div>
}

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;

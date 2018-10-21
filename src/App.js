import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Yamato", age: 27 },
    { name: "Fanny" },
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

User.defaultProps = {
  age: 1
}

export default App;

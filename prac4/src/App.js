import React, { useState } from 'react';

function App() {
  
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

 
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h2>Counter App</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          style={{ padding: '5px' }}
        />
        <h3>Welcome to CHARUSAT!!</h3>
        <h4> Hellooooo {firstName} {surname}</h4>
      </div>

   
      <h1 style={{ fontSize: '48px' }}>{count}</h1>

    
      <div>
        <button onClick={() => setCount(count + 1)} style={btnStyle}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={btnStyle}>Decrement</button>
        <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
        <button onClick={() => setCount(count + 5)} style={btnStyle}>+5</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default App;

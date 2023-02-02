import React from 'react';

function App() {
  function Students(props) {
    return <li>I am a { props.info }</li>;
  }
  
  function Class() {
    const names = ['ayoub', 'zakaria', 'salma'];
    return (
      <>
        <h3>Students name</h3>
        <ul>
          {names.map((Student) => <Students info={Student} />)}
        </ul>
      </>
    );
  }
  
  return (
    <div className="App">
      <Class />
    </div>
  );
}

export default App;

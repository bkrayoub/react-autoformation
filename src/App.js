import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  function Offline() {
    return <h1>You're offline</h1>;
  }
  
  function Online() {
    return <h1>You're connected!</h1>;
  }
  
  function Statu(props) {
    const isOnline = props.isOnline;
    if (isOnline) {
      return <Offline/>;
    }
    return <Online/>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Statu isOnline={false} />);

  return (
    <div className="App">
    </div>
  );
}

export default App;

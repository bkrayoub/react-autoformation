
function App() {
  let clickCount = 0
  let typeCount = 0

  const handelClick = () => {
    clickCount++
    console.log('You clicked '+ clickCount +' time.')
  }
  const handelChange = () => {
    typeCount++
    console.log('You typed '+ typeCount +' time.')
  }


  return (
    <div className="App">
      <input type='text' onChange={handelChange}/>
      <button onClick={handelClick}>Click</button>
    </div>
  );
}

export default App;

import "./App.css";

var counter = 0;
function App() {
  const increaseCounter = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <div className="App">
      <button onClick={increaseCounter} className="plus-button">
        +
      </button>
      <p>{counter}</p>
    </div>
  );
}

export default App;

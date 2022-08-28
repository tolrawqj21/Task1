import logo from './logo.svg';
import './App.css';

function Hello(props){
  return <h1>Hello, {props.name}!</h1>;
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <Hello name="my dear" />
              <Hello name="friends" />
              <Hello name="girls" />
          </div>


      </header>
    </div>
  );
}

export default App;

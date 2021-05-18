import Component from './profile/component';
import './App.css';

function App() {
  const fullname='Becher Raouf'
  const bio='Bio'
  const profession='web developer'
  const number='52550523'
  function handleName() 
  {
    alert("Becher Raouf")
  }
  return (
    <div className="App">
   <Component name={fullname}  job={profession} bio={bio} number={number} func={handleName} />
    </div>
  ) ;
}
export default App;

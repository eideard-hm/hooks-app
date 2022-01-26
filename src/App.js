import CounterApp from "./components/01-useState/CounterApp";
import SimpleForm from "./components/02-useEffect/SimpleForm";

function App() {
  return (
   <div className="container">
      <h1 className="text-center">Profundización Hooks Generales</h1>
      <hr />
      
      <section className="column">
        <h3 className="text-center">useState</h3>
        <CounterApp /> 
      </section>

      <section className="column">
        <h3 className="text-center">useEffect</h3>
        <SimpleForm /> 
      </section>
   </div>
  );
}

export default App;

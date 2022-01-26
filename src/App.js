import CounterApp from "./components/01-useState/CounterApp";

function App() {
  return (
   <div className="container">
      <h1 className="text-center">Profundización Hooks Generales</h1>
      <hr />
      <section className="column">
        <h3 className="text-center">useState</h3>
        <CounterApp /> 
      </section>
   </div>
  );
}

export default App;

import CounterApp from "./components/01-useState/CounterApp";
import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHook";
import SimpleForm from "./components/02-useEffect/SimpleForm";
import FocusScreen from "./components/03-useRef/FocusScreen";
import MultipleCustomHooks from "./components/examples/MultipleCustomHooks";

function App() {
  return (
    <div className="container mb-5">
      <h1 className="text-center">Profundización Hooks Generales</h1>
      <hr />

      <section className="column">
        <h3 className="text-center">useState</h3>
        <CounterApp />
      </section>

      <section className="column">
        <h3 className="text-center">useEffect</h3>
        <SimpleForm />
        <br />

        <div>
          <h3 className="text-center">Form With Custom Hook</h3>
          <FormWithCustomHook />
        </div>4
      </section>

      <section className="column">
        <h3 className="text-center">MultipleCustomHooks</h3>
        <MultipleCustomHooks />
      </section>

      <section className="column">
        <h3 className="text-center">useRef</h3>
        <FocusScreen />
      </section>

    </div>
  );
}

export default App;

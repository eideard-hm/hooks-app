// import CounterApp from "./components/01-useState/CounterApp";
import TodoApp from "./components/08-useReducer/TodoApp";
// import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHook";
// import SimpleForm from "./components/02-useEffect/SimpleForm";
// import FocusScreen from "./components/03-useRef/FocusScreen";
// import RealExampleRef from "./components/03-useRef/RealExampleRef";
// import CallbackHook from "./components/06-Memos/CallbackHook";
// import MemoHook from "./components/06-Memos/MemoHook";
// import Memorize from "./components/06-Memos/Memorize";
// import { Padre } from "./components/07-tarea-memo/Padre";
// import MultipleCustomHooks from "./components/examples/MultipleCustomHooks";

function App() {
  return (
    <div className="container mb-5">
      <h1 className="text-center">Profundización Hooks Generales</h1>
      <hr />

      {/* <section className="column">
        <h3 className="text-center">useState</h3>
        <CounterApp />
      </section> */}

      <section className="column">
        <h3 className="text-center">useReducer</h3>
        <TodoApp />
      </section>

      {/* <section className="column">
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
        <hr/>
        <br/>
        <RealExampleRef />
      </section>

      <section className="column">
        <h3 className="text-center">Memos</h3>
        <Memorize />
        <hr />
        <br/>
        <h3 className="text-center">useMemo - Memorizar</h3>
        <MemoHook />

        <hr />
        <br/>
        <h3 className="text-center">useCallback - Memorizar</h3>
        <CallbackHook />
      </section> */}

      {/* <section className="column">
        <h3 className="text-center">Tarea Memorize</h3>
        <Padre />
      </section> */}

    </div>
  );
}

export default App;

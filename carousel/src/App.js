import classes from "./App.module.css";
import Corousel from "./components/Corousel";

function App() {
  return (
    <div className={classes.content}>
      <Corousel slides={1} infinite={false} />
      <Corousel slides={4} infinite={true} />
      <Corousel slides={10} infinite={false} />
    </div>
  );
}

export default App;

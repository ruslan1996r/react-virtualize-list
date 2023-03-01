import './App.css';
import { generateList } from "./utils"
import { Virtualization } from './virtualization/Virtualization'
import { Element } from './Element'

const generated = generateList(500)

function App() {
  return (
    <div className="App">
      <h3>Total Elements: {generated.length}</h3>
      <Virtualization data={generated} itemCount={5} itemHeight={150} itemsGap={10} width={1200}>
        <Element />
      </Virtualization>
    </div>
  );
}

export default App;

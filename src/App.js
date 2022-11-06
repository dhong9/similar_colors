import './App.css';

// Components
import Table from './components/table/table.component';
import ScatterPlot from './components/plot/plot.component';
import Addpoint from './components/addpoint/addpoint.component';

function App() {
  return (
    <div>
      <h1>kNN Data</h1>
      <Table />
      <ScatterPlot />
      <Addpoint />
    </div>
  );
}

export default App;

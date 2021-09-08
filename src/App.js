import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <div className="alert alert-primary mb-5" role="alert"><h1>Menu Restaurant</h1></div>
      <Menu/>
      <Menu/>
      <Menu/>
    </div>
  );
}

export default App;

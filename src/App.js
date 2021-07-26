import TaskListApp from './components/TaskListApp';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/todoapp">Todo App</Link>
        < Route path="/todoapp" component={TaskListApp} />
      </header>
    </div>
  );
}

export default App;

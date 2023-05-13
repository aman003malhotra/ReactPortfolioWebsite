import './App.css';
import Main from './components/Main/Main';
import Experience from './components/Experience/Experience';
import Stack from './components/Stacks/Stack';
import Tools from './components/Tools/Tools'
function App() {
  return (
    <div className="App font-bold text-red-500">
      <Main />
      <Stack />
      <Tools />
      <Experience />
    </div>
  );
}

export default App;

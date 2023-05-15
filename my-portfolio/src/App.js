import './App.css';
import Main from './components/Main/Main';
import Experience from './components/Experience/Experience';
import Stack from './components/Stacks/Stack';
import Tools from './components/Tools/Tools'
import Projects from './components/Projects/Projects'
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App font-bold text-red-500">
      <Main />
      {/* <Stack /> */}
      <Tools />
      <Experience />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;

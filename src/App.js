import './App.css';
import Accordion from './Components/accordion/Accordion';
import Editable from './Components/editable/Editable';

function App() {
  return (
    <div className="App">
      <h1>Learning React!</h1>
      <Accordion title='Product Info' content='This is a product content'/>  
      <br/>
      <Editable/>      
    </div>
  );
}

export default App;

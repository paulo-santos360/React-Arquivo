// Componentes
import FirstComponent from './componentes/FirstComponent';
import TemplateExpressions from './componentes/TemplateExpressions';
import MainComponentes from './componentes/MainComponentes';
import Events from './componentes/Events';

import './App.css';

function App() {
  return (
    <div className="App">
     <FirstComponent />
     <TemplateExpressions />
     <MainComponentes />
     <Events />
    </div>
  );
}

export default App;

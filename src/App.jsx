
import './App.css';
import Adresse from './component/Adresse';
import ProfilePhoto from './component/ProfilePhoto';
import FullName from './component/FullName';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    <Adresse/>
      <ProfilePhoto/>
        <FullName/>
      </header>
    </div>
  );
}

export default App;

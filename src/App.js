import './App.css';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import './lib/font-awesome/css/all.min.css';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Routes>
            <Route path ='/' element={<Watchlist/>}>
            </Route>
            <Route path='/watched' element={<Watched/>}>
            </Route>
            <Route path='/add' element={<Add/>}>
            </Route>
        </Routes>
      </Router>
      </GlobalProvider>
    
  );
}

export default App;

import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ExerDetail from './pages/ExerDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/exercises/:id' element={ <ExerDetail /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

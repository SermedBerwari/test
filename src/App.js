
import './App.css';
import Header from './Components/header';
import Jumbotron from './Components/jumbotron';
import Footer from './Components/footer';
import Home from './pages/home';
import List from './Components/list';




function App() {
  return (
    
    <div className="App">
      <Header />
      <Jumbotron/>
      <List/>
      <Home/>
      <Footer/>
      
    </div>
  );
}

export default App;

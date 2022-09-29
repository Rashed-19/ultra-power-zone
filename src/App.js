import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Exercises from './components/infoCard/Exercises';




function App() {
  return (
    <div className='App'>
<Header></Header>
<Exercises></Exercises>
<Blog></Blog>
<Footer></Footer>

    </div>
  );
}

export default App;

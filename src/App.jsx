import './App.css'
import Navbar from './components/Navbar';
import MovieContextProvider from './context/MovieContextProvider';

function App() {
  

  return (
    <MovieContextProvider>
    <Navbar/>
    
    </MovieContextProvider>
  )
}

export default App

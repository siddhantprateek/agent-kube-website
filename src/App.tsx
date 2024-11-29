import { Landing } from './pages';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
  )
}

export default App

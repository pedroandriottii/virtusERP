import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/PublicPages/Home';
import About from '@/pages/PublicPages/About';
import { Login } from '@/pages/PublicPages/Login';
import ProductsPage from '@/pages/Products';
import NotFound from './pages/Support/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

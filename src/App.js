import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import PostDetail from './Details/PostDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
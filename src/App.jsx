import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
import FavoritePage from './components/FavoritePage.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
     <Provider store={store}>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    
  )
}

export default App

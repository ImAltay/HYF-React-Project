import AnimeList from './Components/AnimeList'
import AnimeSingle from './Components/AnimeSingle'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<AnimeList />} />
          <Route path="/anime/:id" element={<AnimeSingle />} />
        </Routes>
      </Router>
        <Footer />
    </>
  )
}

export default App

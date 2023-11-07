import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home';
// import AboutPage from './pages/About';
import './App.css'
import styles from "./styles.module.scss";
import Navigation from './components/Navigation/Navigation';
import ProfilePage from './pages/Profile';
import BookmarkPage from './pages/Bookmark';
import DetailPage from './pages/Detail';
import NewJourneyPage from './pages/NewJourney';

function App() {
  return (
    <main>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/newJourney" element={<NewJourneyPage />} />
      </Routes>
    </main>
  )
}

export default App
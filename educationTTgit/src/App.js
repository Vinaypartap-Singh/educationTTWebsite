import './App.css';
import Navbar from './components/DesktopVersion/Navbar';
import Hero from './components/DesktopVersion/Hero';
import InfoSection from './components/DesktopVersion/InfoSection';
import Courses from './components/DesktopVersion/Courses';
import StudentCarrier from './components/DesktopVersion/StudentCarrier';
import ReadyToStart from './components/DesktopVersion/ReadyToStart';
import FooterSection from './components/DesktopVersion/FooterSection';
import "../src/components/styles/main.css"
import MobileUpperNav from './components/MobileComponents/MobileUpperNav';
import FooterBar from './components/MobileComponents/FooterBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileUpperNav />
      <Hero />
      <InfoSection />
      <Courses />
      <StudentCarrier />
      <ReadyToStart />
      <FooterSection />
      <FooterBar />
    </div>
  );
}

export default App;

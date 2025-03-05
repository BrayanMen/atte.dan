import Header from './componets/Header.jsx';
import Footer from './componets/Footer.jsx';
import HeroSection from './Screens/HeroSection';
import ArticlesSection from './Screens/ArticlesSection.jsx';



function App() {
  return (
    <div className="bg-lavander-web font-poppins relative">
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ArticlesSection/>
        <Footer />
      </div>
    </div>
  );
}

export default App;

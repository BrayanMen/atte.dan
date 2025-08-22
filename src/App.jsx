import Header from './componets/Header.jsx';
import Footer from './componets/Footer.jsx';
import HomeScreen from './Screens/HomeScreen.jsx';



function App() {
  return (
    <div className="bg-lavander-web font-poppins relative">
      <div className="relative z-10">
        <Header />  
        <HomeScreen/>      
        <Footer />
      </div>
    </div>
  );
}

export default App;

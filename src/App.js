import './App.css';
import Images from './componentes/images';

function App() {
  return (
    <div className="container">
      <div className="team">
        <p className="theCreativeCrew">The creative crew</p>
        <p className="whoWeAre">Who we are</p>
        <p className="weAreTeam">We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
      
        <Images />
        <footer className="mail">Villalva Francisco @ DevChallenges.io</footer>
      </div>
    </div>
  );
}

export default App;

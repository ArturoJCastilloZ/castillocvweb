import './App.css';
import Hero from './componentes/hero/Hero';
import Portfolio from './componentes/portfolio/Portfolio';
import Curriculum from './componentes/curriculum/Curriculum';
import Footer from './componentes/footer/Footer';
import { FAKE_DB } from './fakeDB/fakeDB';

const {hero, curriculumSection, portfolio, footer} = FAKE_DB;

function App() {
  return (
    <div className="App">
      <Hero hero={hero}/>
      <Curriculum curriculumSection={curriculumSection} />
      <Portfolio portfolio={portfolio}/>
      <Footer footer={footer} />
    </div>
  );
}

export default App;

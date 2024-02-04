import { useEffect, useState } from 'react';
import Contacts from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';
import Technolgies from './pages/technolgies';
import Footer from './components/footer';
import Nav from './components/nav';
import { cont, home, panels, proj, tech } from './gsap';

const App = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);

    if (load) {
      panels();
      home();
      tech();
      proj();
      cont();
    }
  });

  return (
    <main className='w-full min-h-screen bg text-[--txt] overflow-hidden'>
      <loader className={`w-full h-[300vh] absolute bg-black duration-500 z-50 ${load && '-translate-y-[100%]'}`}></loader>
      <Nav />
      <Home />
      <Technolgies />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
};

export default App;

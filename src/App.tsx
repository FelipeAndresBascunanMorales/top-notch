import { Header } from './components/Header/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}

export default App;
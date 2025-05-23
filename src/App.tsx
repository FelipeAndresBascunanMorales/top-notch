import { Header } from './components/Header/Header';
// import { Hero } from './components/Hero';
// import { Services } from './components/Services';
// import { Contact } from './components/Contact';
// import { Blog } from './components/Blog';
import { OnDevelopmentLanding } from './OnDevelopmentLanding'

function App() {
  return (
    // <main className="min-h-screen">
    //   <Header />
    //   <Hero />
    //   <Blog />
    //   <Services />
    //   <Contact />
    // </main>
    <main className="min-h-screen">
      <Header />
      <OnDevelopmentLanding/>
    </main>
  );
}

export default App;
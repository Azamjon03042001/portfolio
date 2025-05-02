import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./styles/App.css";

function App() {
  return (
    <div className="App flow-container">
      <Header />
      <main className="main-content">
        <div className="content__sections">
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

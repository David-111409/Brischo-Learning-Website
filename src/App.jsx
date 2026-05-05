import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banner />
        <Categories />
      </main>
      <Footer />
    </>
  );
}

export default App;

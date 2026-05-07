import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import WhyLearn from "./components/WhyLearn";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banner />
        <Categories />
        <Courses />
        <WhyLearn />
      </main>
      <Footer />
    </>
  );
}

export default App;

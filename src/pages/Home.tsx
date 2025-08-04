import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const Home: React.FC = (): React.ReactElement => {
  return (
    <div className="bg-catalog">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

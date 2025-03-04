import { useEffect } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const Home: React.FC = (): React.ReactElement => {
  useEffect(() => {
    document.body.classList.add("bg-black");

    return () => {
      document.body.classList.remove("bg-black");
    };
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;

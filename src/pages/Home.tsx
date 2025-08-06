import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-catalog w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

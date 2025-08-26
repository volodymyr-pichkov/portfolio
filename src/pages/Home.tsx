import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative bg-catalog min-h-screen w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

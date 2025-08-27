import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative bg-catalog min-h-screen w-full pb-24 sm:pb-28 md:pb-32">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-catalog min-h-screen w-full flex flex-col">
      <Header />
      <div className="flex-1">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

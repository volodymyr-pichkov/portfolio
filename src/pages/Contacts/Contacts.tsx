import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactDetails from "@/pages/Contacts/components/ContactDetails";

const Contacts: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-opacity-50 pb-24 sm:pb-28 md:pb-32">
      <Header />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contacts;

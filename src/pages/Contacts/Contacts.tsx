import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactDetails from "@/pages/Contacts/components/ContactDetails";

const Contacts: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-opacity-50">
      <Header />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contacts;

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ContactItem from "./ContactItem";

const ContactDetails: React.FC = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 46.4825,
    lng: 30.7233,
  };

  return (
    <div className="grid grid-rows-2 px-8 md:px-36">
      <div className="pt-16">
        <p className="text-navigation font-raleway text-sm font-medium leading-[1.2rem]">
          квесты в Одессе
        </p>
        <h1 className="text-white font-raleway text-6xl font-extrabold leading-[4.4rem] mt-1">
          Контакты
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
        <dl className="space-y-4 text-questInfo font-raleway text-sm font-medium leading-[1.3rem]">
          <ContactItem label="Адрес" value="Одесса, улица Мира, дом 77" />
          <ContactItem
            label="Режим работы"
            value="Ежедневно, с 8:00 до 20:00"
          />
          <ContactItem label="Контактный телефон" value="+38 (048) 123-45-67" />
          <ContactItem label="E-mail" value="info@questodessa.com" />
        </dl>

        <div className="w-full h-80 md:h-96 lg:h-128">
          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

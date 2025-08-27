import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import ContactItem from "./ContactItem";

const ContactDetails: React.FC = () => {
  const center = {
    lat: 46.4825,
    lng: 30.7233,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <main className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 min-h-screen">
      <div className="pt-16">
        <p className="text-navigation font-raleway text-sm font-medium leading-5">
          квесты в Одессе
        </p>
        <h1 className="text-white font-raleway text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug sm:leading-[4rem] md:leading-[4.4rem] mt-1">
          Контакты
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 lg:gap-12 xl:gap-24 mt-10">
        <dl className="flex-1 min-w-0 md:pr-2 space-y-3 sm:space-y-4 text-questInfo font-raleway text-sm font-medium leading-5 md:leading-[1.3rem]">
          <ContactItem label="Адрес" value="Одесса, улица Мира, дом 77" />
          <ContactItem label="Режим работы" value="Ежедневно, с 8:00 до 20:00" />
          <ContactItem label="Контактный телефон" value="+38 (048) 123-45-67" />
          <ContactItem label="E-mail" value="info@questodessa.com" />
        </dl>

        <div className="flex-1 min-w-0 w-full h-56 sm:h-64 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] rounded-lg overflow-hidden shadow-md">
          {loadError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
              Не удалось загрузить карту
            </div>
          ) : !isLoaded ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
              Загрузка карты...
            </div>
          ) : (
            <GoogleMap
              center={center}
              zoom={12}
              mapContainerStyle={mapContainerStyle}
            >
              <Marker position={center} />
            </GoogleMap>
          )}
        </div>
      </div>
    </main>
  );
};

export default ContactDetails;

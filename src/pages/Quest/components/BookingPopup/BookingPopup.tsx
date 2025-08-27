import { useBookingForm } from "./BookingForm";
import FormInput from "./FormInput";
import CheckboxInput from "./CheckboxInput";

interface BookingPopupProps {
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ onClose }) => {
  const { formData, errors, success, handleChange, handleSubmit } =
    useBookingForm();

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6"
      style={{ backgroundColor: "rgba(61, 51, 51, 0.96)" }}
    >
      <div className="bg-bookingPopup rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 mt-2 mr-4 text-gray-400 hover:text-gray-200 text-2xl font-bold"
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h2 className="text-white lining-nums proportional-nums font-raleway text-xl sm:text-2xl font-extrabold leading-[3rem] sm:leading-[4rem]">
          Оставить заявку
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            error={errors.name}
          />
          <FormInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            error={errors.phone}
          />
          <FormInput
            type="number"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            placeholder="Количество участников"
            error={errors.participants}
            min={1}
          />
          <button
            type="submit"
            disabled={!formData.agreed}
            className={`font-bold py-3 rounded-full transition mt-6 sm:mt-7 mx-4 sm:mx-10
    ${
      formData.agreed
        ? "bg-navigation hover:bg-orange-600"
        : "bg-checkBox cursor-not-allowed"
    } 
    text-white`}
          >
            Отправить заявку
          </button>
          <CheckboxInput
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="mt-6"
            label={
              <span className="text-questInfo font-raleway text-xs sm:text-sm font-medium leading-relaxed break-words whitespace-normal">
                Я согласен с{" "}
                <span className="underline underline-custom">
                  правилами обработки персональных данных
                </span>{" "}
                и пользовательским соглашением
              </span>
            }
            error={errors.agreed}
          />

          {success && (
            <p className="text-green-600 text-sm">Заявка успешно отправлена!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;

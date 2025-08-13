import { useState } from "react";

interface BookingPopupProps {
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    participants: "",
    agreed: false,
  });
  const [errors, setErrors] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrors("Пожалуйста, введите имя");
      return;
    }
    if (!formData.phone.trim()) {
      setErrors("Пожалуйста, введите телефон");
      return;
    }
    if (
      !formData.participants.trim() ||
      isNaN(Number(formData.participants)) ||
      Number(formData.participants) <= 0
    ) {
      setErrors("Введите корректное количество участников");
      return;
    }
    if (!formData.agreed) {
      setErrors("Вы должны согласиться с правилами");
      return;
    }

    setErrors("");
    alert(
      `Заявка отправлена!\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nУчастников: ${formData.participants}`
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: "rgba(61, 51, 51, 0.96)" }}
    >
      <div className="bg-white rounded-lg p-8 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Оставить заявку</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navigation"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navigation"
            required
          />
          <input
            type="number"
            name="participants"
            placeholder="Количество участников"
            value={formData.participants}
            onChange={handleChange}
            min={1}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navigation"
            required
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            Я согласен с правилами
          </label>

          {errors && <p className="text-red-600 text-sm">{errors}</p>}

          <button
            type="submit"
            className="bg-navigation text-white font-bold py-3 rounded hover:bg-orange-600 transition"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;

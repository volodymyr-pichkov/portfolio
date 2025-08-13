import { useState } from "react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().nonempty("Пожалуйста, введите имя"),
  phone: z.string().nonempty("Пожалуйста, введите телефон"),
  participants: z
    .string()
    .nonempty("Введите количество участников")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Введите корректное количество участников"
    ),
  agreed: z
    .boolean()
    .refine((val) => val === true, "Вы должны согласиться с правилами"),
});

type BookingForm = {
  name: string;
  phone: string;
  participants: string;
  agreed: boolean;
};

interface BookingPopupProps {
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<BookingForm>({
    name: "",
    phone: "",
    participants: "",
    agreed: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingForm, string>>
  >({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = bookingSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(
          Object.entries(fieldErrors).map(([key, val]) => [key, val?.[0] || ""])
        ) as Partial<Record<keyof BookingForm, string>>
      );
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);
    setFormData({
      name: "",
      phone: "",
      participants: "",
      agreed: false,
    });
  };

  // Разбивка на компоненты
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
          <div>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-navigation"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-navigation"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              name="participants"
              placeholder="Количество участников"
              value={formData.participants}
              onChange={handleChange}
              min={1}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-navigation"
            />
            {errors.participants && (
              <p className="text-red-600 text-sm mt-1">{errors.participants}</p>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />
            Я согласен с правилами
          </label>
          {errors.agreed && (
            <p className="text-red-600 text-sm mt-1">{errors.agreed}</p>
          )}

          {success && (
            <p className="text-green-600 text-sm">Заявка успешно отправлена!</p>
          )}

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

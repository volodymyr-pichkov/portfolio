import { useState } from "react";
import { z } from "zod";

export const bookingSchema = z.object({
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

export type BookingForm = {
  name: string;
  phone: string;
  participants: string;
  agreed: boolean;
};

export const useBookingForm = () => {
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
    setFormData({ name: "", phone: "", participants: "", agreed: false });
  };

  return { formData, errors, success, handleChange, handleSubmit };
};

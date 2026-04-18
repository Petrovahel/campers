"use client";

import { useForm } from "react-hook-form";
import { nameValidation, emailValidation } from "@/lib/validation";
import { createBooking } from "@/lib/api";
import css from "./BookForm.module.css";

type Props = {
  camperId: string;
};

type FormValues = {
  name: string;
  email: string;
};

export default function BookForm({ camperId }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await createBooking(camperId, data);

      alert(result.message);
      reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <form className={css.bookForm} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>

      <input
        className={css.formInput}
        type="text"
        placeholder="Name*"
        {...register("name", nameValidation)}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        className={css.formInput}
        type="email"
        placeholder="Email*"
        {...register("email", emailValidation)}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button className={css.bookBtn} type="submit">
        Send
      </button>
    </form>
  );
}

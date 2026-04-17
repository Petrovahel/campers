"use client";

import { useForm } from "react-hook-form";
import {
  nameValidation,
  emailValidation,
} from "@/lib/validation";
import { createBooking } from "@/lib/api";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Book your campervan now</h1>
      <p>Stay connected! We are always ready to help you.</p>

      <input
        type="text"
        placeholder="Name*"
        {...register("name", nameValidation)}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email*"
        {...register("email", emailValidation)}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
}
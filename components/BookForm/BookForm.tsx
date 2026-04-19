"use client";

import { useForm } from "react-hook-form";
import { nameValidation, emailValidation } from "@/lib/validation";
import { createBooking } from "@/lib/api";
import css from "./BookForm.module.css";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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

  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);

      const result = await createBooking(camperId, data);

      setStatus("success");
      setMessage(result.message);
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={css.bookForm} onSubmit={handleSubmit(onSubmit)}>
      {status && (
        <div className={css.popup}>
          <div className={css.popupContent}>
            <p className={css.popupText}>
              {status === "success" ? (
                <FaCheckCircle className={css.iconSuccess} />
              ) : (
                <FaTimesCircle className={css.iconError} />
              )}
              {message}
            </p>

            <button type="button" onClick={() => setStatus(null)}>
              OK
            </button>
          </div>
        </div>
      )}
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
      {errors.name && <p className={css.error}>{errors.name.message}</p>}

      <input
        className={css.formInput}
        type="email"
        placeholder="Email*"
        {...register("email", emailValidation)}
      />
      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <button className={css.bookBtn} type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

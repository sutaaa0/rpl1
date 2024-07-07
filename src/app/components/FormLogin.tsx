import React, { useState, useTransition } from "react";
import { Button, Input } from "@nextui-org/react";
import EyeFilledIcon from "./EyeFilledIcon";
import EyeSlashFilledIcon from "./EyeSlashFilledIcon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schemas";
import { z } from "zod";
import Login from "../actions/Login";
import FormSucces from "./Form-succes";
import FormError from "./Form-error";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const [isVisible, setIsVisible] = React.useState(false);

  const [succes, setSucces] = useState<string | undefined>("");

  const [error, setError] = useState<string | undefined>("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setSucces("");
    setError("");

    startTransition(() => {
      Login(data).then((data: any) => {
        setSucces(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        disabled={isPending}
        {...register("email")} // Register email field with react-hook-form
        type="email"
        variant="bordered"
        label="Email"
      />
      {errors.email && <span className="text-red-500 text-sm">Email is required</span>} {/* Display error message if email is invalid */}
      <Input
        disabled={isPending}
        {...register("password", { required: true })} // Register password field with react-hook-form
        type={isVisible ? "text" : "password"}
        variant="bordered"
        label="Password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" /> : <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />}
          </button>
        }
      />
      {errors.password && <span className="text-red-500 ">Password is required</span>} {/* Display error message if password is invalid */}
      {succes && <FormSucces message={succes} />}
      {error && <FormError message={error} />}
      {isPending ? <Button disabled className="w-full">Loading...</Button> : <button className="w-full px-6 py-2 mt-3 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition-all duration-500 ease-in-out">
        Continue with Email
      </button>}
      {/* <button className="w-full px-6 py-2 mt-3 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition-all duration-500 ease-in-out">
        Continue with Email
      </button> */}
    </form>
  );
};

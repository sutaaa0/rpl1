import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const FormSucces = ({ message }: { message: string | undefined }) => {
  return (
    <div className="text-green-500 p-5 rounded-md flex items-center gap-x-2 text-sm">
      <CheckCircledIcon className="w-4 -4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSucces;

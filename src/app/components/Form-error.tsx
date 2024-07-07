import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const FormError = ({ message }: { message: string | undefined }) => {
  return (
    <div className="text-red-500 p-5 rounded-md flex items-center gap-x-2 text-sm">
      <ExclamationTriangleIcon className="w-4 -4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;

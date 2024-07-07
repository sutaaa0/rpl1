"use client";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { FormLogin } from "@/app/components/FormLogin";
import { FormRegister } from "@/app/components/FormRegister";

function ContinueWithEmail() {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showFieldsLogin, setShowFieldsLogin] = useState(false);

  const handleEmailClick = () => {
    setShowEmailInput(true);
  };

  const ShowFieldsLogin = () => {
    setShowFieldsLogin(!showFieldsLogin);
  };

  return (
    <div className="mt-4 w-full flex flex-col items-center">
      {!showEmailInput && (
        <button onClick={handleEmailClick} className="w-full px-6 py-2 mt-3 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition-all duration-500 ease-in-out">
          Continue with Email
        </button>
      )}
      <CSSTransition in={showEmailInput} timeout={500} classNames="email-input" unmountOnExit>
        {showFieldsLogin ? <FormLogin /> : <FormRegister />}
      </CSSTransition>
      <button hidden={!showEmailInput} onClick={ShowFieldsLogin}>
        {showFieldsLogin ? "dont have an account?" : "already have an account?"}
      </button>
    </div>
  );
}

export default ContinueWithEmail;

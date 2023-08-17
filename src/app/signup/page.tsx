"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import FormInput from "@/components/FormInput";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log(formFields);
      setLoading(false);
      resetFormFields();
    }, 3000);
  };

  const inputDivStyle = "flex gap-3 rounded-5 bg-white px-5 py-3";
  const inputIconStyle = "h-5 w-5 text-label";

  return (
    <section>
      <div className="sm:grid sm:grid-cols-2 sm:gap-[30px] lg:gap-10">
        <div className="relative h-[232px] sm:h-full">
          <Image
            src="/images/SignUp-Img-2.png"
            fill
            alt="sign up banner image"
            className="sm:hidden"
          />
          <Image
            src="/images/SignUp-Img.png"
            fill
            alt="sign up banner image"
            className="hidden object-cover sm:flex"
          />
        </div>

        <div className="mt-[30px] px-7 pb-10 sm:mr-7 sm:px-0 md:w-[90%]">
          <h3>Create Account</h3>
          <p className="pt-5 lg:text-xl">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>

          <form onSubmit={onSubmit} className="pt-[30px] sm:pt-10 md:w-[80%]">
            <div className="space-y-4">
              <div className={inputDivStyle}>
                <UserIcon className={inputIconStyle} />
                <FormInput
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  placeholder="Username"
                />
              </div>
              <div className={inputDivStyle}>
                <EnvelopeIcon className={inputIconStyle} />
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email Address"
                />
              </div>
              <div className={inputDivStyle}>
                <LockClosedIcon className={inputIconStyle} />
                <FormInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                />
              </div>
              <div className={inputDivStyle}>
                <LockClosedIcon className={inputIconStyle} />
                <FormInput
                  type="text"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`cursor- mt-[30px] w-full rounded-5 bg-primary py-3 ${
                loading && "cursor-wait opacity-70"
              }`}
              disabled={loading}
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

"use client";
import * as yup from "yup";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SectionTitle from "./SectionTitle/SectionTitle";
import Link from "next/link";
import { InputCustomizer } from "./InputCustomizer";
import { Eye, EyeSlash, LockSimple } from "phosphor-react";
import { AxiosError } from "axios";

interface NewPasswordFormFields extends FieldValues {
  password: string;
  confirmPassword: string;
}

const newPasswordFormSchema = yup.object().shape({
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(?=.*\d)(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}/,
      "A senha deve possuir no mínimo 8 caracteres, contendo pelo menos 1 letra maiúscula, 1 número e um caractere especial (Ex.: #,$,*,@)"
    ),
  confirmPassword: yup
    .string()
    .equals([yup.ref("password")], "As senhas fornecidas não correspondem."),
});

interface ShowingFieldsValues {
  password: boolean;
  confirmPassword: boolean;
}

const NewPasswordForm = () => {
  const [isShowingFieldsValues, setIsShowingFieldsValues] =
    useState<ShowingFieldsValues>({
      password: false,
      confirmPassword: false,
    });
  const [hasErrorMessage, setHasErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<NewPasswordFormFields>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    resolver: yupResolver<NewPasswordFormFields>(newPasswordFormSchema),
  });

  const onSubmit = async (formValues: NewPasswordFormFields) => {
    try {
      const teste = JSON.stringify(formValues);
      console.log(teste);

      router.push("/recoverPassword/password-reset-success");
    } catch (err) {
      const error = err as AxiosError;
      // @ts-ignore
      setHasErrorMessage(error.response?.data!.message);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-10 md:items-start md:min-w-[400px] md:max-w-[400px]">
      <figure>
        <Image
          src="/assets/bora-rachar-logo.svg"
          alt="Imagem da logomarca do Bora Rachar"
          width={280}
          height={100}
          className="md:w-[100px] md:h-[40px]"
        />
      </figure>
      <SectionTitle
        title="Redefinição de senha"
        customClassesNames={{
          title:
            " lg:ml-10 text-[24px] text-center font-black sm:text-[32px] md:text-left",
          header: "-mt-6 sm:mt-0",
        }}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-6 lg:ml-10"
      >
        {/* Password input */}
        <InputCustomizer.Root
          label="Senha"
          //    @ts-ignore
          control={control}
          name="password"
        >
          <InputCustomizer.Icon
            icon={LockSimple}
            isInvalid={errors.password ? true : false}
            isTouched={touchedFields.password ? true : false}
          />
          <InputCustomizer.Field
            name="password"
            type={isShowingFieldsValues.password === true ? "text" : "password"}
            //   @ts-ignore
            control={control}
          />
          <InputCustomizer.Icon
            icon={isShowingFieldsValues.password === true ? Eye : EyeSlash}
            onClick={() =>
              setIsShowingFieldsValues({
                ...isShowingFieldsValues,
                password: !isShowingFieldsValues.password,
              })
            }
          />
        </InputCustomizer.Root>
        {/* Confirm password input */}
        <InputCustomizer.Root
          label="Confirmar senha"
          //    @ts-ignore
          control={control}
          name="confirmPassword"
        >
          <InputCustomizer.Icon
            icon={LockSimple}
            isInvalid={errors.confirmPassword ? true : false}
            isTouched={touchedFields.confirmPassword ? true : false}
          />
          <InputCustomizer.Field
            name="confirmPassword"
            type={
              isShowingFieldsValues.confirmPassword === true
                ? "text"
                : "password"
            }
            //   @ts-ignore
            control={control}
          />
          <InputCustomizer.Icon
            icon={
              isShowingFieldsValues.confirmPassword === true ? Eye : EyeSlash
            }
            onClick={() =>
              setIsShowingFieldsValues({
                ...isShowingFieldsValues,
                confirmPassword: !isShowingFieldsValues.confirmPassword,
              })
            }
          />
        </InputCustomizer.Root>
        {hasErrorMessage && (
          <p className="text-[#EA4335] font-regular text-xs mt-1">
            {hasErrorMessage}
          </p>
        )}
        <input
          type="submit"
          value="Redefinir senha"
          className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer mt-6"
        />
      </form>
    </section>
  );
};

export default NewPasswordForm;

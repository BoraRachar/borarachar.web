"use client";
import * as yup from "yup";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import SectionTitle from "./SectionTitle/SectionTitle";
import { InputCustomizer } from "./InputCustomizer";
import { EnvelopeSimple, Eye, EyeSlash, LockSimple } from "phosphor-react";
import { ButtonCustomizer } from "./ButtonCustomizer";
import Link from "next/link";
import Image from "next/image";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { setEmail, setUrl } from "@/features/AuthSlice";
import { useDispatch } from "react-redux";

interface BasicRegisterFormFields extends FieldValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const basicRegisterFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo Obrigatório"),
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

const BasicRegisterForm = () => {
  const [isShowingFieldsValues, setIsShowingFieldsValues] =
    useState<ShowingFieldsValues>({
      password: false,
      confirmPassword: false,
    });
  const [hasErrorMessage, setHasErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<BasicRegisterFormFields>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    resolver: yupResolver<BasicRegisterFormFields>(basicRegisterFormSchema),
  });

  const onSubmit = async (formValues: BasicRegisterFormFields) => {
    try {
      const response = await fetch("/api/auth/register", {
        body: JSON.stringify(formValues),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { status } = response;
      const data = await response.json();
      console.log(data);
      dispatch(setEmail(data.email));
      dispatch(setUrl(data.url));

      if (status === 201) {
        router.push(`/register/confirm-email`);
      }
    } catch (err) {
      const error = err as AxiosError;
      // @ts-ignore
      setHasErrorMessage(error.response?.data!.message);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-10 md:items-start md:min-w-[400px] md:max-w-[400px]">
      <figure className="flex items-center justify-center w-full md:justify-start">
        <Image
          src="/assets/bora-rachar-logo.svg"
          alt="Imagem da logomarca do Bora Rachar"
          width={280}
          height={100}
          className="md:w-[100px] md:h-[40px]"
        />
      </figure>
      <SectionTitle
        title="Crie sua conta"
        customClassesNames={{
          title:
            "text-[24px] text-center font-black sm:text-[32px] md:text-left",
          header: "-mt-6 sm:mt-0",
        }}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-6"
      >
        {/* Email input */}
        <InputCustomizer.Root
          label="Email"
          //    @ts-ignore
          control={control}
          name="email"
        >
          <InputCustomizer.Icon
            icon={EnvelopeSimple}
            isInvalid={errors.email ? true : false}
            isTouched={touchedFields.email ? true : false}
          />
          <InputCustomizer.Field
            name="email"
            type="email"
            //   @ts-ignore
            control={control}
          />
        </InputCustomizer.Root>
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
          value="Criar minha conta"
          className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer mt-6"
        />
      </form>
      <section className="flex flex-col w-full mt-2 sm:-mt-2 gap-9 sm:gap-6">
        <p className="font-normal text-[#637381] text-center">
          Já possui uma conta? Entre na sua conta{" "}
          <Link href={"/login"} className="font-medium">
            aqui
          </Link>
          .
        </p>
        <div className="flex items-center w-full gap-4 sm:my-4">
          <div className="flex-1 h-[1px] bg-[#E7E7E7]"></div>
          <p className="text-base text-neutral-black">ou</p>
          <div className="flex-1 h-[1px] bg-[#E7E7E7]"></div>
        </div>
        <ButtonCustomizer.Root type="secondary" iconPosition="left">
          <ButtonCustomizer.Icon
            icon={() => (
              <Image
                alt="Ícone da logomarca do Google"
                src={"/assets/google-icon.svg"}
                width={24}
                height={24}
              />
            )}
          />
          <ButtonCustomizer.Title
            title="Criar conta com Google"
            customClassesNames="font-medium text-[18px] text-[#4D4A4F]"
          />
        </ButtonCustomizer.Root>
        <ButtonCustomizer.Root type="secondary" iconPosition="left">
          <ButtonCustomizer.Icon
            icon={() => (
              <Image
                alt="Ícone da logomarca do Google"
                src={"/assets/instagram.svg"}
                width={24}
                height={24}
              />
            )}
          />
          <ButtonCustomizer.Title
            title="Criar conta com Instagram"
            customClassesNames="font-medium text-[18px] text-[#4D4A4F]"
          />
        </ButtonCustomizer.Root>
      </section>
    </section>
  );
};

export default BasicRegisterForm;

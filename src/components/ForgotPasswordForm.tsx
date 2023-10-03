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
import { EnvelopeSimple } from "phosphor-react";
import { AxiosError } from "axios";
import checkEmailExists from "@/utils/checkEmail";

interface ForgotPasswordFormFields extends FieldValues {
  email: string;
}

const forgotPasswordFormSchema = yup.object().shape({
  email: yup.string()
    .email("E-mail inválido")
    .required("Campo obrigatório")
    .test("check-email-exists", "Email incorreto ou inexistente", async function (value) {
      if (value) {
        const emailExists = await checkEmailExists(value);
        return emailExists;
      }
      return true;
    }),
});

const ForgotPasswordForm = () => {
  const [hasErrorMessage, setHasErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<ForgotPasswordFormFields>({
    defaultValues: { email: "" },
    mode: "onBlur",
    resolver: yupResolver<ForgotPasswordFormFields>(forgotPasswordFormSchema),
  });

  const onSubmit = async (formValues: ForgotPasswordFormFields) => {
    try {
      const response = await fetch("/api/forgotPassword", {
        body: JSON.stringify(formValues),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setHasErrorMessage(null);
        router.push("/recoverPassword/forgot-password/success");
      } else {
        const { data: { message } } = data;
        setHasErrorMessage(message);
      }
    } catch (err) {
      const error = err as AxiosError;
      // @ts-ignore
      setHasErrorMessage(error.response?.data!.message);
    }
  }
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
        title="Esqueceu sua senha?"
        customClassesNames={{
          title:
            " lg:ml-10 text-[24px] text-center font-black sm:text-[32px] md:text-left",
          header: "-mt-6 sm:mt-0",
        }}
      />
      <p className="text-[14px] ml-10 text-[#637381]">Digite o seu e-mail cadastrado em nossa plataforma para que possamos enviar o link de redefinição de senha.</p>
      <form
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col w-full gap-6 lg:ml-10"
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
            isInvalid={ errors.email ? true : false }
          />
          <InputCustomizer.Field
            name="email"
            type="email"
            //   @ts-ignore
            control={control}
          />
        </InputCustomizer.Root>
        {hasErrorMessage && (
          <p className="text-[#EA4335] font-regular text-xs mt-1">
            {hasErrorMessage}
          </p>
        )}
        <input
          type="submit"
          value="Recuperar senha"
          className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer mt-6"
        />
        <p className="text-[#637381] text-[14px] text-center">
          Lembrou sua senha? Faça seu{" "}
          <Link href={"/login"} className="font-medium text-[#E66E05]">login</Link>
        </p>
      </form>
    </section>
  );
};

export default ForgotPasswordForm;

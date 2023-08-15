"use client";
import * as yup from "yup";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import SectionTitle from "./SectionTitle/SectionTitle";
import { InputCustomizer } from "./InputCustomizer";
import { User } from "phosphor-react";
import Image from "next/image";
import Checkbox from "./Form/Checkbox";

interface CompleteRegisterFormFields extends FieldValues {
   nome: string;
   sobrenome: string;
   cpf: string;
}

const completeRegisterFormSchema = yup.object().shape({
   nome: yup.string().required("O nome é obrigatório"),
   sobrenome: yup.string().required("O sobrenome é obrigatório"),
   cpf: yup.string().required("O CPF é obrigatório"),
});

const CompleteRegisterForm = () => {
   const [hasErrorMessage, setHasErrorMessage] = useState<string | null>(null);
   const [isChecked, setIsChecked] = useState<boolean>(false);

   const {
      control,
      handleSubmit,
      formState: { errors, touchedFields },
   } = useForm<CompleteRegisterFormFields>({
      defaultValues: {
         nome: "",
         sobrenome: "",
         cpf: "",
      },
      mode: "onBlur",
      resolver: yupResolver<CompleteRegisterFormFields>(
         completeRegisterFormSchema
      ),
   });

   const onSubmit = async (formValues: CompleteRegisterFormFields) => {
      if (isChecked) {
         formValues.termo = true;
         console.log(formValues);
      } else {
         setHasErrorMessage("Você precisa aceitar os termos para continuar");
      }
   };

   return (
      <section className="flex flex-col items-center justify-center gap-8 py-10 md:items-start md:min-w-[500px] md:max-w-[500px]">
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
            title="Informações do usuário"
            customClassesNames={{
               title: "text-[24px] text-center font-black sm:text-[32px] md:text-left",
               header: "-mt-6 sm:mt-0",
            }}
         />
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-6"
         >
            {/* Email input */}
            <InputCustomizer.Root
               label="Nome *"
               //    @ts-ignore
               control={control}
               name="nome"
            >
               <InputCustomizer.Icon
                  icon={User}
                  isInvalid={errors.nome ? true : false}
                  isTouched={touchedFields.nome ? true : false}
               />
               <InputCustomizer.Field
                  name="nome"
                  type="text"
                  //   @ts-ignore
                  control={control}
               />
            </InputCustomizer.Root>
            {/* Password input */}
            <InputCustomizer.Root
               label="Sobrenome *"
               //    @ts-ignore
               control={control}
               name="sobrenome"
            >
               <InputCustomizer.Icon
                  icon={User}
                  isInvalid={errors.sobrenome ? true : false}
                  isTouched={touchedFields.sobrenome ? true : false}
               />
               <InputCustomizer.Field
                  name="sobrenome"
                  type="text"
                  //   @ts-ignore
                  control={control}
               />
            </InputCustomizer.Root>
            {/* Confirm password input */}
            <InputCustomizer.Root
               label="CPF *"
               //    @ts-ignore
               control={control}
               name="cpf"
            >
               <InputCustomizer.Field
                  name="cpf"
                  type="text"
                  //   @ts-ignore
                  control={control}
                  mask={"999.999.999-99"}
               />
            </InputCustomizer.Root>
            <div className="mt-6">
               <Checkbox
                  title="Concordo com os termos do Bora Rachar. Leia Aqui"
                  currentState={isChecked}
                  onClickFunction={() => {
                     setHasErrorMessage(null);
                     setIsChecked(!isChecked);
                  }}
               />
            </div>
            {hasErrorMessage && (
               <p className="text-[#EA4335] font-regular text-xs mt-1">
                  {hasErrorMessage}
               </p>
            )}
            <input
               type="submit"
               value="Finalizar cadastro"
               className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer"
            />
         </form>
      </section>
   );
};

export default CompleteRegisterForm;

"use client";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle/SectionTitle";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/Form/Input";
import Checkbox from "./Form/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { ButtonCustomizer } from "./ButtonCustomizer";
import { InputCustomizer } from "./InputCustomizer";
import { RootState } from "@/store";
import { setRememberUser } from "@/features/AuthSlice";
import {
   EnvelopeSimple,
   Eye,
   EyeClosed,
   EyeSlash,
   LockSimple,
} from "phosphor-react";
import { useState } from "react";

interface AuthFormFields extends FieldValues {
   email: string;
   password: string;
}

const authFormSchema = yup.object().shape({
   email: yup.string().email("E-mail inválido").required("Campo Obrigatório"),
   password: yup.string().required("Senha obrigatória"),
});

export default function LoginForm() {
   const [isShowingPassword, setIsShowingPassword] = useState(false);
   const dispatch = useDispatch();
   const { rememberUser } = useSelector((state: RootState) => state.auth);

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<AuthFormFields>({
      defaultValues: { email: "", password: "" },
      mode: "onBlur",
      resolver: yupResolver<AuthFormFields>(authFormSchema),
   });

   const onSubmit = (data: AuthFormFields) => {
   };

   return (
      <section
         className="flex flex-col bg-neutral-gray-200 items-center justify-center py-8 
    sm:bg-white sm:m-8 sm:rounded-lg sm:border 
    sm:border-[#DBDBDC] sm:justify-start sm:items-start sm:w-full sm:pb-16
    "
      >
         <div className="hidden sm:block sm:ml-6">
            <Link id="link back page" href="/">
               <Image
                  src="/assets/arrow-back.svg"
                  alt="Botão de voltar"
                  width={24}
                  height={24}
               />
            </Link>
         </div>
         <div className="flex items-center justify-center w-full mt-4 mb-4">
            <Image
               id="logo-form"
               src="/assets/logo.svg"
               alt="Logo do Bora Rachar"
               width={240}
               height={88}
            />
         </div>
         <div className="w-full px-8 mb-4 sm:mb-6">
            <SectionTitle
               title="Seja bem-vindo!"
               customClassesNames={{
                  header: "gap-0",
                  title: "text-[32px] font-bold",
               }}
            />
            <p className="text-sm text-neutral-black -mt-2 max-w-[40ch] sm:max-w-none sm:text-base">
               Obtenha assinaturas com descontos incríveis! Não possui uma
               conta?
               <Link href="/" className="ml-1 text-secondary">
                  Cadastra-se
               </Link>
            </p>
         </div>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full px-8 sm:max-w-[80%] 
      sm:justify-center sm:items-center sm:mx-auto"
         >
            {/* Email input */}
            <InputCustomizer.Root
               label="Email"
               // @ts-ignore
               control={control}
               name="email"
            >
               <InputCustomizer.Icon
                  icon={EnvelopeSimple}
                  isInvalid={errors.email ? true : false}
               />
               <InputCustomizer.Field
                  name="email"
                  type="text"
                  // @ts-ignore
                  control={control}
               />
            </InputCustomizer.Root>
            {/* Password input */}
            <InputCustomizer.Root
               label="Senha"
               // @ts-ignore
               control={control}
               name="password"
            >
               <InputCustomizer.Icon
                  icon={LockSimple}
                  isInvalid={errors.password ? true : false}
               />
               <InputCustomizer.Field
                  name="password"
                  type={isShowingPassword ? "text" : "password"}
                  // @ts-ignore
                  control={control}
               />
               <InputCustomizer.Icon
                  icon={isShowingPassword ? Eye : EyeSlash}
                  onClick={() => setIsShowingPassword(!isShowingPassword)}
               />
            </InputCustomizer.Root>
            <div className="flex flex-col gap-2 mt-2 sm:flex-row sm:justify-between sm:w-full sm:hidden lg:flex">
               <Checkbox
                  title="Manter-me conectado"
                  currentState={rememberUser}
                  onClickFunction={() => {
                     dispatch(setRememberUser(!rememberUser));
                  }}
               />
               <Link href="#">Esqueci minha senha</Link>
            </div>
            <ButtonCustomizer.Root
               type="primary"
               customClassesNames="h-10 my-4 sm:my-6 lg:my-1 lg:mb-3"
            >
               <ButtonCustomizer.Title
                  title="Acessar minha conta"
                  customClassesNames="w-full text-neutral-gray-200"
               />
            </ButtonCustomizer.Root>
         </form>
         <div className="w-full px-8">
            <div className="flex items-center w-full gap-4 sm:my-4">
               <div className="flex-1 h-[1px] bg-[#dbdbdc]"></div>
               <p className="text-base text-neutral-black">ou</p>
               <div className="flex-1 h-[1px] bg-[#dbdbdc]"></div>
            </div>
            <div className="sm:max-w-[80%] mx-auto">
               <ButtonCustomizer.Root
                  type="secondary"
                  customClassesNames="h-10 mt-4 mb-2 border-neutral-gray-300 sm:mt-8 sm:mb-4"
                  iconPosition="left"
               >
                  <ButtonCustomizer.Icon
                     icon={() => (
                        <Image
                           src="/assets/google-icon.svg"
                           alt="Google"
                           width={24}
                           height={24}
                        />
                     )}
                  />
                  <ButtonCustomizer.Title
                     title="Acessar com Google"
                     customClassesNames="text-neutral-gray-300"
                  />
               </ButtonCustomizer.Root>
               <ButtonCustomizer.Root
                  type="secondary"
                  customClassesNames="h-10 border border-neutral-gray-300"
                  iconPosition="left"
               >
                  <ButtonCustomizer.Icon
                     icon={() => (
                        <Image
                           src="/assets/instagram.svg"
                           alt="Google"
                           width={24}
                           height={24}
                        />
                     )}
                  />
                  <ButtonCustomizer.Title
                     title="Acessar com Instagram"
                     customClassesNames="text-neutral-gray-300"
                  />
               </ButtonCustomizer.Root>
            </div>
         </div>
      </section>
   );
}

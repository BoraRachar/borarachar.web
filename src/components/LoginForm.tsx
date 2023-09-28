"use client";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle/SectionTitle";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
  User,
} from "phosphor-react";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";

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
  const [hasErrorMessage, setHasErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { rememberUser } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const { set } = useLocalStorage();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormFields>({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
    resolver: yupResolver<AuthFormFields>(authFormSchema),
  });

  const onSubmit = async (formValues: AuthFormFields) => {
    try {
      const response = await fetch("/api/auth/login", {
        body: JSON.stringify(formValues),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.ok) {
        const { token: { accessToken, refreshToken } } = data;

        set("accessToken", accessToken);
        set("refreshToken", refreshToken);
        
        router.push("/");
      } else {
        const { data: { message } } = data;
        setHasErrorMessage(message);
      }
    } catch (err) {
      const error = err as AxiosError;
      // @ts-ignore
      console.log(error);
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
        title="Login"
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
        <section className="flex justify-between w-full mt-2 sm:-mt-2 gap-9 sm:gap-6">
          <Checkbox
            title="Mantenha-me conectado"
            currentState={rememberUser}
            onClickFunction={() => dispatch(setRememberUser(!rememberUser))}
          />
          <Link href={"/recoverPassword/forgot-password"}>
            <p className="font-medium text-[#724FD8]">Esqueceu sua senha?</p>
          </Link>
        </section>
        <input
          type="submit"
          value="Acessar minha conta"
          className="text-lg font-medium w-full text-white bg-[#724FD8] py-[10px] rounded-md cursor-pointer mt-6"
        />
        { hasErrorMessage && (
          <p className="text-[#EA4335] font-regular text-xs mt-1">{hasErrorMessage}</p>
        )}
      </form>
      <section className="flex flex-col w-full mt-2 sm:-mt-2 gap-9 sm:gap-6">
        <p className="font-normal text-[#637381] text-center">
          Não possui uma conta ainda? Crie sua conta{" "}
          <Link href={"/register"} className="font-medium text-[#724FD8]">
            aqui
          </Link>
        </p>
        <div className="flex items-center w-full gap-4 sm:my-4">
          <div className="flex-1 h-[1px] bg-[#E7E7E7]"></div>
          <p className="text-base text-neutral-black">ou</p>
          <div className="flex-1 h-[1px] bg-[#E7E7E7]"></div>
        </div>
        <ButtonCustomizer.Root 
          type="secondary" 
          iconPosition="left"
        >
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
      </section>
    </section>
  );
}

import { axiosClient } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   const { email, password, confirmPassword } = await request.json();
   console.info(
      "email",
      email,
      "password",
      password,
      "confirmPassword",
      confirmPassword
   );
   try {
      const { data, status } = await axiosClient.post("/user", {
         email,
         password,
         confirmPassword,
      });
      console.info("data", data);
      console.info("status", status);
      return NextResponse.json({ message: data.message, email }, { status });
   } catch (err) {
      const error = err as AxiosError;
      return NextResponse.json(
         { data: error.response?.data },
         {
            status: error.response?.status,
         }
      );
   }
}

export async function PUT(request: NextRequest) {
   const { nome, sobrenome, cpf, termo, userId } = await request.json();
   // remove cpf mask
   const newCpf = cpf.replace(/\D/g, "");
   const putBody = {
      nome: nome,
      sobreNome: sobrenome,
      cpf: newCpf,
      termos: termo,
   };
   try {
      const { data, status } = await axiosClient.put(
         `/user/completeSignUp/${userId}`,
         putBody
      );
      if (status === 201) {
         return NextResponse.json({ message: "Criado" }, { status });
      }
   } catch (err) {
      const error = err as AxiosError;
      return NextResponse.json(error.response?.data, {
         status: error.response?.status,
      });
   }
   NextResponse.json({ message: "ok" });
}

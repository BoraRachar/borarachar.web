import { axiosClient } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { nome, sobrenome, cpf, termos } = await request.json();
  const currentUserId = request.url.split("/")[6];
  const newCpf = cpf.replace(/\D/g, "");
  const putBody = {
    nome: nome,
    sobreNome: sobrenome,
    cpf: newCpf,
    termos: termos,
  };
  try {
    const { status } = await axiosClient.put(
      `/user/completeSignUp/${currentUserId}`,
      putBody
    );
    if (status === 200) {
      return NextResponse.json({ message: "Criado" }, { status });
    }
  } catch (err) {
    console.log(err);
    const error = err as AxiosError;
    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
  NextResponse.json({ message: "ok" });
}

import { axiosClient } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
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
    const { data, status } = await axiosClient.put(
      "/recoverPassword/resetPassword",
      {
        email,
        password,
        confirmPassword,
      }
    );
    console.info("data", data);
    console.info("status", status);

    return NextResponse.json(data, { status });
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

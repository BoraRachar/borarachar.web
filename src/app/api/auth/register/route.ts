import { axiosClient } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const { email, password, confirmPassword } = await request.json();

  try {
    const { data, status } = await axiosClient.post("/user", {
      email,
      password,
      confirmPassword,
    });
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

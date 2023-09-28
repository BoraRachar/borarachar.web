import { axiosClient } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    const { data } = await axiosClient.post(
      `/recoverPassword/${email}`
    );
    return NextResponse.json(data);
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
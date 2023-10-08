import { axiosClient } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const email = request.url.split("/")[7];

  try {
    const { status } = await axiosClient.post(`/user/resendEmail/${email}`);
    return NextResponse.json({ status });
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}

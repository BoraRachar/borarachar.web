import { axiosClient } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get token from request url

  const token = request.url.split("/")[5];

  try {
    const { data } = await axiosClient.get(`/user/getUserByToken/${token}`);
    return NextResponse.json({ userId: data.userId });
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}

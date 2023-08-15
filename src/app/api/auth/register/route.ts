import { axiosClient } from "@/utils/axios";
import axios, { AxiosError } from "axios";
import { stat } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   const { email, password, confirmPassword } = await request.json();
   try {
      const { data, status } = await axiosClient.post("/user", {
         email,
         password,
         confirmPassword,
      });
      console.log("Data: ", data);
      console.log("Status: ", status);

      return NextResponse.json({ message: data.message, email }, { status });
   } catch (err) {
      const error = err as AxiosError;
      return NextResponse.json(error.response?.data, {
         status: error.response?.status,
      });
   }
}

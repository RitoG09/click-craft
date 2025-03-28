"use server";

import { REGISTER_URL } from "@/lib/apiEndPoints";
import axios from "axios";

export async function registerAction(prevState: any, formData: FormData) {
  // Create a more structured request payload
  const formDataObj = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirmPassword"), // Most APIs expect this format
  };

  console.log("Sending to server:", formDataObj);

  try {
    const { data }: { data: { message?: string } } = await axios.post(
      REGISTER_URL,
      formDataObj
    );

    console.log("Server response:", data);

    return {
      status: 200,
      message:
        data?.message ??
        "Account created successfully! Please check your email and verify your mail",
      errors: {},
    };
  } catch (error: any) {
    console.error("Registration error:", error.response?.data || error.message);

    if (error.response && error.request) {
      if (error.response?.status === 422) {
        return {
          status: 422,
          message: error.response?.data?.message || "Validation failed",
          errors: error.response?.data?.errors || {},
        };
      }
    }
    return {
      status: 500,
      message: "Something went wrong, try again ",
      errors: {},
    };
  }
}

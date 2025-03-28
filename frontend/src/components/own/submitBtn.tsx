"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import registerMutation from "@/app/register/page";

export function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full cursor-pointer"
      disabled={pending}
    >
      {pending ? "Processing.." : "Submit"}
    </Button>
  );
}

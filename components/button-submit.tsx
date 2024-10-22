"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function ButtonSubmit({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Loading.." : text}
    </Button>
  );
}

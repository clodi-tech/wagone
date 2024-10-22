"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { newsletterSignup } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormNewsletter() {
  const [state, formAction] = useFormState(newsletterSignup, null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (state?.success) {
      setKey((prev) => prev + 1);
    }
  }, [state]);

  return (
    <form
      key={key}
      id="newsletter-form"
      action={formAction}
      className="flex flex-col items-center gap-2"
    >
      <h2 className="text-2xl font-bold py-4">Subscribe to our newsletter</h2>
      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="first_name">First Name</Label>
          <Input id="first_name" type="text" name="first_name" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email*</Label>
          <Input required id="email" type="email" name="email" />
        </div>
      </div>
      {state && !state.success && (
        <span className="text-red-500 text-sm">{state.error}</span>
      )}
      {state && state.success && (
        <span className="text-green-500 text-sm">
          You are in! Please check your email.
        </span>
      )}
      <Button type="submit" className="mt-2">
        Subscribe
      </Button>
    </form>
  );
}

"use server";

import { NewsletterState } from "@/lib/types";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = process.env.KIT_FORM_ID;
const KIT_API_URL = `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`;

export async function newsletterSignup(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const first_name = formData.get("first_name");
  const email = formData.get("email");

  const data = {
    api_key: KIT_API_KEY,
    first_name,
    email,
  };

  const response = await fetch(KIT_API_URL, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
    method: "POST",
  });
  const json = await response.json();

  if (json.error) {
    console.error(json);
    return { success: false, error: json.message };
  }

  return { success: true, error: null };
}

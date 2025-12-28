"use server";

import { Resend } from "resend";

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function submitContactForm(prevState, formData) {
  // 1. Extract raw data
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  // 2. Validation (Same as before)
  const errors = {};
  if (!rawData.name || rawData.name.length < 2)
    errors.name = "Name is too short!";
  if (!rawData.email || !rawData.email.includes("@"))
    errors.email = "Invalid email!";
  if (!rawData.subject) errors.subject = "Subject is required!";
  if (!rawData.message || rawData.message.length < 10)
    errors.message = "Message too short!";

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
      message: "Please fix the errors above.",
      inputs: rawData,
    };
  }

  try {
    // --- STEP 3: SAVE TO STRAPI (DATABASE) ---
    const strapiResponse = await fetch(`${BASE_URL}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: rawData }),
      // 👇 ADD THIS: If Strapi doesn't answer in 4 seconds, abort.
      signal: AbortSignal.timeout(5000),
    });

    if (!strapiResponse.ok) {
      // If Strapi fails, we stop here. We don't want to send an email if we didn't save the lead.
      const errorData = await strapiResponse.text();
      console.log("❌ Strapi Error:", strapiResponse.status, errorData);
      return {
        success: false,
        message: `Failed to save: ${strapiResponse.statusText}`,
      };
    }

    // --- STEP 4: SEND EMAIL NOTIFICATION (VIA RESEND) ---
    // This sends an email TO YOU (the company)
    await resend.emails.send({
      from: "onboarding@resend.dev", // Use your verified domain later
      to: "maher.refae15@gmail.com", // 👈 REPLACE THIS WITH YOUR EMAIL
      subject: `New Lead: ${rawData.subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${rawData.name}</p>
        <p><strong>Email:</strong> ${rawData.email}</p>
        <p><strong>Subject:</strong> ${rawData.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${rawData.message}</p>
      `,
    });
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Connection error. Please try again." };
  }
}

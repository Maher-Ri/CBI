"use server";

export async function subscribeToNewsletter(email) {
  // 1. Validation (Same regex you used)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    // 2. Talk to Strapi
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/subscribers`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { email } }),
        // 👇 ADD THIS: If Strapi doesn't answer in 4 seconds, abort.
        signal: AbortSignal.timeout(5000),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data?.error?.message || "";
      // Handle the "Unique" error specifically
      if (errorMsg.includes("unique") || errorMsg.includes("taken")) {
        return { success: false, message: "This email is already subscribed." };
      }
      return { success: false, message: "Failed to subscribe. Try again." };
    }

    return { success: true, message: "Subscribed successfully!" };
  } catch (error) {
    return { success: false, message: "Connection failed. Please try again." };
  }
}

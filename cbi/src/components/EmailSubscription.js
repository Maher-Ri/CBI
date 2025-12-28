"use client";

import { useState } from "react";
import { toast } from "sonner";
import { subscribeToNewsletter } from "@/app/utils/subscribe"; // Import the helper

export default function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // 1. Call the Server Action directly (No fetch needed here)
    // We await it just like a normal function
    const result = await subscribeToNewsletter(email);

    // 2. Handle the result using your existing logic
    if (result.success) {
      toast.success(result.message);
      setEmail(""); // Clear input
    } else {
      // Check if it's the specific "already subscribed" message to show inline
      if (result.message.includes("already subscribed")) {
        setErrorMsg(result.message);
        setEmail("");
      } else {
        // Otherwise show toast error
        setErrorMsg(result.message);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex items-start border-b-2 mb-2 border-yellow `}
      >
        <input
          type="email"
          placeholder="Get News & Updates"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent outline-none text-[17px] flex-1 placeholder-white placeholder:text-[17px] font-medium placeholder:font-medium pb-6"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-yellow transition text-[18px] font-medium"
        >
          @
        </button>
      </form>
      {/* Inline error */}
      {errorMsg && (
        <p className="text-yellow font-semibold text-sm mb-4">{errorMsg}</p>
      )}
    </>
  );
}
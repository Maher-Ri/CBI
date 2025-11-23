import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function EmailSubscribtion() {
  const base = process.env.REACT_APP_STRAPI_URL;
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    setErrorMsg("");
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post(`${base}/api/subscribers`, {
        data: {
          email,
        },
      });

      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      if (error.response?.data?.error?.message?.includes("unique")) {
        setErrorMsg("This email is already subscribed.");
        setEmail("");
      } else {
        toast.error(
          error.response?.data?.error?.message ||
            "Failed to subscribe. Try again."
        );
      }
    }
  };
  return (
    <>
      <div
        className={`flex items-start border-b-2 mb-2 ${
          errorMsg ? "border-red" : "border-white"
        }`}
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
          className="text-gray-300 hover:text-white transition text-[18px] font-medium"
        >
          @
        </button>
      </div>
      {/* Inline error */}
      {errorMsg && (
        <p className="text-red font-semibold text-sm mb-4">{errorMsg}</p>
      )}
    </>
  );
}

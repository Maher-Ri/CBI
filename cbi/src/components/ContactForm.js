"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/utils/submitContactForm";

// Initial state for the form
const initialState = {
  success: false,
  message: null,
  errors: {},
  inputs: { name: "", email: "", subject: "", message: "" },
};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <div className="w-full max-w-[700px]">
      <form action={formAction} className="flex flex-col gap-8 md:gap-[40px]">
        {/* NAME INPUT */}
        <div className="flex flex-col gap-2 md:gap-4">
          <label
            htmlFor="name"
            className="text-white/60 text-base md:text-[28px] font-medium uppercase"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="INSERT FULL NAME..."
            defaultValue={state.inputs?.name || ""}
            className="w-full bg-[#4c5b6a] border-2 border-yellow rounded-xl px-4 py-4 md:py-6 text-base md:text-[28px] text-white placeholder-white outline-none focus:ring-2 focus:ring-yellow transition-all placeholder-uppercase "
          />
          {state.errors?.name && (
            <p className="text-yellow text-xs md:text-base font-medium">
              {state.errors.name}
            </p>
          )}
        </div>

        {/* EMAIL INPUT */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-white/60 text-base md:text-[28px] font-medium uppercase"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={state.inputs?.email || ""}
            placeholder="EXAMPLE@GMAIL.COM"
            className="w-full bg-[#4c5b6a] border-2 border-yellow rounded-xl px-4 py-4 md:py-6 text-base md:text-[28px] text-white placeholder-white outline-none focus:ring-2 focus:ring-yellow transition-all placeholder-uppercase "
          />
          {state.errors?.email && (
            <p className="text-yellow text-xs md:text-base font-medium">
              {state.errors.email}
            </p>
          )}
        </div>

        {/* SUBJECT INPUT */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-white/60 text-base md:text-[28px] font-medium uppercase"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="TITLE..."
            defaultValue={state.inputs?.subject || ""}
            className="w-full bg-[#4c5b6a] border-2 border-yellow rounded-xl px-4 py-4 md:py-6 text-base md:text-[28px] text-white placeholder-white outline-none focus:ring-2 focus:ring-yellow transition-all placeholder-uppercase "
          />
          {state.errors?.subject && (
            <p className="text-yellow text-xs md:text-base font-medium">
              {state.errors.subject}
            </p>
          )}
        </div>

        {/* MESSAGE INPUT */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-white/60 text-base md:text-[28px] font-medium uppercase"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="TYPE HERE.."
            defaultValue={state.inputs?.message || ""}
            className="w-full bg-[#4c5b6a] border-2 border-yellow rounded-xl px-4 py-4 md:py-6 text-base md:text-[28px] text-white placeholder-white outline-none focus:ring-2 focus:ring-yellow transition-all placeholder-uppercase resize-none"
          />
          {state.errors?.message && (
            <p className="text-yellow text-xs md:text-base font-medium">
              {state.errors.message}
            </p>
          )}
        </div>
        {/* Success/Error Global Message */}
        {state.message && (
          <div
            className={`p-4 rounded-xl text-base font-semibold ${
              state.success
                ? "bg-green-500/20 text-green-500"
                : "bg-yellow/20 text-yellow"
            }`}
          >
            {state.message}
          </div>
        )}
        {/* SUBMIT BUTTON */}
        <SubmitButton />
      </form>
    </div>
  );
}

// Sub-component to handle loading state automatically
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:max-w-[280px] px-6 py-3 text-lg lg:text-2xl font-medium uppercase rounded-lg text-yellow hover:text-mainBlue focus:outline-none border-2 border-yellow myBtn"
    >
      <span className="relative z-10">{pending ? "Sending..." : "Send"}</span>
    </button>
  );
}

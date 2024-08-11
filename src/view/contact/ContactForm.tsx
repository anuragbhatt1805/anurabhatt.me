import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function ResponseMessage() {
  return (
    <div className="text-center text-3xl font-bold text-white bg-green-500 p-4">
      <p>Thank you for your message!</p>
      <p>We have received your message and will get back to you soon.</p>
    </div>
  );
}

export function ContactForm() {
  const [state, handleSubmit] = useForm("mzzpgjzb");
  const [displayBar, setDisplayBar] = useState(true);

  if (state.succeeded) {
    setTimeout(() => {
      setDisplayBar(false);
    }, 10000);

    return (
      <>
        {displayBar && <ResponseMessage />}
        <ContactForm />
      </>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-400 dark:bg-[#1D1B25] shadow-md p-6 border-2 rounded-3xl md:w-1/2 md:mx-auto md:text-2xl text-lg md:my-10 my-4 mx-7"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 dark:text-white font-bold mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full px-3 text-black py-2 border-2 border-black dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 dark:text-white font-bold mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-3 text-black py-2 border-2 border-black dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-gray-700 dark:text-white font-bold mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          className="w-full px-3 py-2 border-2 text-black border-black dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 dark:text-white font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border-2 text-black border-black dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

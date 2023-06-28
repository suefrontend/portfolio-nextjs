"use client";

function Contact() {
  return (
    <div className="mx-auto xl:w-1/2 md:max-xl:w-9/12 mb-10">
      <h2 className="text-center title text-lg pb-1 tracking-wide">Contact</h2>
      <p className="py-8 text-center">I'd love to hear from you!</p>
      <form>
        <div className="mb-2">
          <input
            className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-2">
          <input
            className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-2">
          <div>
            <input
              className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
              id="subject"
              type="text"
              name="first"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <textarea
            className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
            id="message"
            rows="6"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-pink text-white w-full py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

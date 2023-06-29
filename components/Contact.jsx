import ContactForm from "@components/ContactForm";

function Contact() {
  return (
<<<<<<< HEAD
    <div className="container xl:w-1/2 md:max-xl:w-9/12 mb-10">
      {/* <div className="mx-auto xl:w-1/2 md:max-xl:w-9/12 mb-10"> */}
      <h2 className="text-center title text-lg pb-1 tracking-wide">Contact</h2>
      <p className="py-8 text-center">I'd love to hear from you!</p>
      <ContactForm />
=======
    <div className="mx-auto w-6/12 mb-10">
      <h2 className="text-center title text-lg pb-1 tracking-wide">Contact</h2>
      <p className="py-8 text-center">I'd love to hear from you!</p>
      <form>
        <div className="mb-2">
          <input
            className="border w-full p-1"
            id="frm-phone"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-2">
          <input
            className="border w-full p-1"
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-2">
          <div>
            <input
              className="border w-full p-1"
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <textarea
            className="border w-full p-1"
            id="frm-message"
            rows="6"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-pink text-white w-full">
            Submit
          </button>
        </div>
      </form>
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
    </div>
  );
}

export default Contact;

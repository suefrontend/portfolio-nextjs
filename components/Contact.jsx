import ContactForm from "@components/ContactForm";

function Contact() {
  return (
    <div className="mx-auto container">
      {/* <div className="mx-auto xl:w-1/2 md:max-xl:w-9/12 mb-10"> */}
      <h2 className="text-center title text-lg pb-1 tracking-wide">Contact</h2>
      <p className="py-8 text-center">I'd love to hear from you!</p>
      <ContactForm />
    </div>
  );
}

export default Contact;

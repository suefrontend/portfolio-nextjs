"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Sorry, your name must be 30 characters or less.")
        .required("Name is required."),
      email: Yup.string()
        .email("Please enter valid email address.")
        .required("Email is required."),
      subject: Yup.string()
        .max(150, "Your subject must be 150 characters or less.")
        .required("Subject is required."),
      message: Yup.string()
        .max(1000, "Your message must be 1000 characters or less.")
        .required("Message is required."),
    }),

    onSubmit: (values) => {
      console.log("Submitted data", values);
    },
  });

  console.log("formik value", formik.values);

  return (
    <div className="mx-auto xl:w-1/2 md:max-xl:w-9/12 mb-10">
      <h2 className="text-center title text-lg pb-1 tracking-wide">Contact</h2>
      <p className="py-8 text-center">I'd love to hear from you!</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className={`${
              formik.touched.name && formik.errors.name ? "text-pink" : ""
            }`}
          >
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : "Name"}
          </label>
          <input
            className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className={`${
              formik.touched.email && formik.errors.email ? "text-pink" : ""
            }`}
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email"}
          </label>
          <input
            className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your email"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="subject"
            className={`${
              formik.touched.subject && formik.errors.subject ? "text-pink" : ""
            }`}
          >
            {formik.touched.subject && formik.errors.subject
              ? formik.errors.subject
              : "Subject"}
          </label>
          <input
            className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
            type="text"
            name="subject"
            placeholder="Your subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="message"
            className={`${
              formik.touched.message && formik.errors.message ? "text-pink" : ""
            }`}
          >
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : "Message"}
          </label>
          <textarea
            className="border w-full px-2 py-1 !outline-none border-gray-200 focus:border-pink focus:ring-pink placeholder-gray-400 placeholder-opacity-50"
            id="message"
            rows="6"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Message"
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

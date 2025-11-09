"use client";

import Link from "next/link";
import { useForm } from "@formspree/react";

export default function ContactForm() {
  // Make sure to use your new Form ID for helanzaind@gmail.com
  const [state, handleSubmit] = useForm("xgvrwpbn"); // <-- UPDATE THIS

  if (state.succeeded) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Thanks for your inquiry!
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We've received your message and will get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Let's Build Your Next Collection
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ready to turn your concepts into high-quality apparel? Fill out
              the form or contact us directly. Our expert team is ready to
              assist you.
            </p>
            <div className="mt-8 space-y-4">
              <p className="text-lg text-gray-700 font-semibold">
                Email:
                <a
                  href="mailto:helanzaind@gmail.com"
                  className="text-gray-900 hover:text-gray-700 ml-2"
                >
                  helanzaind@gmail.com
                </a>
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                WhatsApp:
                <a
                  href="https://wa.me/923466818926"
                  target="_blank"
                  className="text-gray-900 hover:text-gray-700 ml-2"
                >
                  +92-346-6818926
                </a>
              </p>
            </div>

            {/* Map Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Our Location
              </h3>
              <p className="text-base text-gray-500 mb-4">
                Hashimpura, Defence Road, Sialkot, Pakistan
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
                {/* --- 1. HERE IS THE NEW, CORRECT MAP --- */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108422.3787756788!2d74.4697918434771!3d32.4965103444081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eeb89e65c08d1%3A0x83f05d9765c7f8a2!2sSialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1677863589415!5m2!1sen!2s?q=Hashimpura%2C%20Defence%20Road%2C%20Sialkot%2C%20Pakistan"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Inquiry
            </h3>
            <div className="space-y-6">
              {/* --- 2. ADDED "Your Name" FIELD --- */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* --- 3. ADDED "Your Email" FIELD --- */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="ABC Apparel Co."
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="I'm interested in custom tracksuits, approx 200 units..."
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-300"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

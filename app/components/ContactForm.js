export default function ContactForm() {
  // We will make this form functional later with Formspree
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            <div className="mt-8">
              <p className="text-lg text-gray-700 font-semibold">
                Email:
                <a
                  href="mailto:helanzaind@gmail.com"
                  className="text-gray-900 hover:text-gray-700 ml-2"
                >
                  helanzaind@gmail.com
                </a>
              </p>
              {/* Add your WhatsApp link here when you're ready */}
              <p className="text-lg text-gray-700 font-semibold mt-2">
                WhatsApp:
                <a href="#" className="text-gray-900 hover:text-gray-700 ml-2">
                  +92 3018818926
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            action="#"
            method="POST"
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Inquiry
            </h3>
            <div className="space-y-6">
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
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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

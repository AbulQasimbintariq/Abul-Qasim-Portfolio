function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10">
        Get In Touch
      </h2>

      <div className="max-w-2xl mx-auto text-center">

        <p className="text-base sm:text-lg text-slate-400 mb-6">I'm always interested in hearing about new projects and opportunities.</p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a href="mailto:qasimbhalli6547@gmail.com" className="text-base sm:text-lg text-blue-400 hover:text-blue-300 transition underline">Email: qasimbhalli6547@gmail.com</a>
        </div>

      </div>

    </section>
  );
}

export default Contact;
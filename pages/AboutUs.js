import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white text-[#0b1a3f] overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-white shadow-2xl overflow-visible px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0b1a3f 30%, #d32f2f 90%)",
        }}
      >
        {/* Rectangular Snake Line */}
        <motion.div
          className="absolute bg-[#d32f2f] z-20"
          style={{ width: 60, height: 4, borderRadius: 0 }}
          animate={{
            x: [0, 240, 240, 0, 0],
            y: [0, 0, 120, 120, 0],
            rotate: [0, 0, 90, 90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl z-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-widest mb-4 leading-tight">
            About Skyluc Projects
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            Trusted in logistics. Powered by technology. Built on precision.
          </p>
        </motion.div>
      </div>

      {/* Company Overview */}
      {/* Company Overview */}
<section
  id="company-overview"   // <-- Add this id
  className="max-w-7xl mx-auto px-6 py-16"
  style={{
    background: "linear-gradient(90deg, #fefefe 0%, #f5f5f5 100%)",
  }}
>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#d32f2f] uppercase mb-6 text-center md:text-left">
            Company Overview
          </h2>
          <p className="text-lg leading-8 text-gray-800 shadow-md p-6 rounded-md mb-10">
            Skyluc Projects, Logistics & Transport is a trusted South African
            company delivering comprehensive project management, logistics, and
            transport solutions tailored to meet the demands of modern business.
            Our traditional services—cargo handling, freight forwarding, and fleet
            operations—are enhanced by cutting-edge automation, instrumentation,
            and smart sensor technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-6 shadow-xl rounded-md">
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p>
                We manage your projects from start to finish, integrating real-time
                tracking, automation tools, and predictive analytics to ensure every
                milestone is met with precision.
              </p>
            </div>
            <div className="bg-gray-50 p-6 shadow-xl rounded-md">
              <h3 className="text-xl font-semibold mb-2">Logistics & Transport</h3>
              <p>
                From warehousing to delivery, our logistics systems are backed by IoT
                sensors and smart routing algorithms to keep cargo monitored and
                routes optimized.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Mission & Vision */}
      <section
        className="max-w-7xl mx-auto px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #f9f9f9 0%, #e6e6e6 100%)",
        }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0b1a3f] uppercase mb-6 text-center md:text-left">
              Our Mission & Vision
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              At Skyluc, our mission is to seamlessly integrate technology with
              traditional logistics to create smart, reliable, and efficient supply
              chains. We envision a future where automation and mechatronics empower
              businesses to operate safer and faster, ensuring every delivery meets
              the highest standards of precision.
            </p>
            <p className="text-lg leading-relaxed">
              We commit to innovation, transparency, and sustainability, delivering
              solutions that evolve with the demands of modern commerce.
            </p>
          </div>
          <motion.div
            className="md:w-1/2 shadow-2xl rounded-md overflow-hidden w-full max-w-md mx-auto md:mx-0"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/pik2.jpg"
              alt="Mission and Vision"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Technology & Innovation */}
      <section
        className="max-w-7xl mx-auto px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #fefefe 100%)",
        }}
      >
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#d32f2f] uppercase mb-6 text-center md:text-left">
              Technology & Innovation
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Our edge lies in embedding mechatronics and smart automation into
              every facet of logistics and transport. From sensor networks
              monitoring cargo conditions to automated fleet tracking systems, our
              technology enhances safety, efficiency, and operational excellence.
            </p>
            <p className="text-lg leading-relaxed">
              We continuously invest in R&D to stay ahead, bringing the latest in
              IoT, predictive analytics, and instrumentation to ensure our clients
              benefit from cutting-edge logistics solutions.
            </p>
          </div>
          <motion.div
            className="md:w-1/2 shadow-2xl rounded-md overflow-hidden w-full max-w-md mx-auto md:mx-0"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/tech1.jpg"
              alt="Technology and Innovation"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Client Success Stories */}
      <section
        className="max-w-7xl mx-auto px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #f9f9f9 0%, #eaeaea 100%)",
        }}
      >
        <h2 className="text-3xl font-bold text-[#0b1a3f] uppercase mb-12 text-center">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-2 md:px-0">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white shadow-lg p-6 rounded-none border-l-8 border-[#d32f2f]"
            >
              <Image
                src={`/pik3.jpg`}
                alt={`Client Success ${i}`}
                width={400}
                height={240}
                className="object-cover mb-4 w-full h-48 rounded-md"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <h3 className="text-xl font-semibold mb-2">Success Story #{i}</h3>
              <p className="text-gray-700 leading-relaxed">
                Our integrated logistics and smart sensor technology enabled client
                #{i} to reduce delivery delays by 30% and improve cargo safety
                significantly.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section
         id="leadership-team"  
        className="bg-[#f9f9f9] py-16 px-6"
        style={{
          background: "linear-gradient(135deg, #f9f9f9 0%, #e6e6e6 100%)",
        }}
      >
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[#d32f2f] uppercase mb-10 text-center md:text-left">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-2 md:px-0">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 shadow-2xl transition rounded-md"
              >
                <Image
                  src={`/team/member${i}.jpg`}
                  alt={`Leader ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover mb-4 rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <h3 className="text-xl font-semibold">Leader Name {i}</h3>
                <p className="text-sm text-gray-600">Chief Position {i}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#0b1a3f] text-white py-16 px-6"
        style={{
          background:
            "linear-gradient(135deg, #0b1a3f 0%, #7a0b0b 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[#d32f2f] uppercase mb-6 text-center">
            Contact Us
          </h2>
          <p className="mb-6 text-center">
            Ready to partner with us or have questions? Reach out and we’ll
            respond promptly.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 bg-white text-black shadow-md rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 bg-white text-black shadow-md rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="md:col-span-2 p-4 bg-white text-black shadow-md h-40 rounded-md"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-[#d32f2f] text-white px-6 py-3 font-semibold uppercase tracking-wide shadow-lg hover:opacity-90 transition rounded-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

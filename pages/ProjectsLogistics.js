import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsLogistics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1a3f] via-[#13294b] to-[#1a2a56] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-white px-4 text-center shadow-2xl"
      style={{
          background: "linear-gradient(135deg, #0b1a3f 30%, #d32f2f 90%)",
        }}>
       <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-4 text-white bg-clip-text text-transparent"
        style={{ letterSpacing: "0.15em" }}
        >
        Projects & Logistics
        </motion.h1>


        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="max-w-xl text-sm sm:text-base md:text-lg text-[#ff6969] font-semibold uppercase tracking-wider px-4"
        >
          Delivering tradition with smart technology embedded
        </motion.p>

        <motion.div
          className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-[12px_12px_0_0_rgba(211,47,47,0.6)]"
          style={{ borderRadius: 0 }}
          animate={{
            rotate: [0, 5, -5, 5, 0],
            scale: [1, 1.05, 0.95, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24 space-y-24">

        {/* Project Management Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          id="project-management"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14 p-6 md:p-14 shadow-2xl border-l-8 border-[#d32f2f] rounded-none bg-gradient-to-r from-[#0b1a3f] to-[#1a2a56]"
        >
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-4">
              Project Management
            </h3>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              We manage your projects from start to finish, integrating real-time tracking, automation tools, and predictive analytics to ensure every milestone is met with precision.
            </p>
            <p className="text-[#ff6969] font-semibold uppercase tracking-wide">
              Key Features:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm sm:text-base">
              <li>Real-time project tracking dashboards</li>
              <li>Automated task scheduling and alerts</li>
              <li>Predictive analytics to anticipate risks</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full shadow-lg" style={{ borderRadius: 0 }}>
            <Image
              src="/images/project-management.jpg"
              alt="Project Management"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.section>

        {/* Logistics Solutions Section */}
        <motion.section
          id="logistics-solutions"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-14 p-6 md:p-14 shadow-2xl border-l-8 border-[#d32f2f] rounded-none bg-gradient-to-r from-[#0b1a3f] to-[#1a2a56]"
        >
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-4">
              Logistics Solutions
            </h3>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              From warehousing to delivery, our logistics systems are backed by IoT sensors and smart routing algorithms to keep cargo monitored and routes optimized.
            </p>
            <p className="text-[#ff6969] font-semibold uppercase tracking-wide">
              Smart Technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm sm:text-base">
              <li>IoT sensor networks for cargo condition monitoring</li>
              <li>Smart routing and delivery optimization</li>
              <li>Automated warehouse management systems</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full shadow-lg" style={{ borderRadius: 0 }}>
            <Image
              src="/images/logistics-solutions.jpg"
              alt="Logistics Solutions"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.section>

        {/* Transport Services Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          id="transport-services"
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14 p-6 md:p-14 shadow-2xl border-l-8 border-[#d32f2f] rounded-none bg-gradient-to-r from-[#0b1a3f] to-[#1a2a56]"
        >
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-4">
              Transport Services
            </h3>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Our fleet operations are optimized with smart scheduling and vehicle tracking to ensure timely and secure deliveries.
            </p>
            <p className="text-[#ff6969] font-semibold uppercase tracking-wide">
              Service Highlights:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm sm:text-base">
              <li>Automated fleet tracking and security</li>
              <li>Real-time vehicle diagnostics and alerts</li>
              <li>Route optimization and scheduling software</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full shadow-lg" style={{ borderRadius: 0 }}>
            <Image
              src="/images/transport-services.jpg"
              alt="Transport Services"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.section>

        {/* Warehousing & Inventory Management Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-14 p-6 md:p-14 shadow-2xl border-l-8 border-[#d32f2f] rounded-none bg-gradient-to-r from-[#0b1a3f] to-[#1a2a56]"
        >
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-4">
              Warehousing & Inventory Management
            </h3>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Our warehousing solutions combine traditional storage practices with smart inventory tracking systems, ensuring your goods are safe, accessible, and accounted for at every stage.
            </p>
            <p className="text-[#ff6969] font-semibold uppercase tracking-wide">
              Smart Features:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-sm sm:text-base">
              <li>Automated inventory tracking with RFID and IoT</li>
              <li>Real-time stock level monitoring and alerts</li>
              <li>Efficient warehouse layout powered by data analytics</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full shadow-lg" style={{ borderRadius: 0 }}>
            <Image
              src="/images/warehousing.jpg"
              alt="Warehousing & Inventory Management"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.section>

        {/* Join Our Team Section */}
        <motion.section
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mt-20 p-6 sm:p-10 md:p-12 bg-[#d32f2f] text-white shadow-2xl"
          style={{ borderRadius: 0 }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 uppercase tracking-wide">
            Join Our Team
          </h3>
          <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We’re always looking for talented individuals passionate about merging traditional logistics with cutting-edge technology. Explore our open positions and internships to start your journey with Skyluc.
          </p>
          <button className="mt-8 px-6 sm:px-8 py-3 bg-white text-[#d32f2f] font-semibold uppercase tracking-wide shadow-lg hover:opacity-90 transition rounded-none text-sm sm:text-base">
            View Careers
          </button>
        </motion.section>
      </main>
    </div>
  );
}

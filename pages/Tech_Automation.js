import { motion } from "framer-motion";
import Image from "next/image";

export default function TechAutomation() {
  return (
    <div className="bg-white text-[#0b1a3f] min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex flex-col justify-center items-center text-white shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0b1a3f 30%, #d32f2f 90%)",
        }}
      >
        <div className="flex items-center space-x-8">
          {/* Animated Shape */}
          <motion.div
            initial={{ y: 0, rotate: 0, opacity: 0.8 }}
            animate={{
              y: [0, -15, 0, 15, 0],
              rotate: [0, 15, 0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-20 h-20 border-4 border-[#d32f2f] rounded-none"
          />

          {/* Title and Subtitle */}
          <div>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              className="text-6xl font-extrabold uppercase tracking-widest mb-6"
              style={{ letterSpacing: "0.2em" }}
            >
              Tech & Automation
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, delay: 0.3 }}
              className="max-w-3xl text-lg font-semibold uppercase tracking-wide text-[#ffe6e6]"
            >
              Where Tradition Meets Smart Innovation
            </motion.p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-28">
        {/* Fleet Tracking & Security */}
        <motion.section
          initial={{ x: -120, opacity: 0 }}
          id="fleet-tracking-security"
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-[#0b1a3f] to-[#1a2a56] p-14 shadow-2xl border-l-8 border-[#d32f2f] rounded-none"
        >
          <h2 className="text-4xl font-bold text-[#fff] mb-6 uppercase tracking-wide">
            Fleet Tracking & Security
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            Our fleet operations combine trusted traditional logistics with next-gen GPS tracking and IoT sensor networks. This ensures live location updates, vehicle health monitoring, and rapid detection of security threats for safer, smarter deliveries.
          </p>
          <p className="text-[#ff6969] font-semibold uppercase tracking-wide mb-4">
            Embedded Smart Technology Highlights:
          </p>
          <ul className="list-disc list-inside text-[#ffe6e6] text-lg space-y-2">
            <li>Real-time GPS location updates with IoT integration</li>
            <li>Vehicle diagnostics enabling predictive maintenance</li>
            <li>Instant security alerts to prevent theft or tampering</li>
          </ul>
        </motion.section>

        {/* Innovative Fleet Management */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}

          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row items-center gap-12 p-14 shadow-2xl border-r-8 border-[#d32f2f] rounded-none bg-gradient-to-r from-[#13294b] to-[#0a1b32]"
        >
          <div className="md:w-1/2 text-white">
            <h3 className="text-3xl font-bold uppercase tracking-wide mb-6">
              Innovative Fleet Management
            </h3>
            <p className="mb-6 leading-relaxed">
              Our advanced fleet management combines traditional vehicle handling with AI-powered scheduling and smart diagnostics. This integration boosts efficiency, reduces downtime, and guarantees reliability across every route.
            </p>
            <p className="text-[#ff6969] font-semibold uppercase tracking-wide">
              Key Features:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>AI-driven route optimization</li>
              <li>Predictive vehicle maintenance alerts</li>
              <li>Seamless fleet communication via IoT</li>
            </ul>
          </div>
          <div className="md:w-1/2 shadow-lg" style={{ borderRadius: 0 }}>
            <Image
              src="/pik8.jpg"
              alt="Innovative Fleet Management"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.section>

        {/* Sensor & Alarm Systems */}
        <motion.section
          initial={{ x: 120, opacity: 0 }}
          id="sensor-alarm-systems"
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-[#d32f2f] to-[#7a0b0b] p-14 shadow-2xl border-r-8 border-[#0b1a3f] rounded-none"
        >
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wide">
            Sensor & Alarm Systems
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            Our advanced sensor and alarm systems marry time-tested security practices with state-of-the-art automation and mechatronics. We monitor environmental factors and operational safety, ensuring rapid response and uninterrupted service.
          </p>
          <p className="text-[#ffe6e6] font-semibold uppercase tracking-wide mb-4">
            Embedded Smart Technology Highlights:
          </p>
          <ul className="list-disc list-inside text-[#ffe6e6] text-lg space-y-2">
            <li>Integrated alarms linked to smart sensor networks</li>
            <li>Continuous environmental monitoring for risk mitigation</li>
            <li>Automated alerts and system diagnostics for quick response</li>
          </ul>
        </motion.section>

        {/* Smart Sensor Networks */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row-reverse items-center gap-12 p-14 shadow-2xl border-l-8 border-[#d32f2f] rounded-none bg-gradient-to-r from-[#581b1b] to-[#330f0f]"
        >
          <div className="md:w-1/2 text-white">
            <h3 className="text-3xl font-bold uppercase tracking-wide mb-6">
              Smart Sensor Networks
            </h3>
            <p className="mb-6 leading-relaxed">
              Our smart sensor networks provide continuous real-time monitoring of cargo conditions, fleet status, and environmental factors. These systems enable rapid decision-making and proactive maintenance, keeping operations smooth and secure.
            </p>
            <p className="text-[#ff6969] font-semibold uppercase tracking-wide">
              Sensor Network Highlights:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Real-time temperature and humidity sensing</li>
              <li>Automated condition-triggered alerts</li>
              <li>Integration with central fleet management platform</li>
            </ul>
          </div>
          <div className="md:w-1/2 shadow-lg" style={{ borderRadius: 0 }}>
            <Image
              src="/images/pik9.jpg"
              alt="Smart Sensor Networks"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.section>

        {/* Instrumentation & Automation */}
        <motion.section
        id="instrumentaion-automation"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-[#1a2a56] to-[#0b1a3f] p-14 shadow-2xl border-l-8 border-[#d32f2f] rounded-none"
        >
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wide">
            Instrumentation & Automation
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            We integrate sophisticated instrumentation and automated control systems into every layer of operations. Our mechatronics solutions empower precision, efficiency, and safety, making Skyluc a leader in modern logistics innovation.
          </p>
          <p className="text-[#ff6969] font-semibold uppercase tracking-wide mb-4">
            Embedded Smart Technology Highlights:
          </p>
          <ul className="list-disc list-inside text-[#ffe6e6] text-lg space-y-2">
            <li>Automated control systems driven by real-time data</li>
            <li>Precision instrumentation for optimized operations</li>
            <li>Mechatronics-enhanced safety and efficiency protocols</li>
          </ul>
        </motion.section>

        {/* Advanced Automation Systems */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col md:flex-row items-center gap-12 p-14 shadow-2xl border-r-8 border-[#d32f2f] rounded-none bg-gradient-to-r from-[#123056] to-[#0a1a2b]"
        >
          <div className="md:w-1/2 text-white">
            <h3 className="text-3xl font-bold uppercase tracking-wide mb-6">
              Advanced Automation Systems
            </h3>
            <p className="mb-6 leading-relaxed">
              Our advanced automation systems integrate real-time data processing with precise control algorithms. This allows for adaptive logistics workflows that improve safety and reduce operational costs.
            </p>
            <p className="text-[#ff6969] font-semibold uppercase tracking-wide">
              Automation Highlights:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Real-time adaptive control loops</li>
              <li>Integrated machine learning for predictive actions</li>
              <li>Mechatronics-driven operational efficiency</li>
            </ul>
          </div>
          <div className="md:w-1/2 shadow-lg" style={{ borderRadius: 0 }}>
            <Image
              src="/images/3lorry.jpg"
              alt="Advanced Automation Systems"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.section>

        {/* Final Callout */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-4xl mx-auto mt-20 p-12 bg-[#0b1a3f] text-white shadow-2xl"
          style={{ borderRadius: 0 }}
        >
          <h3 className="text-3xl font-extrabold mb-6 uppercase tracking-wide">
            Technology Embedded in Tradition
          </h3>
          <p className="text-lg leading-relaxed max-w-xl mx-auto">
            At Skyluc, technology is seamlessly embedded into every stage of our traditional logistics and transport services. Our mechatronics-engineered solutions bring enhanced transparency, efficiency, and security to your supply chain.
          </p>
        </motion.div>
      </main>
    </div>
  );
}

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "What skills are you looking for?",
    a: "We seek motivated individuals with strong logistics, engineering, or tech skills, eager to innovate in smart automation and transport.",
  },
  {
    q: "Do you offer remote work options?",
    a: "While most roles require on-site presence due to operational needs, some engineering and admin positions have flexible remote options.",
  },
  {
    q: "How do I apply?",
    a: "Click 'View Careers' and follow the application instructions on our careers portal.",
  },
  {
    q: "Are internships paid?",
    a: "Yes, all internships at Skyluc are paid, with opportunities for full-time placement afterwards.",
  },
];

export default function Careers() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Data with deadlines and links for applying
  const positions = [
    {
      title: "Logistics Coordinator",
      subtitle: "Traditional Operations & Smart Tech Integration",
      desc: "Manage day-to-day logistics operations including freight scheduling, cargo handling, and warehouse coordination. Utilize embedded sensor data and smart routing software to optimize deliveries and enhance operational safety.",
      deadline: "Apply by: September 30, 2025",
      applyLink: "#",
    },
    {
      title: "Automation Engineer",
      subtitle: "Mechatronics & Smart Systems Development",
      desc: "Design and implement mechatronics solutions, including sensor networks and automated control systems, to modernize our fleet tracking and transport security. Collaborate cross-functionally to embed smart tech into logistics workflows.",
      deadline: "Apply by: October 15, 2025",
      applyLink: "#",
    },
    {
      title: "Fleet Operations Manager",
      subtitle: "Integrated Logistics & IoT Monitoring",
      desc: "Lead fleet management, overseeing traditional transport operations while utilizing GPS and IoT sensor data to optimize routes, improve vehicle health, and enhance delivery security.",
      deadline: "Apply by: October 10, 2025",
      applyLink: "#",
    },
  ];

  const internships = [
    {
      title: "Logistics & Supply Chain Intern",
      subtitle: "Exposure to Core Operations & Smart Technologies",
      desc: "Assist in coordinating shipments, managing warehouse operations, and analyzing sensor data for cargo safety. Gain insight into how technology enhances traditional logistics.",
      deadline: "Apply by: August 31, 2025",
      applyLink: "#",
    },
    {
      title: "Automation & Instrumentation Intern",
      subtitle: "Practical Experience in Mechatronics & Automation",
      desc: "Work with engineers developing sensor systems, alarms, and automated fleet monitoring. Learn to integrate technology into logistics for enhanced efficiency and security.",
      deadline: "Apply by: September 15, 2025",
      applyLink: "#",
    },
  ];

  return (
    <div className="bg-white text-[#0b1a3f] min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex flex-col justify-center items-center text-white shadow-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0b1a3f 30%, #d32f2f 90%)",
        }}
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="text-6xl font-extrabold uppercase tracking-widest mb-6"
          style={{ letterSpacing: "0.2em" }}
        >
          Careers at Skyluc
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.7, delay: 0.3 }}
          className="max-w-3xl text-lg font-semibold uppercase tracking-wide text-[#ffe6e6] text-center px-4"
        >
          Join our team driving innovation in logistics and smart automation
        </motion.p>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-20 space-y-32">

        {/* Open Positions */}
        <motion.section
          id="open-positions"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-[#0b1a3f] to-[#1a2a56] p-16 shadow-2xl border-l-8 border-[#d32f2f] rounded-none"
        >
          <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-wide">
            Open Positions
          </h2>
          <p className="text-white text-lg leading-relaxed mb-10">
            Skyluc Projects, Logistics & Transport offers dynamic career
            opportunities in traditional logistics, transport management, and
            cutting-edge technology fields. Join us to be part of a team where
            your skills help bridge the gap between trusted operations and smart
            innovation.
          </p>

          <div className="space-y-12">
            {/* Position Cards */}
            {positions.map(({ title, subtitle, desc, deadline, applyLink }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(211, 47, 47, 0.6)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-[#0b1a3f] p-8 shadow-lg border-l-4 border-[#d32f2f] rounded-none flex flex-col"
              >
                <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
                <p className="mb-2 font-semibold text-[#d32f2f] uppercase">
                  {subtitle}
                </p>
                <p className="leading-relaxed mb-4">{desc}</p>
                <p className="text-sm font-semibold text-[#a32121] mb-6">{deadline}</p>
                <a
                  href={applyLink}
                  className="self-start bg-[#d32f2f] hover:bg-[#a32121] text-white font-bold py-2 px-6 rounded shadow transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Internships */}
        <motion.section
          id="internships"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-[#d32f2f] to-[#7a0b0b] p-16 shadow-2xl border-r-8 border-[#0b1a3f] rounded-none"
        >
          <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-wide">
            Internships
          </h2>
          <p className="text-white text-lg leading-relaxed mb-10">
            Our internship program offers hands-on experience in logistics,
            transport, and technology innovation. Interns work alongside experts
            managing real projects that blend traditional operational skills with
            smart automation and mechatronics systems.
          </p>

          <div className="space-y-12">
            {/* Internship Cards */}
            {internships.map(({ title, subtitle, desc, deadline, applyLink }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 105, 105, 0.6)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-[#7a0b0b] p-8 shadow-lg border-r-4 border-[#0b1a3f] rounded-none flex flex-col"
              >
                <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
                <p className="mb-2 font-semibold text-[#d32f2f] uppercase">
                  {subtitle}
                </p>
                <p className="leading-relaxed mb-4">{desc}</p>
                <p className="text-sm font-semibold text-[#7a0b0b] mb-6">{deadline}</p>
                <a
                  href={applyLink}
                  className="self-start bg-[#d32f2f] hover:bg-[#a32121] text-white font-bold py-2 px-6 rounded shadow transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Work With Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="md:w-1/2">
            <Image
              src="/pik11.jpg"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded shadow-lg object-cover"
              priority
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-[#0b1a3f] mb-6 uppercase tracking-wide">
              Why Work With Us
            </h2>
            <p className="text-lg leading-relaxed text-[#333] mb-6">
              At Skyluc, we foster a culture of innovation, teamwork, and
              continuous learning. We value the blend of traditional expertise
              and smart automation, providing you the platform to grow your
              skills in a supportive environment.
            </p>
            <ul className="list-disc list-inside text-[#0b1a3f] text-lg space-y-3">
              <li>Inclusive and collaborative workplace culture</li>
              <li>Cutting-edge technology with hands-on experience</li>
              <li>Professional development and career advancement</li>
              <li>Commitment to sustainability and community</li>
            </ul>
          </div>
        </motion.section>

        {/* Employee Benefits */}
        <motion.section
          id="culture-benefits"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#0b1a3f] text-white p-16 rounded-none shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold mb-12 uppercase tracking-wide text-center">
            Employee Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 mx-auto text-[#d32f2f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Health & Wellness",
                desc: "Comprehensive medical insurance and wellness programs for you and your family.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 mx-auto text-[#d32f2f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: "Flexible Hours",
                desc: "Work-life balance with adaptable schedules and remote work options.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 mx-auto text-[#d32f2f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1-12 0" />
                    <path d="M12 12v6" />
                  </svg>
                ),
                title: "Career Growth",
                desc: "Ongoing training, mentorship, and clear career progression paths.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-[#112346] p-8 rounded-md text-center shadow-lg"
              >
                {icon}
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Career Growth Path */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-[#0b1a3f] mb-12 uppercase tracking-wide text-center">
            Career Growth Path
          </h2>
          <ol className="relative border-l-4 border-[#d32f2f]">
            {[
              {
                title: "Entry Level",
                desc: "Start your career with foundational training in logistics and tech systems.",
                iconBg: "bg-[#d32f2f]",
              },
              {
                title: "Mid Level",
                desc: "Develop advanced skills managing projects and embedded automation.",
                iconBg: "bg-[#a32121]",
              },
              {
                title: "Senior Level",
                desc: "Lead teams, innovate smart logistics solutions, and shape company strategy.",
                iconBg: "bg-[#7a0b0b]",
              },
            ].map(({ title, desc, iconBg }, i) => (
              <li key={i} className="mb-10 ml-6">
                <span
                  className={`flex absolute -left-6 justify-center items-center w-12 h-12 rounded-full ${iconBg} ring-4 ring-white text-white font-bold text-lg`}
                >
                  {i + 1}
                </span>
                <h3 className="text-2xl font-semibold text-[#0b1a3f] mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{desc}</p>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Our Team Spotlight */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-7xl mx-auto px-8 py-16 space-y-12"
        >
          <h2 className="text-4xl font-extrabold text-[#0b1a3f] mb-12 uppercase tracking-wide text-center">
            Our Team Spotlight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-none shadow-lg p-6 flex flex-col items-center text-center"
                style={{ borderRadius: 0 }}
              >
                <Image
                  src={`/pik12.webp`}
                  alt={`Team Member ${i}`}
                  width={200}
                  height={200}
                  className="rounded-full object-cover mb-6"
                  priority
                />
                <h3 className="text-2xl font-bold text-[#0b1a3f] mb-2">
                  Member {i} Name
                </h3>
                <p className="text-[#d32f2f] uppercase font-semibold mb-3">
                  Position Title
                </p>
                <p className="text-gray-600">
                  Passionate about integrating smart tech in logistics and leading
                  teams to operational excellence.
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto p-12 bg-[#f5f8ff] rounded-none shadow-lg"
        >
          <h2 className="text-4xl font-extrabold text-[#0b1a3f] mb-8 uppercase tracking-wide text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border border-[#d32f2f] rounded-md">
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === i ? null : i)
                  }
                  className="w-full text-left px-6 py-4 text-lg font-semibold text-[#0b1a3f] flex justify-between items-center focus:outline-none"
                >
                  {q}
                  <span className="text-[#d32f2f] font-extrabold text-xl">
                    {openFaqIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-6 text-gray-700">{a}</div>
                )}
              </div>
            ))}
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
            At Skyluc, technology is seamlessly embedded into every stage of
            our traditional logistics and transport services. Our
            mechatronics-engineered solutions bring enhanced transparency,
            efficiency, and security to your supply chain.
          </p>
        </motion.div>
      </main>
    </div>
  );
}

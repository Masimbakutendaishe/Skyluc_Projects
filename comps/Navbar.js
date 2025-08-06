import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { HiPhone, HiMail } from "react-icons/hi";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const mainLinks = [
  {
    label: "About Us",
    href: "/AboutUs",
    sublinks: [
      { label: "Company Overview", href: "/AboutUs#company-overview", icon: "/skyluclogo.png" },
      { label: "Leadership Team", href: "/AboutUs#leadership-team", icon: "/skyluclogo.png" },
      { label: "Contact", href: "/AboutUs#contact", icon: "/skyluclogo.png" },
    ],
  },
  {
    label: "Projects & Logistics",
    href: "/ProjectsLogistics",
    sublinks: [
      { label: "Project Management", href: "/ProjectsLogistics#project-management", icon: "/skyluclogo.png" },
      { label: "Logistics Solutions", href: "/ProjectsLogistics#logistics-solutions", icon: "/skyluclogo.png" },
      { label: "Transport Services", href: "/ProjectsLogistics#transport-services", icon: "/skyluclogo.png" },
    ],
  },
  {
    label: "Tech & Automation",
    href: "/Tech_Automation",
    sublinks: [
      { label: "Fleet Tracking & Security", href: "/Tech_Automation#fleet-tracking-security", icon: "/skyluclogo.png" },
      { label: "Sensor & Alarm Systems", href: "/Tech_Automation#sensor-alarm-systems", icon: "/skyluclogo.png" },
      { label: "Instrumentation & Automation", href: "/Tech_Automation#instrumentation-automation", icon: "/skyluclogo.png" },
    ],
  },
  {
    label: "Careers",
    href: "/Careers",
    sublinks: [
      { label: "Open Positions", href: "/Careers#open-positions", icon: "/skyluclogo.png" },
      { label: "Internships", href: "/Careers#internships", icon: "/skyluclogo.png" },
      { label: "Culture & Benefits", href: "/Careers#culture-benefits", icon: "/skyluclogo.png" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const closeTimeoutRef = useRef(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        openDropdownIndex !== null &&
        dropdownRefs.current[openDropdownIndex] &&
        !dropdownRefs.current[openDropdownIndex].contains(event.target)
      ) {
        setOpenDropdownIndex(null);
      }
    }
    function handleScroll() {
      if (openDropdownIndex !== null) {
        setOpenDropdownIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openDropdownIndex]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const openDropdown = (idx) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdownIndex(idx);
  };

  const startCloseTimer = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdownIndex(null);
    }, 3000);
  };

  return (
    <nav className="bg-[#0b1a3f] text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold tracking-wide hover:text-[#d32f2f] transition">
          <Image src="/skyluclogo.png" alt="Skyluc Logo" width={32} height={32} priority />
          <span>Skyluc Projects</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 font-semibold uppercase text-sm">
          {mainLinks.map((link, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => openDropdown(idx)}
              onMouseLeave={startCloseTimer}
            >
              <Link href={link.href}>
                <button className="px-3 py-1 transition hover:bg-[#d32f2f] hover:text-white">
                  {link.label}
                </button>
              </Link>

              {openDropdownIndex === idx && (
                <div
                  ref={(el) => (dropdownRefs.current[idx] = el)}
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={startCloseTimer}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[60vw] max-w-3xl mt-1 bg-white text-[#0b1a3f] shadow-xl z-50 border border-gray-200"
                >
                  <div className="grid grid-cols-2 gap-0">
                    {link.sublinks.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className={`
                          flex items-center gap-3 px-5 py-4
                          border-b border-gray-100
                          ${i % 2 === 0 ? "border-r border-gray-100" : ""}
                          transition hover:bg-[#d32f2f] hover:text-white
                        `}
                      >
                        <Image src={sub.icon} alt={sub.label} width={30} height={30} />
                        <span className="text-sm font-medium">{sub.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Contact Icons */}
        <div className="hidden md:flex space-x-6 text-[#d32f2f] text-xl">
          <a href="tel:+27123456789" aria-label="Call us"><HiPhone /></a>
          <a href="mailto:info@skylucprojects.co.za" aria-label="Email us"><HiMail /></a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[#d32f2f]"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMobileDropdownOpen(null);
          }}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      }`}>
        <ul className="flex flex-col px-5 py-4 space-y-2 font-semibold uppercase bg-white text-[#0b1a3f]">
          {mainLinks.map((link, idx) => {
            const isOpen = mobileDropdownOpen === idx;
            return (
              <li key={idx} className="border-b border-[#ccc]">
                <button
                  onClick={() => setMobileDropdownOpen(isOpen ? null : idx)}
                  className="w-full text-left flex justify-between items-center py-3"
                >
                  {link.label}
                  <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <ul className="pl-5 py-2 space-y-2 text-sm">
                    {link.sublinks.map((sub, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Image src={sub.icon} alt={sub.label} width={24} height={24} />
                        <Link href={sub.href} className="hover:text-[#d32f2f]" onClick={() => setMobileMenuOpen(false)}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Contact */}
        <div className="bg-white text-[#d32f2f] flex justify-center space-x-10 py-4 text-3xl">
          <a href="tel:+27123456789"><HiPhone /></a>
          <a href="mailto:info@skylucprojects.co.za"><HiMail /></a>
        </div>
      </div>
    </nav>
  );
}

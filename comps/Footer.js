const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {/* About Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">About Skyluc</h3>
            <p className="text-lg">
              Skyluc Projects, Logistics & Transport is a South African company delivering traditional logistics, project execution, and transport services — enhanced with smart automation, fleet tracking, and sensor-based technology. We fuse hands-on expertise with embedded innovation to build efficient, future-forward supply chains.
            </p>
          </div>

          {/* Hours of Operation Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
            <ul className="text-lg space-y-2">
              <li>Mon – Fri: 8:00am – 6:00pm</li>
              <li>Sat: 9:00am – 4:00pm</li>
              <li>Sun & Holidays: Closed</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="text-lg space-y-2">
              <li>Email: <a href="mailto:info@skylucprojects.co.za" className="hover:underline">info@skylucprojects.co.za</a></li>
              <li>Phone: <a href="tel:+27834004977" className="hover:underline">+27 835058144</a></li>
              <li>Address: Office 311, Sheffreel House. 339 Prince George Avenue, Brakpan. 1540</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Skyluc Projects. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

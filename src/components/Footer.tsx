
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Padma Hostel</h3>
            <p className="text-gray-300 mb-4">
              Your second home away from home. Providing comfortable and secure accommodation for students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/boys-hostel" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Boys Hostel
              </Link>
              <Link to="/girls-hostel" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Girls Hostel
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">info@padmahostel.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-300">
                  University Road, Near Medical College, City - 123456
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-2 text-gray-300">
              <p>• 24/7 Security</p>
              <p>• High-Speed WiFi</p>
              <p>• Dining Hall</p>
              <p>• Laundry Services</p>
              <p>• Furnished Rooms</p>
              <p>• Study Environment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Padma Hostel. All rights reserved. | Designed with care for student comfort and safety.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

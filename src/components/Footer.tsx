
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkNavy text-offWhite py-12 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + Mission */}
        <div>
          <h3 className="text-xl font-bold font-display mb-4">Dev101Labs</h3>
          <p className="text-sm leading-relaxed">
            Dev101Labs is a multidisciplinary technology and government solutions firm specializing in helping organizations and entrepreneurs secure competitive advantages through digital transformation, procurement strategy, and end-to-end creative services. We empower agencies, businesses, and real estate professionals by bridging the gap between strategic goals, modern technology, and compliant execution.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-electricCyan transition-colors">Services</Link></li>
            <li><Link href="/government" className="hover:text-electricCyan transition-colors">Government Solutions</Link></li>
            <li><Link href="/real-estate" className="hover:text-electricCyan transition-colors">Real Estate Media</Link></li>
            <li><Link href="/portfolio" className="hover:text-electricCyan transition-colors">Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-electricCyan transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-electricCyan transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@dev101labs.com" className="hover:text-electricCyan transition-colors">info@dev101labs.com</a></li>
            <li>Phone: <a href="tel:+12137927102" className="hover:text-electricCyan transition-colors">(213) 792-7102</a></li>
            <li>Address: 21 Miller Alley #210, Pasadena, CA 91103</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {currentYear} Dev101Labs. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/privacy-policy" className="hover:text-electricCyan transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-electricCyan transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

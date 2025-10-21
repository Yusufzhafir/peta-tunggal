const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <p className="text-gray-300 mb-2">📧 support@landtracker.gov</p>
            <p className="text-gray-300 mb-2">📞 (555) 123-4567</p>
            <p className="text-gray-300">🏢 Government Technology Services</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">System Status</h4>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">All Systems Operational</span>
            </div>
            <p className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>
            &copy; 2025 LandTracker Pro. All rights reserved. | Internal
            Government Use Only
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

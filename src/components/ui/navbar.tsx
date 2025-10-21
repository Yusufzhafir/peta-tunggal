import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src={"/logo.png"}
                priority
                quality={75}
                width={200}
                height={400}
                alt="Logo of lestari"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Peta Tunggal</h1>
          </div>
          <nav className="flex space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Navbar };

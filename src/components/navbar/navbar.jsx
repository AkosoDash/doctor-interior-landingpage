import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", function () {
    setScrollYPosition(window.scrollY);
  });

  return (
    <>
      <div
        className={`nav fixed w-full h-24 flex flex-row items-center justify-between px-8 md:px-16 z-50 transition-all ${
          scrollYPosition < 150 ? "bg-none" : "bg-stone-800 shadow-2xl"
        }`}
      >
        <a href="/" className="text-white w-full lg:w-2/12">
          <img
            src="assets/logos/logo-white.png"
            className="w-auto h-4"
            alt="doctor-interior-logo"
          />
        </a>
        <div className="lg:flex hidden flex-row items-center justify-end gap-x-12">
          <a
            href="/about"
            className={`text-white font-light hover:border-b-2 border-white ${
              currentPath === "/about"
                ? "border-b-2 border-white text-white font-medium"
                : ""
            }`}
          >
            Tentang Kami
          </a>
          <a
            href="/services"
            className={`text-white font-light hover:border-b-2 border-white ${
              currentPath === "/services"
                ? "border-b-2 border-white text-white font-medium"
                : ""
            }`}
          >
            Produk & Layanan
          </a>
          <a
            href="/portfolio"
            className={`text-white font-light hover:border-b-2 border-white ${
              currentPath === "/portfolio"
                ? "border-b-2 border-white text-white font-medium"
                : ""
            }`}
          >
            Karya Terbaru
          </a>
        </div>
        <div className="w-2/12 hidden lg:flex justify-end items-center">
          <a
            className="text-white font-light uppercase px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black transition"
            href="/contact"
          >
            Kontak Kami
          </a>
        </div>
        <button
          className="block lg:hidden text-white font-light uppercase px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.15, ease: "linear" }}
        className={`h-screen w-full bg-stone-800 flex  flex-col justify-between items-center z-50 fixed ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } `}
      >
        <div className="w-full h-auto flex flex-col items-start justify-center">
          <div className="w-full h-24 flex flex-row items-center justify-between px-8 md:px-16 ">
            <a href="/" className="text-white w-full lg:w-2/12">
              <img
                src="assets/logos/logo-white.png"
                className="w-auto h-4"
                alt="doctor-interior-logo"
              />
            </a>
            <div>
              <button
                className="text-white font-light uppercase px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black transition"
                onClick={() => {
                  console.log(isMobileMenuOpen);
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col items-center justify-center space-y-4 px-4">
            <a
              href="/about"
              className={`w-full text-center  font-light p-8 hover:bg-white hover:text-black rounded-lg transition-all ${
                currentPath === "/about"
                  ? "bg-white text-black font-medium rounded-lg"
                  : "text-white"
              }`}
            >
              Tentang Kami
            </a>
            <a
              href="/services"
              className={`w-full text-center font-light p-8 hover:bg-white hover:text-black rounded-lg transition-all ${
                currentPath === "/services"
                  ? "bg-white text-black font-medium rounded-lg"
                  : "text-white"
              }`}
            >
              Produk & Layanan
            </a>
            <a
              href="/portfolio"
              className={`w-full text-center  font-light p-8 hover:bg-white hover:text-black rounded-lg transition-all ${
                currentPath === "/portfolio"
                  ? "bg-white text-black font-medium rounded-lg"
                  : "text-white"
              }`}
            >
              Karya Terbaru
            </a>
          </div>
        </div>
        <div className="w-full px-4 pb-4">
          <button
            className="text-white w-full font-light uppercase px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black transition"
            onClick={() => (window.location.href = "/contact")}
          >
            Kontak Kami
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

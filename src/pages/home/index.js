import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contentData from "../../datas/content-data.json";
import { motion } from "framer-motion";
import Footer from "../../components/footer/footer";

const HomeIndex = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-banner-image bg-cover bg-fixed bg-center flex flex-row items-center justify-center">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ times: [0, 1], ease: "linear" }}
          className="bg-black/50 w-2/3 min-h-56 flex flex-row items-center justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white uppercase text-center">
            Selamat datang pasien interior
          </h1>
        </motion.div>
        <a
          href="#about-us"
          className="absolute -bottom-8 h-16 w-16 bg-transparent rounded-full flex items-center justify-center border border-gray"
        >
          <FontAwesomeIcon icon={faChevronDown} size="1x" color="#ffffff" />
        </a>
      </div>
      <div
        id="about-us"
        className="w-full h-auto bg-stone-800 bg-fixed bg-cover bg-center p-12 md:p-16 flex flex-col items-start justify-center gap-y-8"
      >
        <h1 className="text-5xl md:text-6xl font-light uppercase text-white">
          Apa Itu Doctor Interior?
        </h1>
        <div className="w-full h-auto flex flex-row gap-x-4 ">
          <p className="text-white text-justify">{contentData["about-us"]}</p>
        </div>
      </div>
      <div
        id="our-experience"
        className="w-full min-h-screen bg-about-us-image bg-fixed bg-cover bg-center bg-blend-hue py-16 flex flex-col items-center justify-center gap-y-16"
      >
        <h1 className="text-4xl lg:text-5xl font-light uppercase text-white p-8 bg-black/50">
          Apa saja pengalaman kami?
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center w-full">
          <div className="w-full md:w-2/3 h-96 bg-banner-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-2xl font-light uppercase text-white p-8 bg-black/50 z-20 hover:before:opacity-100">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-1/3 h-96 bg-about-us-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-2xl font-light uppercase text-white p-8 bg-black/50 z-20">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-1/3 h-96 bg-about-us-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-2xl font-light uppercase text-white p-8 bg-black/50 z-20">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-2/3 h-96 bg-banner-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-2xl font-light uppercase text-white p-8 bg-black/50 z-20">
              Tunjungan Plaza Lobby
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeIndex;

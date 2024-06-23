import { motion } from "framer-motion";
import contentData from "../../datas/content-data.json";
import Footer from "../../components/footer/footer";
const Portfolio = () => {
  return (
    <div className="h-min-screen w-full">
      <div className="w-full min-h-screen bg-banner-image bg-cover bg-fixed bg-center flex flex-row items-center justify-center relative">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ times: [0, 1], ease: "linear" }}
          className="bg-black/50 w-2/3 h-56 flex flex-row items-center justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white uppercase text-center">
            Portofolio Kami
          </h1>
        </motion.div>
      </div>
      <div
        id="about-us"
        className="w-full h-auto bg-stone-800 bg-fixed bg-cover bg-center flex flex-col justify-center gap-8"
      >
        <div className="w-full h-auto bg-stone-800 bg-fixed bg-cover bg-center p-12 md:p-16 flex flex-col items-start justify-center gap-y-8">
          <h1 className="text-5xl md:text-6xl font-light uppercase text-white">
            Apa saja portofolio kami?
          </h1>
          <div className="w-full h-auto flex flex-row gap-x-4 ">
            <p className="text-white text-justify">{contentData["how-can"]}</p>
          </div>
        </div>
        <div
          id="about-us"
          className="w-full h-auto flex flex-row flex-wrap justify-start  bg-stone-800"
        >
          <div className="w-full md:w-1/2 h-96 bg-banner-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-xl sm:text-2xl font-light uppercase text-white p-8 bg-black/50 z-20 hover:before:opacity-100">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-1/2 h-96 bg-about-us-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-xl sm:text-2xl font-light uppercase text-white p-8 bg-black/50 z-20 hover:before:opacity-100">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-1/2 h-96 bg-about-us-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-xl sm:text-2xl font-light uppercase text-white p-8 bg-black/50 z-20 hover:before:opacity-100">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-1/2 h-96 bg-banner-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-xl sm:text-2xl font-light uppercase text-white p-8 bg-black/50 z-20 hover:before:opacity-100">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-1/2 h-96 bg-banner-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-xl sm:text-2xl font-light uppercase text-white p-8 bg-black/50 z-20 hover:before:opacity-100">
              Tunjungan Plaza Lobby
            </h1>
          </div>
          <div className="w-full md:w-1/2 h-96 bg-about-us-image flex items-center justify-center bg-center grayscale hover:grayscale-0 z-30 hover:z-10 transition">
            <h1 className="text-xl sm:text-2xl font-light uppercase text-white p-8 bg-black/50 z-20 hover:before:opacity-100">
              Tunjungan Plaza Lobby
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

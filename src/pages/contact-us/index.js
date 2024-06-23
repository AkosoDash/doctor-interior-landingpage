import { motion } from "framer-motion";
import contentData from "../../datas/content-data.json";
import Footer from "../../components/footer/footer";
const Contact = () => {
  return (
    <div className="h-min-screen w-full">
      <div className="w-full min-h-screen bg-banner-image bg-cover bg-fixed bg-center flex flex-row items-center justify-center relative">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ times: [0, 1], ease: "linear" }}
          className="bg-black/50 w-2/3 h-56 flex flex-row items-center justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white uppercase text-center">
            Kontak Kami
          </h1>
        </motion.div>
      </div>
      <div
        id="about-us"
        className="w-full h-auto bg-stone-800 bg-fixed bg-cover bg-center p-8 md:p-16 flex flex-col justify-center gap-8"
      >
        <h1 className="text-4xl md:text-6xl font-light uppercase text-white text-center">
          Ada yang bisa kami bantu?
        </h1>
        <div className="w-full h-auto flex flex-row gap-x-4">
          <p className="text-white text-justify ">
            Kita sangat bisa untuk berdiskusi tentang projek yang akan datang
            dengan anda. Untuk kebutuhan pekerjaan, ataupun informasi yang
            terkait dengan projek saat ini bisa langsung datang ke kantor kami
            ataupun menghubungi sosial media yang sudah tertera pada website
            ini. Terima kasih!
          </p>
        </div>
        <div
          id="about-us"
          className="w-full h-auto flex flex-row flex-wrap justify-center  bg-stone-800"
        >
          <div className="w-full h-auto flex flex-col sm:flex-row justify-start">
            <div className="w-full sm:w-1/2 h-56 sm:h-96 bg-banner-image bg-center bg-cover"></div>
            <div className="w-full sm:w-1/2 bg-stone-800 h-auto flex flex-row gap-x-4 py-4 sm:ps-4 ps-0">
              <p className="text-white text-justify">
                {contentData["how-can"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
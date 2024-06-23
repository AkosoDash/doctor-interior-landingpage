import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto bg-about-us-image bg-fixed bg-cover bg-center bg-blend-hue py-16 px-8 md:px-0 flex flex-col items-center justify-center gap-y-16">
        <div
          id="contact-us"
          className="w-full md:w-2/3 h-auto bg-black/80 bg-fixed bg-cover bg-center p-8 md:p-16 flex flex-col items-start justify-center gap-y-8"
        >
          <h1 className="text-3xl md:text-6xl font-light uppercase text-white">
            Hubungi Kami!
          </h1>
          <div className="w-full h-auto flex flex-row gap-x-4 ">
            <p className="text-white text-justify w-full sm:w-3/4">
              Kami siap berdiskusi tentang proyek yang akan datang dengan
              antusias, mari wujudkan proyek anda menjadi kenyataan bersama
              kami!
            </p>
          </div>
          <a
            className="text-white font-light uppercase px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black transition"
            href="/contact"
          >
            Kontak Kami
          </a>
        </div>
      </div>
      <div className="w-full p-12  flex flex-col items-center justify-center bg-stone-800 gap-y-8">
        <div className="w-full sm:w-2/3 flex gap-x-8 items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebookF} size="xl" color="#292524" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <FontAwesomeIcon icon={faWhatsapp} size="xl" color="#292524" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} size="xl" color="#292524" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <FontAwesomeIcon icon={faTiktok} size="xl" color="#292524" />
          </div>
        </div>
        <div className="w-2/3 flex gap-x-4 items-center justify-center">
          <p className="w-full text-white text-center">
            2024 Doctor Interior, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

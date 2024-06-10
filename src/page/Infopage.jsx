import React from "react";
import "animate.css";
import KenArok from "../assets/KenArok.jpg";
import KenDedes from "../assets/KenDedes.jpg";
import Semar from "../assets/semar.jpg";
import Hanoman from "../assets/hanoman.png";
import Cepot from "../assets/cepot1.png";

function Infopage() {
  return (
    <div className=" min-h-screen w-full bg-[#fbd875] flex flex-col">
      <div
        data-aos="flip-right"
        className="font-primary mt-24 mx-auto bg-[#feffc7] text-[#04023c] h-fit p-5 rounded-lg text-3xl font-extrabold"
      >
        Informasi Tokoh
      </div>
      <div className="flex  mt-20 mx-auto">
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          class="ml-8 h-fit max-w-md transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 flex z-0"
          src={KenArok}
          alt="image description"
        />
        <div className="flex flex-col ml-7 max-w-xl" data-aos="fade-left">
          <h1 className="font-primary font-bold text-2xl text-[#04023c]">
            Ken Arok Sebagai Raja
          </h1>
          <p className="font-primary text-[#04023c] text-lg">
            Ken Arok awalnya seorang budak di Kerajaan Kediri. Dia jatuh cinta
            dan menikahi Ken Dedes, putri Raja Tunggul Ametung. Dengan bantuan
            Cepot, abdinya, Ken Arok berhasil membunuh Tunggul Ametung dan
            menggulingkan Kerajaan Kediri pada 1222 M. Setelah itu, Ken Arok
            mendirikan Kerajaan Singhasari dengan dirinya sebagai raja pertama.
            Ken Dedes menjadi permaisuri. Dia memperluas wilayah kekuasaan
            Singhasari mencakup sebagian besar Jawa. Namun pada 1227, Ken Arok
            dibunuh oleh pengawalnya sendiri, Anusapati. Kematiannya mengakhiri
            pemerintahannya di Singhasari yang kemudian dilanjutkan oleh
            raja-raja berikutnya. Ken Arok dikenal sebagai pendiri Kerajaan
            Singhasari, cikal bakal Majapahit, dari latar belakang budak menjadi
            raja yang tangguh dan disegani.
          </p>
        </div>
      </div>
      <div className="flex  mt-20 mx-auto">
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          class="ml-8 h-fit max-w-md transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 flex"
          src={KenDedes}
          alt="image description"
        />
        <div className="flex flex-col ml-7 max-w-xl" data-aos="fade-left">
          <h1 className="font-primary font-bold text-2xl text-[#04023c]">
            Ken Dedes Sebagai Ratu
          </h1>
          <p className="font-primary text-[#04023c] text-lg">
            Ken Dedes adalah putri Raja Tunggul Ametung dari Kediri. Dia
            menikahi Ken Arok, seorang budak, yang kemudian membunuh ayahnya dan
            mendirikan Kerajaan Singhasari pada 1222. Ken Dedes menjadi
            permaisuri pertama Singhasari mendampingi Ken Arok sebagai raja.
            Diceritakan sebagai wanita cantik, cerdik, dan berpengaruh dalam
            membangun Singhasari. Ken Dedes menjadi tokoh penting berdirinya
            kerajaan ini setelah menikahi Ken Arok dari status budak.
          </p>
        </div>
      </div>
      <div className="flex  mt-20 mx-auto">
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          class="ml-8 h-fit max-w-md transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 flex"
          src={Semar}
          alt="image description"
        />
        <div className="flex flex-col ml-7 max-w-xl" data-aos="fade-left">
          <h1 className="font-primary font-bold text-2xl text-[#04023c]">
            Semar Sebagai Menteri
          </h1>
          <p className="font-primary text-[#04023c] text-lg">
            Semar adalah tokoh punakawan (abdi) paling dihormati dalam
            pewayangan Jawa. Dianggap penjelmaan dewa dan simbol kesempurnaan
            spiritual. Berpenampilan lucu tapi bijaksana, memberi nasihat pada
            ksatria. Melambangkan kerendahan hati, kebijaksanaan, dan hubungan
            dengan Tuhan. Diagungkan dalam ritual Kejawen sebagai puncak
            spiritual manusia Jawa. Tokoh sentral dalam budaya pewayangan Jawa.
          </p>
        </div>
      </div>
      <div className="flex  mt-20 mx-auto">
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          class="ml-8 h-fit max-w-md transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 flex"
          src={Hanoman}
          alt="image description"
        />
        <div className="flex flex-col ml-7 max-w-xl" data-aos="fade-left">
          <h1 className="font-primary font-bold text-2xl text-[#04023c]">
            Hanoman Sebagai Kuda
          </h1>
          <p className="font-primary text-[#04023c] text-lg">
            Hanoman adalah tokoh kera sakti dalam Ramayana. Panglima pasukan
            kera, membantu Rama melawan Rahwana. Berwajah manusia, kuat, bijak,
            setia. Simbol keberanian, kebijaksanaan, kesetiaan dalam
            mengabdi.Dalam budaya Jawa, Hanoman dihormati sebagai simbol
            ketangguhan, keberanian, dan kebijaksanaan. Perannya sebagai
            panglima pasukan kera menjadikannya tokoh wayang yang populer
            digemari. Kisah dan ajaran kesetiaan Hanoman kerap kali dijadikan
            teladan dalam pertunjukan wayang maupun kehidupan masyarakat Jawa
            sehari-hari.
          </p>
        </div>
      </div>
      <div className="flex  mt-20 mx-auto">
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          class="ml-8 h-80 max-w-md transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 flex"
          src={Cepot}
          alt="image description"
        />
        <div className="flex flex-col ml-80 max-w-xl" data-aos="fade-left">
          <h1 className="font-primary font-bold text-2xl text-[#04023c]">
            Cepot Sebagai Benteng
          </h1>
          <p className="font-primary text-[#04023c] text-lg ">
            Cepot adalah abdi setia dan cerdik yang membantu Ken Arok dan Ken
            Dedes dalam legenda Singhasari. Berperan melarikan Ken Dedes untuk
            menikah Ken Arok. Membantunya menyingkirkan Raja Tunggul Ametung.
            Diangkat jadi pejabat istana setelah Singhasari berdiri. Tokoh
            punakawan jenaka dalam pewayangan yang mendampingi Ken Arok.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Infopage;

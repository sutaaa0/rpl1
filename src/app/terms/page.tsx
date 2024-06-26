import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
function Terms() {
  return (
    <div className="container mx-auto p-6 sm:p-16 shadow-md rounded-lg flex flex-col items-center justify-center h-auto relative">
      <div className="absolute top-1 left-1 sm:top-8 sm:left-8">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link className="text-gray-500" href="/">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
          </li>
          <li className="flex items-center">
            <span className="text-gray-500">Terms</span>
          </li>
        </ol>
      </div>
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600 sm:text-4xl">Syarat dan Ketentuan Layanan</h1>
      <div className="w-full sm:w-[80%] mb-16">
        <p className="mb-4 text-lg">Dengan menggunakan website Kelas RPL 1, Anda setuju untuk mematuhi Syarat dan Ketentuan Layanan berikut ini.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Penggunaan Website</h2>
        <p className="mb-4 text-base sm:text-lg">Anda setuju untuk menggunakan website ini hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Hak Kekayaan Intelektual</h2>
        <p className="mb-4 text-base sm:text-lg">
          Konten yang tersedia di website ini, termasuk foto, teks, dan materi lainnya, dilindungi oleh hak kekayaan intelektual. Anda tidak diperkenankan untuk menggunakan konten tersebut tanpa izin tertulis dari kami.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Perubahan Syarat dan Ketentuan</h2>
        <p className="mb-4 text-base sm:text-lg">Kami dapat memperbarui Syarat dan Ketentuan Layanan ini dari waktu ke waktu. Kami akan memberitahukan Anda tentang perubahan tersebut melalui website kami.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Penafian</h2>
        <p className="mb-4 text-base sm:text-lg">Website ini disediakan &quot;sebagaimana adanya&quot; tanpa jaminan apa pun. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan website ini.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Hubungi Kami</h2>
        <p className="mb-4 text-base sm:text-lg">
          Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan Layanan ini, silakan hubungi kami di{" "}
          <a href="mailto:rpl1@example.com" className="text-blue-500">
            dodisuta0@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;

import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function Privacy() {
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
            <span className="text-gray-500">Privacy</span>
          </li>
        </ol>
      </div>
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600 sm:text-4xl">Kebijakan Privasi</h1>
      <div className="w-full sm:w-[80%] mb-16">
        <p className="mb-4 text-lg">Website Kelas RPL 1 menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi yang Anda berikan kepada kami.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Informasi yang Kami Kumpulkan</h2>
        <p className="mb-4 text-base sm:text-lg">Kami mengumpulkan informasi yang Anda berikan secara sukarela saat menggunakan website kami, seperti nama, email, dan informasi lainnya yang Anda masukkan ke dalam website.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Penggunaan Informasi</h2>
        <p className="mb-4 text-base sm:text-lg">
          Informasi yang kami kumpulkan digunakan untuk tujuan berikut:
          <ul className="list-disc ml-6">
            <li>Menyediakan dan meningkatkan layanan kami.</li>
            <li>Menyesuaikan pengalaman pengguna.</li>
            <li>Berkomunikasi dengan Anda mengenai pembaruan dan informasi lainnya.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Perlindungan Informasi</h2>
        <p className="mb-4 text-base sm:text-lg">Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah atau penggunaan yang tidak sah.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Perubahan Kebijakan Privasi</h2>
        <p className="mb-4 text-base sm:text-lg">Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahukan Anda tentang perubahan tersebut melalui website kami.</p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-500 sm:text-2xl">Hubungi Kami</h2>
        <p className="mb-4 text-base sm:text-lg">
          Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di{" "}
          <a href="mailto:dodisuta0@gmail.com" className="text-blue-500">
            dodisuta0@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;

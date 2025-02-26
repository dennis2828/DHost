import Container from "@/components/container";
import Docs from "@/components/docs/docs";
import DropContainer from "@/components/drop-area/drop-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <nav className="py-2">
        <div className="text-end mb-5">
          <Link target="_blank" href="https://github.com/dennis2828/DHost">
            <Button className="border-none shadow-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Github
            </Button>
          </Link>
        </div>
      </nav>

      <section className="mt-3 mb-28 relative">
        <div className="flex items-center md:justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-globe"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <Link href="/" className="text-[3em] font-bold">
            DHost
          </Link>
        </div>
        <Image
          src="/hero-image.png"
          width={2000}
          height={2000}
          className="w-[1000px] h-[1000px] absolute top-0 -left-[900px] object-cover hidden xl:block animate-pulse"
          priority
          quality={100}
          alt="planet"
        />
        <p className="md:text-center text-softGray tracking-wide">
          <span className="font-bold underline">
            {" "}
            Host images for free with ease!
          </span>{" "}
          Upload your images and get a{" "}
          <span className="border-b-2 border-lightCyan/80 italic">
            shareable link
          </span>{" "}
          instantly. We store them securely on Discord servers while keeping the
          link under our domain for a clean, professional look. No limits, no
          hassle—just fast, reliable image hosting.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
          <Button className="bg-lightCyan hover:bg-lightCyan w-full max-w-[250px] hover:-translate-y-1 transition-all ">
            Start uploading now!
          </Button>
          <Button
            variant={"outline"}
            className="border-lightCyan hover:bg-lightCyan w-full max-w-[250px] hover:-translate-y-1 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-code"
            >
              <path d="M10 12.5 8 15l2 2.5" />
              <path d="m14 12.5 2 2.5-2 2.5" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            </svg>
            Docs
          </Button>
        </div>
      </section>

      <section className="mb-28">
        <div className="flex items-center justify-center">
          <DropContainer />
        </div>
      </section>

      <footer className="flex flex-col items-center gap-3">
        <p className="text-center font-bold text-sm">
          &copy;2025 DHost. All rights reserved.
        </p>
        <Link
          target="_blank"
          href="https://github.com/dennis2828/DHost"
          className="text-sm text-lightCyan font-bold flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-code-xml"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
          <span>by dennis2828</span>
        </Link>
      </footer>
    </Container>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-emerald-950 text-white h-16 flex items-center">
      <Link href="/" className="ml-4 mr-auto flex items-center">
        <div className="w-7 h-7 border-teal-300 rounded-full border-8"></div>
        <div className="w-[8px] h-10 bg-teal-300 ml-1"></div> 
        {/* <div className="relative w-10 h-10 bg-teal-300 after:content-[''] ml-1 after:absolute after:top-0 after:left-1/2 after:w-2/3 after:h-full after:bg-black"></div> */}
        <span className="text-teal-300 font-bold text-2xl">X</span>{" "}
      </Link>

      <p className="ml-4">&#128489; Wiadomości</p>
      <p className="ml-4 text-2xl">&#9825;</p>
      <p className="ml-4">Twoje konto</p>
      <Link href={"/adding"}>
        
      <p className="ml-4 mr-4 font-bold text-emerald-950 border-white hover:cursor-pointer bg-white rounded-lg py-2 px-4 border-4 hover:bg-emerald-950 hover:text-white">
        Dodaj ogłoszenie
      </p>
      </Link>
    </nav>
  );
}

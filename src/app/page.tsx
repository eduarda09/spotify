import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipForward, Repeat,SkipBack, Mic2, LayoutList, Laptop2, Volume, Maximize2} from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (

    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="#" className="flex items-center gap-3 font-semibold text-zinc-200">
              <HomeIcon/>
              Home
            </a>
            <a href="#" className="flex items-center gap-3 font-semibold text-zinc-200">
              <Search/>
              Search
            </a>
            <a href="#" className="flex items-center gap-3 font-semibold text-zinc-200">
              <Library/>
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Despedida</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Kpop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Eu Sei O Que Você Escutou No Verão Passado</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-3">
              <ChevronLeft/>
            </button>
            <button className="rounded-full bg-black/40 p-3">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-bold text-2xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">

              <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/album.jpg" width={88} height={88} alt="Imagem de album"/>
                <strong>AM</strong>
                <button className="w-10 h-10 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-9 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>

              <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/album.jpg" width={88} height={88} alt="Imagem de album"/>
                <strong>AM</strong>
                <button className="w-10 h-10 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-9 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>

              <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/album.jpg" width={88} height={88} alt="Imagem de album"/>
                <strong>AM</strong>
                <button className="w-10 h-10 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-9 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>

              <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/album.jpg" width={88} height={88} alt="Imagem de album"/>
                <strong>AM</strong>
                <button className="w-10 h-10 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-9 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>

              <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/album.jpg" width={88} height={88} alt="Imagem de album"/>
                <strong>AM</strong>
                <button className="w-10 h-10 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-9 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>

              <a href="#" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/album.jpg" width={88} height={88} alt="Imagem de album"/>
                <strong>AM</strong>
                <button className="w-10 h-10 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-9 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
              </a>

          </div>

          <h2 className="font-semibold text-2xl mt-10">Made For Maria Eduarda</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
            <a href="#" className="w-40 group bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10">
              <Image src="/album.jpg" className="w-40" width={88} height={88} alt="capa de album"/>
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-400">Arctic Monkeys, The Weeknd and more</span>
            </a>
          </div>
        </main>
      </div>
    <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/album.jpg" width={56} height={56} alt="capda do album"/>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <strong className="font-normal">R U Mine?</strong>
            <span className="text-xs text-zinc-400">Arctic Monkeys</span>
          </div>
          <Heart className="w-4 h-4 "/>
        </div>
      </div>
      <div className="flex flex-col items-center m-auto">
        <div className="flex items-center gap-6">
          <Shuffle size={20}  className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200"/>
          <button className="w-10 h-10 flex items-center justify-center pl-1  rounded-full bg-white text-black">
            <Play  fill='bg-black'/>
          </button>
          <SkipForward size={20} className="text-zinc-200"/>
          <Repeat size={20} className="text-zinc-200"/>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 h-1 w-40 rounded-full"></div>
          </div>
          <span className="text-sx text-zinc-400 ">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20}/>
        <LayoutList size={20}/>
        <Laptop2 size={20}/>
        <div className="flex items-center gap-2">
          <Volume size={20}/>
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 h-1 w-10 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={18}/>
      </div>

    </footer>
    </div>



  );
}

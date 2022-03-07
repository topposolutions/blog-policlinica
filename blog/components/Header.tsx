import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="mx-auto flex max-w-6xl justify-between bg-blue p-2">
      <div className="flex items-center space-x-5 px-5 xl:px-0">
        <Link href="/">
          <img
            className="w-36 cursor-pointer object-contain"
            src={'/Logo_v1.png'}
            alt="logo"
          />
        </Link>

        <nav className="hidden md:inline-flex">
          <ul className="hidden items-center space-x-5 md:inline-flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            {/* <li className="rounded-full bg-blue px-4 py-1 text-white">
              <a href="#">Contato</a>
            </li> */}
          </ul>
        </nav>
      </div>

      <div className="flex items-center space-x-5 text-blue">
        <h3 className="cursor-pointer">Categorias</h3>
        <h3 className="cursor-pointer rounded-full border border-blue px-4 py-1">
          Contato
        </h3>
      </div>
    </header>
  )
}

export default Header

{
  /* <div className="w-36 cursor-pointer object-contain">
        <Link href="/">
          <img
            className="w-36 cursor-pointer object-contain"
            src={'/Logo_v1.png'}
            alt="logo"
          />
          <Image layout="fill" src={'/Logo_v1.png'} />
        </Link>
      </div> */
}

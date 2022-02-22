import { IoPersonCircle } from 'react-icons/io5';
import Link from 'next/link';

function Menu() {
  return (
    <div className="flex bg-black text-white justify-between p-3 text-xs">
      <div className="flex items-center gap-16">
        <Link href="/">
          <a><img className="h-20" src="https://cdn.flowpodcast.com.br/assets/images/logos/logo-header.png" alt="" /></a>
        </Link>
        <Link href="/">
          <a className="hover:text-yellow-400">HOME</a>
        </Link>
        <Link href="/">
          <a className="hover:text-yellow-400">MERCADO</a>
        </Link>
        <Link href="/">
          <a className="hover:text-yellow-400">EPISÓDIOS</a>
        </Link>
        <Link href="/">
          <a className="hover:text-yellow-400">CONCURSOS</a>
        </Link>
        <Link href="/">
          <a className="hover:text-yellow-400">MEMBROS</a>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">
          <a className="hover:text-yellow-400">Sparks</a>
        </Link>
        <IoPersonCircle size="1.5rem" className="hover:text-yellow-400" />
      </div>
    </div>
  );
}

export default Menu;

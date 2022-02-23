import { FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className="h-24 flex flex-col gap-2 justify-center items-center bg-gray-900 text-white border-t-[1px] border-white">
      <div className="flex gap-3">
        <a className="hover:text-yellow-400" href="/">HOME</a>
        |
        <a className="hover:text-yellow-400" href="/">TERMOS DE USO</a>
        |
        <a className="hover:text-yellow-400" href="/">POLÍTICA DE PRIVACIDADE</a>
        |
        <a className="hover:text-yellow-400" href="/">PATCH NOTES</a>
        |
        <a className="hover:text-yellow-400" href="/">REGRAS PARA CORTES</a>
      </div>
      <div className="flex text-yellow-400 gap-5">
        <FaTwitter className="hover:text-white" />
        <FaYoutube className="hover:text-white" />
        <FaTwitch className="hover:text-white" />
        <FaInstagram className="hover:text-white" />
        <FaFacebook className="hover:text-white" />
      </div>
      <div>
        <span className="text-yellow-400">Contato: </span>
        <span>contato@flowpodcast.com.br</span>
      </div>
    </div>
  );
}

export default Footer;

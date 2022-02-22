import { FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaSpotify, FaAmazon, FaApple, FaDiscord, FaRss } from 'react-icons/fa';
import { Menu, SocialButton } from '../components/shared/index';

function Home() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col justify-center py-5 px-10 text-white items-center gap-5">
        <img className="rounded-md" src="https://cdn.flowpodcast.com.br/assets/images/carousel/banner_sparks.png" alt="" />
        <div className="flex flex-col max-w-screen-lg text-center gap-5">
          <span>
            Flow Podcast é uma conversa descontraída, longa e livre, como um papo de boteco entre amigos. No Flow garantimos um espaço onde o convidado pode desenvolver suas ideias sem qualquer tipo de pauta ou as restrições normais de outras mídias, como agenda política/filosófica.
          </span>
          <div className="flex flex-col gap-5">
            <span className="text-5xl">
              DE SEGUNDA A SEXTA ÀS 19H
            </span>
            <span className="text-gray-600">
              (às vezes o horário muda, quase sempre atrasa)
            </span>
            <span className="text-2xl">
              Ao vivo no Youtube, Twitch e Facebook!
            </span>
            <div className="flex justify-evenly">
              <a className="flex items-center justify-center border border-yellow-400 rounded-md p-1 w-52 h-10 hover:bg-red-600 hover:scale-110 transition-all" type="button">
                <strong>YOUTUBE</strong>
              </a>
              <a className="flex items-center justify-center border border-yellow-400 rounded-md p-1 w-52 h-10 hover:bg-purple-700 hover:scale-110 transition-all" type="button">
                <strong>TWITCH</strong>
              </a>
              <a className="flex items-center justify-center border border-yellow-400 rounded-md p-1 w-52 h-10 hover:bg-indigo-600 hover:scale-110 transition-all" type="button">
                <strong>FACEBOOK</strong>
              </a>
            </div>
            <div className="flex justify-center gap-5">
              <SocialButton>
                <FaTwitter />
              </SocialButton>
              <SocialButton>
                <FaInstagram />
              </SocialButton>
              <SocialButton>
                <FaYoutube />
              </SocialButton>
              <SocialButton>
                <FaTwitch />
              </SocialButton>
              <SocialButton>
                <FaSpotify />
              </SocialButton>
              <SocialButton>
                <FaAmazon />
              </SocialButton>
              <SocialButton>
                <FaApple />
              </SocialButton>
              <SocialButton>
                <FaDiscord />
              </SocialButton>
              <SocialButton>
                <FaRss />
              </SocialButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="w-max p-2 hover:font-semibold hover:bg-yellow-400 hover:text-white">NÃO É UMA ENTREVISTA!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

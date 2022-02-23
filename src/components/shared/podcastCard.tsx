import { FaYoutube, FaSpotify, FaList } from 'react-icons/fa';
import { CardButton } from '.';

function PodcastCard() {
  return (
    <div className="flex flex-col bg-white rounded-lg text-black">
      <img className="p-2 border-2 border-gray-200 rounded-lg" src="https://i3.ytimg.com/vi/qjv2IXt8iRA/maxresdefault.jpg" alt="" />
      <div className="flex flex-col p-5 gap-5">
        <a className="font-bold text-sm" href="/">ROLANDINHO E PHOENIX - Flow Podcast #543</a>
        <a className="text-sm h-24" href="/">Rolandinho e Phoenix vocês já conhecem né.</a>
        <div className="flex flex-col gap-2">
          <CardButton><FaYoutube /><span>Youtube</span></CardButton>
          <CardButton><FaSpotify /><span>Spotify</span></CardButton>
          <CardButton><FaList /><span>Outros</span></CardButton>
        </div>
        <div className="flex justify-between border-t-[2px] border-gray-200">
          <span className="text-sm">1 de fevereiro de 2022</span>
          <a className="text-yellow-600" href="">Comentar `{'>>'}`</a>
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;

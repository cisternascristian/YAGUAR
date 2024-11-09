type PlayerProps = {
    src: string;
  }
  
  export default function YouTubePlayer(props: PlayerProps) {
    return (  
        <iframe id="video" style={{width: '100%', aspectRatio: '16 / 9'}} src={`https://www.youtube.com/embed/${props.src}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
    );
  }
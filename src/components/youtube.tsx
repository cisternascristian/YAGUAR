type PlayerProps = {
    src: string;
  }
  
  export default function YouTubePlayer(props: PlayerProps) {
    return (
        <iframe src={`https://www.youtube.com/embed/${props.src}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );
  }
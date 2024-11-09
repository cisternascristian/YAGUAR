type PlayerProps = {
    src: string;
  }

  export default function VideoPlayer(props: PlayerProps) {
    return (
      <iframe style={{width: '100%', aspectRatio: '16 / 9'}} src={props.src} loading="lazy" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen></iframe>
    );
  }
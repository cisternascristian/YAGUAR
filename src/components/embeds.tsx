type PlayerProps = {
    src: string;
  }

  export default function VideoPlayer(props: PlayerProps) {
    return (
      <iframe src={props.src} loading="lazy" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen></iframe>
    );
  }
import * as React from "react";
import videojs, { VideoJsPlayer } from "video.js";
import "video.js/dist/video-js.css";

interface IProps {
  id: string;
  uri: string;
  poster?: string;
  aspectRatio?: string;
  seekTo?: number;
  isLive?: boolean;
}
export default class VideoPlayer extends React.Component<IProps> {
  player?: VideoJsPlayer;

  componentDidMount() {
    const allProps = {
      aspectRatio: this.props.aspectRatio ? this.props.aspectRatio : "16:9",
      poster: this.props.poster,
      autoplay: this.props.isLive ? "muted" : false,
      muted: this.props.isLive ? undefined : true,
      bigPlayButton: true,
      controls: true,
      bigPlayButtonCentered: true,
      fluid: true,
      liveui: false,
      hideControls: [],
      preload: "auto",
    };
    this.player = videojs(
      document.getElementById(`${this.props.id}`) as HTMLElement,
      allProps,
      () => {
        if (!this.props.isLive) {
          this.player!.on("loadedmetadata", () => {
            if (this.props.seekTo) {
              this.player!.currentTime(this.props.seekTo);
            }
            this.player!.play();
          });
        }
      }
    );

    if (this.props.isLive) {
      this.player.on("error", () => {
        window.location.reload(true);
      });
    }

    this.player.src(this.props.uri);
  }

  componentWillUnmount() {
    if (this.player) this.player.dispose();
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            style={{ objectFit: this.props.isLive ? "cover" : "inherit" }}
            id={this.props.id}
            className="video-js vjs-sublime-skin vjs-big-play-centered"
            playsInline={true}
          />
        </div>
      </div>
    );
  }
}

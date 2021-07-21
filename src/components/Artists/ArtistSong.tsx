import { Avatar, Text } from "@chakra-ui/react";
import React from "react";
import { MusicTrack } from "../../types";
import {
  ListItem,
  ListItemLeft,
  ListItemSubTitle,
  ListItemTitle,
} from "../ListItem";
import { ABlank } from "../ABlank";

interface IState {
  isPlaying: boolean;
}

export class ArtistSong extends React.Component<{ song: MusicTrack }, IState> {
  static allAudios: ArtistSong[] = [];
  selfId?: number;

  audio?: HTMLAudioElement;

  state = {
    isPlaying: false,
  };

  componentDidMount(): void {
    this.selfId = ArtistSong.allAudios.push(this);
  }

  componentWillUnmount(): void {
    if (this.selfId) {
      ArtistSong.allAudios.splice(this.selfId, 1);
    }
  }

  pause = () => {
    if (this.audio) {
      this.audio.pause();
    }
    this.setState({ isPlaying: false });
  };

  play = () => {
    if (this.audio) {
      ArtistSong.allAudios.forEach((audio) => audio.pause());
      this.audio.play();
    }
    this.setState({ isPlaying: true });
  };

  togglePlaying = () => {
    if (this.audio) {
      if (this.state.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    }
  };

  render() {
    const { song, ...other } = this.props;
    const { isPlaying } = this.state;
    const albumImage = song.albumImages[song.albumImages.length - 1];
    const albumUrl = albumImage.url.replace("{w}x{h}", `112x112`);
    return (
      <ABlank
        onClick={song.preview_url ? this.togglePlaying : (null as any)}
        href="#togglePlayTrack"
        {...other}
      >
        <audio
          ref={(ref: any) => {
            this.audio = ref;
          }}
        >
          <source src={song.preview_url} type="audio/mp3" />
          <p>
            Your browser doesn&apos;t support HTML5 audio. Here is a
            <a href={song.preview_url}>link to the audio</a> instead.
          </p>
        </audio>
        <ListItem py={3}>
          <ListItemLeft
            alignItems="center"
            width="126px"
            justifyContent="space-between"
          >
            {!isPlaying && song.preview_url && (
              <Text width="20px" color="inherit">
                &#9658;
              </Text>
            )}
            {isPlaying && song.preview_url && (
              <Text width="20px" color="inherit" fontWeight="bold">
                &#9724;
              </Text>
            )}
            {!song.preview_url && (
              <Text width="20px" fontWeight="bold">
                &nbsp;
              </Text>
            )}
            <Avatar
              state={isPlaying ? "active" : undefined}
              src={albumUrl}
              size="lg"
              borderRadius="md"
            />
            <Text
              color={song.preview_url ? "inherit" : "grey"}
              width="20px"
              fontWeight="semibold"
            >
              {song.trackNumber}
            </Text>
          </ListItemLeft>
          <ListItemTitle
            color={song.preview_url ? "inherit" : "grey"}
            fontWeight={isPlaying ? "bold" : "semibold"}
          >
            {song.name}
          </ListItemTitle>
          <ListItemSubTitle
            color={song.preview_url ? "inherit" : "grey"}
            fontWeight={isPlaying ? "600" : 400}
          >
            {song.albumName}
          </ListItemSubTitle>
        </ListItem>
      </ABlank>
    );
  }
}

import { Api } from "../Api";
import { Artist, ArtistId } from "../../types";

class Artists {
  featured = async () => {
    const artists = await Api.get("/artists/featured");
    return artists.map(this.parseArtist);
  };

  getSlugs = async () => {
    return await Api.get("/artists/slugs");
  };

  get = async (id: ArtistId) => {
    const artist = await Api.get(`/artists/${id}`);
    return this.parseArtist(artist);
  };

  parseArtist = (artist: Artist) => {
    if (artist.objectID) {
      artist.id = artist.objectID;
    }
    if (artist.coverPhoto) {
      artist.coverPhoto.loc = `${process.env.NEXT_PUBLIC_CLOUDINARY_API}/${artist.coverPhoto.loc}.jpg`;
    } else {
      artist.coverPhoto = {
        loc: `/static/img/icons/no-cover-photo.png`,
        type: "",
      };
    }
    if (artist.profilePic) {
      artist.profilePic.loc = `${process.env.NEXT_PUBLIC_CLOUDINARY_API}/${artist.profilePic.loc}.jpg`;
    } else {
      artist.profilePic = { loc: `/static/img/icons/no-avatar.png`, type: "" };
    }
    return artist;
  };
}

export const ArtistService = new Artists();

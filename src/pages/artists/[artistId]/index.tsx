import {GetStaticPaths} from "next";
import {ArtistService} from "../../../services/ArtistService";


export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await ArtistService.getSlugs();
  return {
    fallback: 'blocking',
    paths: slugs
  };
};
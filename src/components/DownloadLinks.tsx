import {Box, Img, Stack} from "@chakra-ui/react";
import NextImage from "next/image";
import appleDownload from "../../public/img/apple/download.png";
import appleDarkDownload from "../../public/img/apple/download-dark.png";
import androidDownload from "../../public/img/google/download.png";
import * as React from "react";

export const DownloadLinks = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <Stack spacing={[1, 4]}
           direction={["column", "row"]}
     >
      <Box>
        <a href={process.env.NEXT_PUBLIC_ITUNES_APP_LINK}>
          {isDark ? (
            <NextImage alt="Download on app store" src={appleDarkDownload} />
          ) : (
            <Img height="56px" alt="Download on app store" src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1627249736/website/background-images/download-on-app-store.svg`} />
          )}
        </a>
      </Box>
      <Box>
        <a href={process.env.NEXT_PUBLIC_ANDROID_APP_LINK}>
          <Img height="56px" alt="Download on play store" src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1627249932/website/background-images/google-play-badge.svg`} />
        </a>
      </Box>
    </Stack>
  );
};

import { Box, HStack } from "@chakra-ui/react";
import NextImage from "next/image";
import appleDownload from "../../public/img/apple/download.png";
import appleDarkDownload from "../../public/img/apple/download-dark.png";
import androidDownload from "../../public/img/google/download.png";
import * as React from "react";

export const DownloadLinks = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <HStack spacing={4}>
      <Box>
        <a href={process.env.NEXT_PUBLIC_ITUNES_APP_LINK}>
          {isDark ? (
            <NextImage alt="Download on app store" src={appleDarkDownload} />
          ) : (
            <NextImage alt="Download on app store" src={appleDownload} />
          )}
        </a>
      </Box>
      <Box>
        <a href={process.env.NEXT_PUBLIC_ANDROID_APP_LINK}>
          <NextImage alt="Download on play store" src={androidDownload} />
        </a>
      </Box>
    </HStack>
  );
};

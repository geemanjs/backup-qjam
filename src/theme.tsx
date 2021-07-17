import {extendTheme} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'

const fonts = {
  body: "Lato, system-ui, sans-serif",
  heading: "futura-pt, sans-serif",
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({


  colors: {
    green: {
      100: '#DBFADD',
      200: '#AEF4B3',
      300: '#72E479',
      400: '#56CD5E',
      500: '#60B566',
      600: '#3F8D44',
      700: '#227728',
      800: '#1E5722',
      900: '#162C19',
    },
    teal: {
      100: '#D6FAF6',
      200: '#AEEFE7',
      300: '#80E0D5',
      400: '#48CBBC',
      500: '#32857B',
      600: '#',
      700: '#1E5750',
      800: '#',
      900: '#1E433F',
    },
    neutral: {
      100: '#F0F6F9',
      200: '#D7E7EF',
      300: '#BED8E4',
      400: '#B0CFDE',
      500: '#9AC3D6',
      600: '#629CB7',
      700: '#496D7E',
      800: '#364A54',
      900: '#2A353A',
    },
    pink: {
      100: '#FEEBF6',
      200: '#FBCBE7',
      300: '#F6ACD7',
      400: '#F08AC5',
      500: '#EB37A0',
      600: '#DF168B',
      700: '#BA1274',
      800: '#94145F',
      900: '#700E47',
    },
    blue: {
      100: '#E2F9FD',
      200: '#C2F3FA',
      300: '#9EEBF5',
      400: '#7BE1EF',
      500: '#6CD4E4',
      600: '#4EC7DA',
      700: '#30B1C5',
      800: '#26707B',
      900: '#26707B',
    },
    red: {
      100: '#FFF0F0',
      200: '#FFC7C8',
      300: '#FF9496',
      400: '#FF7578',
      500: '#FF5C5F',
      600: '#FA1418',
      700: '#C3090C',
      800: '#9A090B',
      900: '#840B0D',
    },
    black: '#16161D',
    muted: '#629CB7'
  },
  fonts,
  fontWeights: {
    bold: 600
  },
  breakpoints,
})

export default theme

'use client';

import * as React from 'react';


import { ChakraProvider } from '@chakra-ui/react';
import { ThemeConfig, extendTheme, ChakraProviderProps } from '@chakra-ui/react';

import customTheme from './chakra-ui/theme';

const theme = extendTheme(customTheme);

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

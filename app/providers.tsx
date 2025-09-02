'use client';

import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({}); // Tema özelleştirme yapmayacaksan boş kalabilir

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

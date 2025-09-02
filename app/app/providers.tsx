'use client';

import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { ReactNode } from 'react';

// İsteğe bağlı tema ayarı, şimdilik boş bırakcam
const theme = extendTheme({});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

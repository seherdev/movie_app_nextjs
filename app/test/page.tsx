'use client';

import { Box, Button, Heading, Text } from '@chakra-ui/react';

export default function TestPage() {
  return (
    <Box p={10} textAlign="center">
      <Heading mb={4}>🎬 Chakra UI Test Sayfası</Heading>
      <Text fontSize="lg" mb={6}>
        Bu sayfa Chakra UI&#39;nin doğru çalışıp çalışmadığını test etmek için hazırlandı.
      </Text>
      <Button colorScheme="teal" size="lg">
        Butona Tıkla
      </Button>
    </Box>
  );
}

import { Container } from '@/components/core/Container'
import { Navbar } from '@/components/core/navbar'
import { LafdaSection } from '@/components/landing/lafda-section'

import React from 'react'

export default function page() {
  return (
    <Container>
      <Navbar />
      <LafdaSection />
    </Container>
  )
}

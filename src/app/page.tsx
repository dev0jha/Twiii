import React from "react";
import { Container } from "@/components/core/Container";
import { Navbar } from "@/components/core/navbar";
import { LafdaSection } from "@/components/landing/lafda-section";

export default function page() {
  return (
    <Container>
      <Navbar />
      <LafdaSection />
    </Container>
  );
}

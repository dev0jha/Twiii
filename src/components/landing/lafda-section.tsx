import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button} from "@/components/ui/button";

import { mockLafdaData } from "@/mock-data/mock-lafda-data";

import { LafdaCard } from "@/components/lafda/lafda-card";
import { SectionSubheading } from "./section-subheading";

function LafdaSection() {
  const visibleLafda = mockLafdaData.slice(0, 4);
  const hasMore = mockLafdaData.length > 4;
  return (
    <section className="font-poppins w-full px-4 py-12">
      <SectionSubheading
        title="Trending E-lafda"
        subtitle="Discover the latest and most popular e-lafda on the platform."
      />

      <div
        className={cn(
          "mt-8 grid gap-6",
          "grid-cols-1",
          "md:grid-cols-2",
          "lg:grid-cols-2",
          "xl:grid-cols-2"
        )}
      >
        {visibleLafda.map((card: any) => (
          <LafdaCard key={card.id} data={card} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Link href="/lafda">
            <Button variant="outline">Show More E-lafda</Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export { LafdaSection };
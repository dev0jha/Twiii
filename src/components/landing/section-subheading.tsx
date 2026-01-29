import React from "react";

interface SectionSubheadingProps {
  title: string;
  subtitle: string;
}

function SectionSubheading({ title, subtitle }: SectionSubheadingProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </div>
  );
}

export { SectionSubheading };

"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowFatDownIcon,
  ArrowFatUpIcon,
  EyeIcon,
  FireIcon,
} from "@phosphor-icons/react";

import { Badge, Button, Card, cn } from "@/components/ui";

export interface LafdaCardData {
  id: string;
  title: string;
  description: string;
  votes: number;
  views: number;
  tags: string[];
  trendingRank?: number;
  userVote?: "up" | "down" | null;
}

interface LafdaCardProps {
  className?: string;
  data: LafdaCardData;
}

function LafdaCard({ className, data }: LafdaCardProps) {
  const [voteCount, setVoteCount] = useState<number>(data.votes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(
    data.userVote ?? null
  );

  const visibleTags = data.tags.slice(0, 2);
  const remainingTags = Math.max(0, data.tags.length - 2);

  const handleVote = (voteType: "up" | "down") => {
    if (userVote === voteType) {
      setVoteCount((prev) => prev + (voteType === "up" ? -1 : 1));
      setUserVote(null);
      return;
    }

    if (userVote === null) {
      setVoteCount((prev) => prev + (voteType === "up" ? 1 : -1));
      setUserVote(voteType);
      return;
    }

    setVoteCount((prev) => prev + (voteType === "up" ? 2 : -2));
    setUserVote(voteType);
  };

  const formatCount = (count: number) => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="flex min-h-70 flex-col rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          {data.trendingRank && (
            <div className="flex items-center gap-2">
              <FireIcon className="text-primary size-4" weight="bold" />
              <span className="text-primary text-xs font-semibold tracking-tight">
                #{data.trendingRank} Trending Now
              </span>
            </div>
          )}

          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <EyeIcon className="size-4" weight="bold" />
            <span className="tracking-tight">
              {formatCount(data.views)} views
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/lafda/${data.id}`}>
          <h3 className="mt-4 line-clamp-2 min-h-12 text-xl leading-tight font-semibold tracking-tight">
            {data.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground mt-3 line-clamp-3 flex-1 text-sm leading-relaxed">
          {data.description}
        </p>

        {/* Footer */}
        <div className="border-border/60 bg-muted/30 -m-6 mt-4 rounded-b-2xl border-t px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              {visibleTags.map((tag, i) => (
                <Badge key={`${tag}-${i}`} variant="outline">
                  {tag}
                </Badge>
              ))}

              {remainingTags > 0 && (
                <Badge variant="outline">+{remainingTags} more</Badge>
              )}
            </div>

            {/* Votes */}
            <div className="border-border bg-card flex items-center overflow-hidden rounded-md border">
              <Button
                variant="ghost"
                size="icon"
                className="h-auto p-1.5 hover:bg-transparent"
                onClick={() => handleVote("up")}
              >
                <ArrowFatUpIcon
                  className={cn(
                    "size-4 transition-colors",
                    userVote === "up"
                      ? "text-green-500"
                      : "text-muted-foreground"
                  )}
                  weight={userVote === "up" ? "fill" : "bold"}
                />
              </Button>

              <div className="min-w-8 px-2 py-1 text-center">
                <span
                  className={cn(
                    "text-xs font-semibold tracking-tight",
                    voteCount > 0 ? "text-primary" : "",
                    voteCount < 0 ? "text-destructive" : "",
                    voteCount === 0 ? "text-muted-foreground" : ""
                  )}
                >
                  {formatCount(voteCount)}
                </span>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-auto p-1.5 hover:bg-transparent"
                onClick={() => handleVote("down")}
              >
                <ArrowFatDownIcon
                  className={cn(
                    "size-4 transition-colors",
                    userVote === "down"
                      ? "text-red-500"
                      : "text-muted-foreground"
                  )}
                  weight={userVote === "down" ? "fill" : "bold"}
                />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export { LafdaCard };

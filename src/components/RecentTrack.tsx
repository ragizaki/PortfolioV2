"use client";

import { useSpotifyTopTrack } from "@/hooks/useSpotifyTopTrack";
import Link from "next/link";

export default function RecentTrack() {
  const recentTrack = useSpotifyTopTrack();
  if (recentTrack) {
    return (
      <Link href={recentTrack?.href as string} target="_blank">
        <p>{recentTrack?.artist}</p>
      </Link>
    );
  }
  return <p>Waiting</p>;
}

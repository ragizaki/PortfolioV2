"use client";

import { useEffect, useState } from "react";
import { getTopTracks } from "@/lib/spotify";

interface Track {
  name: string;
  artist: string;
  image: string;
  href: string;
}

export const useSpotifyTopTrack = () => {
  const [recentTrack, setRecentTrack] = useState<Track | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getTopTracks();
        const { items } = await res.json();
        console.log(res);
        const track = items[0].track;
        setRecentTrack({
          name: track.name,
          artist: track.artists[0].name,
          image: track.album.images[0].url,
          href: track.external_urls.spotify,
        });
      } catch (error) {
        console.error("Unable to fetch top tracks", error);
      }
    })();
  }, []);

  return recentTrack;
};

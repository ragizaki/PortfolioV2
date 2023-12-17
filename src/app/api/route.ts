import { getTopTracks } from "@/lib/spotify";

export async function GET() {
  const response = await getTopTracks();
  const data = await response.json();

  return Response.json({ data });
}

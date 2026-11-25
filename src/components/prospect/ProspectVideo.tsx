import type { ProspectVideoData } from "@/content/prospect-pages";

export default function ProspectVideo({ video, inHero = false }: { video?: ProspectVideoData; inHero?: boolean }) {
  if (!video) return null;
  const player = <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.heading || "Personal introduction"}>
    <source src={video.src} type="video/mp4" />
    Your browser does not support video playback.
  </video>;
  if (inHero) return <div className="client-proposal-hero-video" id="introduction" aria-label="Personal video introduction">
    {player}
    {video.caption && <p className="client-proposal-hero-video-caption">{video.caption}</p>}
  </div>;
  return <section className="proposal-video-section" id="introduction" aria-label="Personal introduction">
    <div className="proposal-video-wrap">
      <h2>{video.heading || "A personal introduction"}</h2>
      {video.caption && <p>{video.caption}</p>}
      {player}
    </div>
  </section>;
}

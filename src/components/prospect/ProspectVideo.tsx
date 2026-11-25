import type { ProspectVideoData } from "@/content/prospect-pages";
export default function ProspectVideo({ video }: { video?: ProspectVideoData }) {
  if (!video) return null;
  return <section className="proposal-video-section" id="introduction" aria-label="Personal introduction">
    <div className="proposal-video-wrap">
      <h2>{video.heading || "A personal introduction"}</h2>
      {video.caption && <p>{video.caption}</p>}
      <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.heading || "Personal introduction"}>
        <source src={video.src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </div>
  </section>;
}

"use client";

import { useRef } from "react";

const videos = [
  {
    src: "/videos/recurso-01.mp4",
    title: "Participar a su ritmo",
    description: "Una escena breve de juego y participación en el aula.",
    duration: "0:07",
  },
  {
    src: "/videos/recurso-02.mp4",
    title: "Movimiento y juego",
    description: "Una actividad de movimiento dentro de un espacio de aprendizaje.",
    duration: "0:15",
  },
];

export function ResourceVideos() {
  const players = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <section className="resource-videos" id="videos" aria-labelledby="resource-videos-title">
      <div className="resource-videos-heading">
        <span className="therapy-gallery-kicker">Videos de actividades</span>
        <h2 id="resource-videos-title">Aprender también es moverse</h2>
        <p>Dos momentos para descubrir distintas formas de participar y aprender.</p>
      </div>
      <div className="resource-video-grid">
        {videos.map((video, index) => (
          <article className="resource-video-card" key={video.src}>
            <div className="resource-video-frame">
              <video
                ref={(element) => { players.current[index] = element; }}
                src={video.src}
                controls
                playsInline
                preload="metadata"
                aria-label={`${video.title}, duración ${video.duration}`}
                onPlay={() => players.current.forEach((player, playerIndex) => {
                  if (playerIndex !== index) player?.pause();
                })}
              >
                Tu navegador no puede reproducir este video.
              </video>
            </div>
            <div className="resource-video-copy">
              <span>{video.duration}</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

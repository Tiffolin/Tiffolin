import React from "react";

/* ========= VIDEO DATA ========= */

const youtubeVideos = [
  "Y18WKrJFrvA",
  "KNK9yy9Mmoc?si=k7w8UbmFKxKwoNud",
  // add more YouTube IDs here
];

const tiktokVideos = [
  "7394665640654605574",
  "7390618219377216774",
  "7345571651255291142",



  // add more TikTok IDs here
];

/* ========= COMPONENT ========= */

const Videos = () => {
  return (
    
    <div id="projects" className="sections">
      <p className="pageTitle">Projects : Video Editing</p>

      {/* ===== YOUTUBE ===== */}
      <section className="videos">
        <div className="video-section">
          <h3>YouTube</h3>
          <p>
            Long-form video edits created for a YouTube creator, focusing on
            pacing, structure, and storytelling.
          </p>

          <div className="video-grid">
            {youtubeVideos.map((id) => (
              <iframe
                key={id}
                src={`https://www.youtube.com/embed/${id}`}
                title={`YouTube ${id}`}
                loading="lazy"
                frameBorder="0"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIKTOK ===== */}
      <section className="videos">
        <div className="video-section">
          <h3>TikTok</h3>
          <p>
            Short-form edits for TikTok, optimized for rhythm, hooks, and visual
            flow.
          </p>

          <div className="video-grid">
            {tiktokVideos.map((id) => (
              <div key={id} className="tiktok-wrapper">
              <iframe
                key={id}
                src={`https://www.tiktok.com/embed/${id}`}
                title={`TikTok ${id}`}
                loading="lazy"
                frameBorder="0"
                allowFullScreen
              />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;

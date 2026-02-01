import React from "react";
import "../style.css";

const Videos = () => {
  return (

    <div id="projects" className="row justify-content-md-center sections">        
    <p className="pageTitle col-12">Projects : Video Editing</p>
    
    <section className="videos ProjWrapper">
 <section className="videos ProjWrapper">
      {/* YouTube Section */}
      <div className="video-section">
        <h3 className = "pageTitle">YouTube Video Editing</h3>
         <p className="info col-12 aboutinfo">
          Long-form video edits created for a YouTube creator, including pacing,
          structure, and polish for longer narratives.
        </p>

        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
            title="YouTube Video 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
            title="YouTube Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
    
      {/* TikTok Section */}
      <div className="video-section">
        <h3 className = "pageTitle">TikTok Video Editing</h3>
         <p className="info col-12 aboutinfo">
          Short-form video edits created for my own TikTok channel, focusing on
          pacing, rhythm, and visual storytelling.
        </p>

        <div className="video-grid">
          <iframe
            src="https://www.tiktok.com/embed/YOUR_TIKTOK_VIDEO_ID"
            title="TikTok Video 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.tiktok.com/embed/YOUR_TIKTOK_VIDEO_ID"
            title="TikTok Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </section>
      
     
    </div>
  );
};



export default Videos;


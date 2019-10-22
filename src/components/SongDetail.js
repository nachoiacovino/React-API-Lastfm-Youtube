import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import youtube from "../apis/youtube";
import "./SongList.css";

/* const youtubeAPI = async term => {
  const response = await youtube.get("/search", {
    params: {
      q: song.name
    }
  });

  this.setState({
    song: response.data.items,
    selectedSong: response.data.items[0]
  });
}; */

const SongDetail2 = ({ song }) => {
  const [youtubeResponse, setYoutubeResponse] = useState([]);

  useEffect(
    _ => {
      if (song) {
        async function fetchData() {
          const response = await youtube.get("/search", {
            params: {
              q: `${song.artist.name} ${song.name}`
            }
          });
          setYoutubeResponse(response.data.items[0].id.videoId);
        }
        fetchData();
      }
    },
    [song]
  );

  const youtubeURL = `https://www.youtube.com/embed/${youtubeResponse}?autoplay=1`;
  if (!song) return <div></div>;
  return (
    <div className="scroll-follow">
      <p>
        <h1>{song.artist.name} - {song.name}</h1>
      </p>
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          src={youtubeURL}
          title="video-player"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail2);

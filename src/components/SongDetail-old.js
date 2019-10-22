import React, { useState } from "react";
import { connect } from "react-redux";
import youtube from "../apis/youtube";

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

const SongDetail = ({ song }) => {
  const [youtubeTerm, setYoutubeTerm] = useState(0 );

  console.log("youtube", youtubeTerm);
  const youtubeURL = `https://www.youtube.com/embed/`;

  if (!song) return <div>Please select a song.</div>;
  return (
    <div>
      <p>
        <strong>Title:</strong> {song.name}
        <br />
        <strong>Artist:</strong> {song.artist.name}
      </p>
      <div>
        <iframe src={youtubeURL} title="video-player"></iframe>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import lastfm from "../apis/lastfm";
import "./SongList.css";

class SongList extends React.Component {
  state = { tracks: [] };

  componentDidMount = async term => {
    const response = await lastfm.get("/?method=geo.gettoptracks", {});
    this.setState({ tracks: response.data.tracks.track });
  };

  renderList = _ => {
    console.log(333, this.state.tracks);

    return this.state.tracks.map(track => {
      return (
        <li
          onClick={_ => this.props.selectSong(track)}
          className="item content list-of-songs"
          key={track.name}
        >
          <p style={{ marginLeft: "10px" }}>
            &nbsp; {track.name} - {track.artist.name}
          </p>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ol className="ui divided list">{this.renderList()}</ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

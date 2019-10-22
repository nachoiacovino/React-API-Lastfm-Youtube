import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
/* import BillboardTest from "./BillboardTest"; */

class App extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "20px" }} className="ui container grid">
        {/*         <BillboardTest /> */}
        <div className="ui row">
          <div className="column six wide">
            <SongList />
          </div>
          <div className="column ten wide">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

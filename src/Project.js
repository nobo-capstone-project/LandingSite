import React, { Component } from 'react';
import Gallery from "react-photo-gallery";

class Project extends Component {
  render() {
    return (
      <div>
        <div style={Style.space}>
          <div className="container">
            <div>
              <h2 style={Style.headText}>TravelEasy</h2>
              <p style={Style.headText}>TravelEasy provides a efficient solution for tourists to explore
              a new destination. Users are able to search routes basic on their current location or kew words.
              Within each route, the app elaborately list every stop and its description. Users also can view
              comments and votes for each route in order to choose a best fit route. Beside that, we aim to
              develop a collaborative community, that users can edit and post new routes to the app.
               </p>
              <div style={Style.center}>
                <a href="https://github.com/nobo-capstone-project/TravelEasy">GitHub Repository</a>
              </div>
            </div>
          </div>
        </div>
        <div style={Style.bgc}>
          <div className="container">
            <h2 style={Style.headText}>Live Prototype</h2>
            <div style={Style.gallery}>
              <iframe width="476" height="1000" src="//invis.io/DMRNWHJ7F5E" frameborder="0" allowfullscreen></iframe>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

const Style = {
  headText: {
    textAlign: "center",
    paddingTop: "10px"
  },

  bgc: {
    backgroundColor: "#414154",
    paddingBottom: "10px"
  },
  space: {
    paddingBottom: "20px"
  },
  gallery: {
    display: "flex",
    justifyContent: "center"
  },
  center: {
    textAlign: "center",
    width: "100%"
  }
};


export default Project;

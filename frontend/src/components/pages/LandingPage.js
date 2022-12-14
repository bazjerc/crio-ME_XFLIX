import React from "react";

import Dashboard from "../Dashboard";

const LandingPage = function (props) {
  return (
    <React.Fragment>
      <Dashboard videoList={props.videoList}></Dashboard>
    </React.Fragment>
  );
};

export default LandingPage;

// set groups and genres via form
// keep to state for each  filter and search then build the url paramaeter programatacly based on state (use reducer?)
// make everything sipme because app is simple!!! Dont over complicate
// make button form a list of buttons wrapped in a form (three forms, one for each)
// make upload modal a form and submit make a post request and somehow force state change on videoList
// configure header component with props
// make footer with your profile login info and stats
// pusti stil make functionality done potem stil (mogoče theming) -> ENO PO ENO STVAR SE OSREDOTOČI NE SKAČI! (onptimizacije tudi kasneje eno po eno (npr. tu uporabi useCallback...))
// inside video player compenent make call to youtbe api and fetch the highest rated commend and display it underneath
// prvo kaj implementiraj protem implemetiraj potem kak implementiraj
// make pointer events none na thumbnail
// vse mi je jasno
// Emotion je simple (write styles with javascript)!!!

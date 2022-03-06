import "../App.css";
import Spacer from "../components/Spacer";

function Landing() {
  return (
    <div id="content">
      <div style={{ marginTop: "15%", marginLeft: "10%" }}>
        <p id="heading">
          taskr.live is
          <br />
          coming soon!
        </p>
        <Spacer height={37} />
        <p id="subheading">stay tuned for more updates</p>
      </div>
    </div>
  );
}

export default Landing;

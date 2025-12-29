import About from "./components/About";
import Social from "./components/Social";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Description from "./components/Description";
function App() {
  return (
    <div className="container">
      <About />
      <Social
        color={"#0984e3"}
        Icon={<FaLinkedin color="white" size={30} />}
        turnLeft={true}
      />
      <Social
        color={"#636e72"}
        Icon={<FaGithub color="white" size={30} />}
        turnLeft={false}
      />
      <Social
        color={"#00b894"}
        Icon={<FaWhatsapp color="white" size={30} />}
        turnLeft={true}
      />
      <Social
        color={"white"}
        Icon={<SiGmail color="red" size={30} />}
        turnLeft={false}
      />
      <Description />
    </div>
  );
}

export default App;

import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import appStore from "../../../assets/img/app-store.svg";
import playStore from "../../../assets/img/play-store.svg";
import windowsStore from "../../../assets/img/windows-store.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <ul type="none" className="footerUl">
        <li>Home</li> |<li>Terms and conditions</li> |<li>Privacy policy</li> |
        <li>Collection statement</li> |<li>Help</li> |<li>Manage acount</li>
      </ul>

      <p>Copyright © DEMO Streaming. All rights reserved</p>
      <div className="mediaContainer">
        <div className="socialNetsContainer">
          <FacebookIcon className="socialNetsIcon" />
          <TwitterIcon className="socialNetsIcon"/>
          <InstagramIcon className="socialNetsIcon"/>
        </div>
        <div className="storesContainer">
          <img src={appStore} alt="app Store Image" />
          <img src={playStore} alt="play store Image" />
          <img
            src={windowsStore}
            alt=" Windows store imge"
            className="windowsStoreImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

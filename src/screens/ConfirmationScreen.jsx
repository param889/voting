import Confirmation from "../components/Confirmation";
import Footer from "../components/Footer";
import LogoandTitle from "../components/LogoandTitle";

function ConfirmationScreen(props) {
  return (
    <div>
            <LogoandTitle/>

      <Confirmation
        person={props.person}
        task={props.task}
        activity={props.activity}
      />
            <Footer/>

    </div>
  );
}

export default ConfirmationScreen;

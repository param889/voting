import Button from '../components/Button';
import Features from '../components/Features';

import HomePic from '../components/HomePic';
import Intro from '../components/Intro';

import Footer from "../components/Footer"
import LogoandTitle from '../components/LogoandTitle';

function HomeScreen() {
  return (
    <div>
      <LogoandTitle/>
      <Intro />
      <HomePic />
      <div className="flex">
        <Button
          content="Login as Organiser"
          color="yellow"
        />
        <Button
          content="Login as Voter"
          color="yellow"
        />
      </div>
      <Features />
      <Footer/>
    </div>
  );
}

export default HomeScreen;

import CandidatesList from "../components/CandidatesList";
import Footer from "../components/Footer";
import LogoandTitle from "../components/LogoandTitle";

function VotingScreen() {
  return (
    <div className="flex flex-col">
      <LogoandTitle />

      <CandidatesList
        results={false}
        greeting="Hello Voter"
        instruction=" Start Voting to your preferred candidate"
      />
      <Footer />
    </div>
  );
}

export default VotingScreen;

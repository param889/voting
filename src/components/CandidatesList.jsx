import votingpic from "../pics/voting.png";

function CandidatesList(props) {
  return (
    <div className=" w-5/6 ml-10 ">
      <div className="  mt-2 ">
        <h1 className="text-4xl font-sans mt-10 ml-20 intro">
          {props.greeting}
        </h1>
        <p className="text-1xl font-sans mt-2 ml-20 intro">
          {props.instruction}
        </p>
      </div>
    </div>
  );
}

export default CandidatesList;

import Banner from "../Banner/Banner";
import Connect from "../Connect/Connect";
import CvBank from "../CvBank/CvBank";
import JobOpportunity from "../JobOpportunity/JobOpportunity";
import Stat from "../Stat/Stat";
import SuccessfullCourses from "../SuccessfullCourses/SuccessfullCourses";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Stat></Stat>
      <SuccessfullCourses></SuccessfullCourses>
      <SuccessStory></SuccessStory>
      <JobOpportunity></JobOpportunity>
      <CvBank></CvBank>
      <Connect></Connect>
    </div>
  );
};

export default Home;
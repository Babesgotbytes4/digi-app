import axios from "axios";


const GET_ALL_ASSESSMENT_QUERY = `
{
    assessments{
      id
      name
      difficulty
      timeAndMinutes
      questions{
        id 
        options
        answer
        description{
          html
        }
        explanation{
          html
        }
      }
      
    }
  }
  
`;

const syncAssessments = async () => {
  const result = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2ufijw3psx01z1e9t4ho71/master",
    { query: GET_ALL_ASSESSMENT_QUERY }
  );
  
  const {
    data: {
      data: {
          assessments
      },
    },
  } = result;

  window.localStorage.setItem("assessments", JSON.stringify(assessments));
  return assessments;
};

<<<<<<< HEAD
<<<<<<< HEAD
export default syncAssessment;
=======
export default syncAssessment;
>>>>>>> d5c3904e7abc2b66b975adee51bb0e53f98ab5ab
=======
export default syncAssessments;
>>>>>>> 9d354edd68f1c7d2f98801d171d0df8944372285

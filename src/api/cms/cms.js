import axios from "axios";

const GET_ALL_ASSESSMENT_QUERY = `
<<<<<<< HEAD
=======

>>>>>>> d5c3904e7abc2b66b975adee51bb0e53f98ab5ab
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
const syncAssessment = async () => {
  const {
    data: {
      data: {
          assessments
      },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2ufijw3psx01z1e9t4ho71/master",
    { query: GET_ALL_ASSESSMENT_QUERY }
  );

  console.log(assessments);
};

<<<<<<< HEAD
export default syncAssessment;
=======
export default syncAssessment;
>>>>>>> d5c3904e7abc2b66b975adee51bb0e53f98ab5ab

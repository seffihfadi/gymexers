import { useParams } from "react-router-dom";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import { useEffect, useState } from "react";

const ExerDetail = () => {
  const { id } = useParams();
  const [exerData, setExerData] = useState(null);
  const [currId, setCurrId] = useState(id);

  useEffect(() => {
    if (currId !== null) {
      const fetchExerData = async () => {
        try {
          const data = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/exercise/${currId}`,
            exercisesOptions
          );
          setExerData(data);
        } catch (error) {
          console.log("Couldn't fetch data for this exercise:", error);
        }
      };
      fetchExerData();
    }
  }, [currId]);

  const handlePrevious = () => {
    const prevId = parseInt(currId) - 1;
    prevId > 0 ? setCurrId(prevId.toString()) : setCurrId(currId);
  };

  const handleNext = () => {
    const nextId = parseInt(currId) + 1;
    setCurrId(nextId.toString());
  };

  return (
    <div className="exerdetail">
      <h1 className="text-center">Exercise Details</h1>
      {exerData && (
        <div>
          <h1 className="text-[#d70469] text-[28px] pt-14 text-center"> The exercice details  </h1>
          <div className="flex gap-10 items-center justify-center mt-8">
            <button
              onClick={handlePrevious}
              className="border-2 border-solid rounded-md border-[#d70469] p-2 hidden md:block"
            >
              Previous
            </button>
            <div className="border-2 border-solid hover:border-[#d70469] flex flex-col items-center py-5 rounded-md">
              <h2 className="text-[#d70469] text-[25px]"> The exercice name : </h2> <h3 className="text-[17px]" > {exerData.name}</h3>
              <img src={exerData.gifUrl} alt={exerData.target} load="lazy" />
              <span className="text-[#d70469] text-[22px]">Target muscles : <span className="text-[17px] text-black">{exerData.target} </span> </span>
              <span className="text-[#d70469] text-[22px]">The body part : <span className="text-[17px] text-black">{exerData.bodyPart}  </span> </span>
            </div>
            <button
              onClick={handleNext}
              className="border-2 border-solid border-[#d70469] rounded-md p-2 hidden md:block"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerDetail;

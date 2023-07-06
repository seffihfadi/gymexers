import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { fetchData, exercisesOptions } from '../utils/fetchData';

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const exersPerPage = 12;
  const indexOfLastExer = exersPerPage * currentPage;
  const indexOfFirstExer = indexOfLastExer - exersPerPage;

  const existedPages = Math.ceil(exercises.length / exersPerPage);

  const currentExers = exercises.slice(indexOfFirstExer, indexOfLastExer);

  const existPrev = currentPage > 1 ;
  const existNext = currentExers.length >= 9;


  return ( 
    <div className="exers">
      <div className="container">
      <div className="title"><h1>all resaults</h1></div>
      {exercises.length > 9 && (
        <div className='pagination'>
          {existPrev && <button onClick={() => {setCurrentPage(currentPage - 1)}}>Prev</button>}
          <h1>{currentPage} Of {existedPages}</h1>
          {existNext && <button onClick={() => {setCurrentPage(currentPage + 1)}}>Next</button>}
        </div>
      )}
        <div className="exersshow">
          {currentExers.length > 0 
            ? currentExers.map((exercise) => 
              <Link to={`/exercises/${exercise.id}`}>
              <div key={exercise.id} className='exer'>
                <img src={exercise.gifUrl} alt={exercise.target} load='lazy' />
                <h3>{exercise.name}</h3>
                <span>{exercise.target} - </span> 
                <span>{exercise.bodyPart} </span>
              </div>
              </Link>
              )
            : <div>No Data Found</div> 
          }
          
        </div>
      </div>
    </div>  
  );
}
 
export default Exercises;
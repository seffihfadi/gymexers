import { useState, useEffect } from 'react';
import { fetchData, exercisesOptions } from '../utils/fetchData';

const SearchExercises = ({exercises, setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
        exercisesOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
      //console.log(bodyPartsData);
    }

    fetchBodyPartsData();
  }, []);

  const handleSearch = async (e) => {
    setSearch(e.target.value.toLowerCase())
    if (search){
      try {
        const exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises', 
          exercisesOptions
        );
        //console.log(exercisesData);
        const searchedExers = exercisesData.filter((exercise) => 
          exercise.name.toLowerCase().includes(search)      || 
          exercise.bodyPart.toLowerCase().includes(search)  || 
          exercise.equipment.toLowerCase().includes(search) || 
          exercise.target.toLowerCase().includes(search)
        );
        setExercises(searchedExers);
        console.log(exercises);

      } catch (err) {
        console.log('an error was happend : ' + err);
      } 
    }

  }

  return (
    <div className="searchexers">
      <div className="container">
        <div className="title text-center"><h1>awesome exercices you should know</h1></div>
        <div className="search">
          <input value={search} type="text" onChange={handleSearch} placeholder='Search' />
          
        </div>
        <div className="bodyparts flex overflow-auto">
          { bodyParts.map((part, index) => 
            <button onClick={() => {setBodyPart(part)}} className="part" key={index}>
              {part}
            </button> 
          )}

        </div>
      </div>
      

    </div>
  );
}
 
export default SearchExercises;
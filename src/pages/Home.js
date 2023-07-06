import { useState } from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return ( 
    <div className="home">
      <HeroBanner />
      <SearchExercises 
        exercises={exercises} 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        
      />
    </div> 
  );
}
 
export default Home;
import {useState, useEffect} from 'react';
import axios from 'axios';
export type Cours = {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
};

export const useCourses = () => {
  const [courses, setCourses] = useState<Cours[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const {data} = await axios.get<Cours[]>(
          'https://logiclike.com/docs/courses.json',
        );
        console.log(data);
        setCourses(data);
      } catch (err) {
        setError('Ошибка при загрузке курсов');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return {courses, loading, error};
};

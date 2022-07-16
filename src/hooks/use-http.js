import { useState } from "react";
const useHttp = ()=> {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    //const [tasks, setTasks] = useState([]);
  
    const sendRequest = async (taskText) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
            'https://console.firebase.google.com/project/react-project-b2fbb/database/react-project-b2fbb-default-rtdb/data/~2F/task.json'
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        const loadedTasks = [];

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
  
        setTasks(loadedTasks);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    }

export default useHttp;
const useHttp = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);
  
    const fetchTasks = async (taskText) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://react-http-6b4a6.firebaseio.com/tasks.json'
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
}
export default useHttp;
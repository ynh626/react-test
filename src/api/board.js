// 이게 제가 한  axios 코드..
import React, {useEffect} from 'react';
import axios from 'axios';

const App = () => {
    useEffect( () => { //useEffect에 의존성배열이 없어서 안되는걸까요?..
        axiosTest();
    })

    const axiosTest = () => {
        axios.get("3.34.140.180:8000") 
        .then(res => console.log(res.data)
        .catch(err => console.log(err)));
    }

    return <p>test</p>
}
export default App; 



// 이게 보내주신 fetch 코드..
const [data, setData] = useState([]);
  // const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch("3.34.140.180:8000").then((res) =>
      res.json()
    );

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.country,
        content: it.title,
        emotion: it.visite_count,
        id: it.id,
        created_date: it.created_at,
      };
    });

    setData(initData);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []); 


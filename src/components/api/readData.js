import axios from 'axios';

const url = 'https://atlanserver.herokuapp.com/runQ'

const readData = async(query) =>{
  const res = await axios({
    method: 'GET',
    url:url,
    params:{query}
  })


  return res.data;
}


export default readData;
// import { useCallback, useEffect, useState } from "react";

// import { API } from '../services/api';
// import { APIKey} from '../services/apiKey'

// export const useAxios = (endpoint = "") => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState("");
//   const [error, setError] = useState(false);


//   const getData = useCallback(async () => {
//     try {
//       const movieText = "Harry"
//       const data = await API.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
//       setData(data);
//       setLoading(false);
//     } catch (e) {
//       console.log(e)
//       setError(true)
//     }
//   }, [endpoint]);

//   useEffect(() => {
//     getData()
//   }, [endpoint, getData])

//   return [data, loading, error];
// }
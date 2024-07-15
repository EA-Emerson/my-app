// // src/api.js

// export const getProduct = async (organizationId, appId, apiKey) => {
//     try {
//       const apiUrl = `/api/products?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`;
      
//       // Log the API URL for debugging
//       console.log('API URL:', apiUrl);
  
//       const response = await fetch(apiUrl);
  
//       // Log the raw response for debugging
//       const text = await response.text();
//       console.log('Raw response:', text);
  
//       // Try to parse the response as JSON
//       const data = JSON.parse(text);
//       if (!response.ok) {
//         throw new Error(data.message || 'Error fetching product details');
//       }
//       return data;
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//       throw error;
//     }
//   };






//   const [records, setRecords] = useState([]);
//   const dataFetch =
//     "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=5e6c86768597478289bf8386f5b07e25&Appid=ZNPXUNOUSKYWCGD&Apikey=981c1776e1e541e19ec8795bb2d0091120240712230246246806&";

//   useEffect(() => {
//     fetch(dataFetch)
//       .then((response) => response.json())
//       .then((data) => setRecords(data.items)) // Assuming `data.items` is an array of records
//       .catch((err) => console.log(err));
//   }, []);
[cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


// export const BASE_URL = '../public/data/products.json'; 

export const fetchData = async (BASE_URL) => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);

  }
};

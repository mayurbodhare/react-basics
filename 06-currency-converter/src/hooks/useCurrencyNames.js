import {useState, useEffect} from 'react'

function useCurrencyNames() {

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
    const [names, setNames] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            const array = Array.from(result);
            console.log(array);
            setNames(array);
        } catch (error) {
            console.log(error);
        }
      }

      fetchData();
    }, [])
    
    return names;
}

export default useCurrencyNames;

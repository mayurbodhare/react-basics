import {useState, useEffect} from 'react'

function useCurrencyNames() {

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
    const [names, setNames] = useState(new Map());
    
    useEffect(() => {
      const removeEmptyValues = (obj) => {
        for (const key in obj) {
            if (obj[key] === '') {
                delete obj[key];
            }
        }
        return obj;
    };

    const objectToMap = (obj) => {
      return new Map(Object.entries(obj));
    };

      fetch(url)
      .then(response => response.json())
      .then(data => {
        const cleanedData = removeEmptyValues({ ...data });
        const map = objectToMap(cleanedData);
        setNames(map);
      })
    },[]);
    
    return names;
}

export default useCurrencyNames;

// Example using async/await and callbacks
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = '';
      if (data) {
        callback(null, data); //error - null and data - data
      } else {
        callback('Data not found'); // error - 'Data not found' ,data - null
      }
    }, 2000);
  }
  
  async function fetchDataAsync(data) {
    try {
      const result = await new Promise((resolve, reject) => {
          //arrow function
        fetchDataWithCallback((error, data) => {
            console.log(error)
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
          console.log("hello")
        });
      });
      console.log(result)
      let results = `Results is ${result}`;
      console.log(results);
    } catch (err) {
      console.log('error:', err);
    }
  }
  
  fetchDataAsync();
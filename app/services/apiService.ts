const apiService = {
    get: async function (url: string): Promise<any> {
    console.log('GET', url);

    // GET
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
            }
        })
            .then(response => response.json())
            .then((json) => {
                console.log('Response:', json)

                resolve(json);
            })
            .catch((error) => {
                reject(error);
            })
        })  
    },

    //POST
    post: async function(url: string, data: any): Promise<any>{
        console.log('POST', url, data);

        // A Promise object represents the eventual completion 
        // (or failure) of an asynchronous operation 
        // and its resulting value.
        return new Promise((resolve, reject) => {
        //1. FETCH the data from the endpoint
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
            method: "POST",
            body:data, //To Fetch in the backend
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
            }
        }) 
        //2. THEN turn the response you fetch into JSON
            .then(response => response.json())
        //3. THEN if no errors --> Resolve
            .then((json) => {
                console.log('Data:', json)

                resolve(json);
            })
        //4. CATCH errors --> Reject
            .catch((error) => {
                reject(error);
            })
        })
    }

}

export default apiService;
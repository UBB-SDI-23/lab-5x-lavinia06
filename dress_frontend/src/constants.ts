const PROD_BACKEND_API_URL = "http://127.0.0.1:8000/api";
const DEV_BACKEND_API_URL = "http://127.0.0.1:8000/api";



// const PROD_BACKEND_API_URL = "/api";
// const DEV_BACKEND_API_URL = "http://34.155.183.149/";


export const BACKEND_API_URL =

    process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;
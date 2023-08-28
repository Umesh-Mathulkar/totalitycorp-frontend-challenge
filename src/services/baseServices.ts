// export const baseUrl = 'http://localhost:8080/'   //for developement
export const baseUrl ='https://estore-11zn.onrender.com/'

export const createApiUrl = (endpoint: string): string => {
  return `${baseUrl}${endpoint}`;
};

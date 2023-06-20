import { BASEAPIS } from './BaseApis';
import { baseURL } from './apiBaseUrl';


export const APICALLKARWA = {

    PostXL: async (json,url) => {
        return await BASEAPIS.POSTAPIMULTIPARTS(json,url);
    },

    GetPoliceData: async (url) => {
        return await BASEAPIS.GETAPI(url);
    },

    PostImage: async (json,url) => {
        return await BASEAPIS.POSTAPIMULTIPARTS(json,url);
    },

 
};

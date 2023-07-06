import { BASEAPIS } from './BaseApis';
import { baseURL } from './apiBaseUrl';


export const APICALLKARWA = {

    PostXL: async (json,url) => {
        return await BASEAPIS.POSTAPIMULTIPARTS(json,url);
    },

    GetPoliceData: async (url) => {
        return await BASEAPIS.GETAPI(url);
    },

    DashboardCount: async () => {
        return await BASEAPIS.GETAPI('dashboardCount');
    },
    

    PostImage: async (json,url) => {
        return await BASEAPIS.POSTAPIMULTIPARTS(json,url);
    },

 
};

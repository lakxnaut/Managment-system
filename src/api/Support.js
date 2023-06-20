import { BASEAPIS } from './BaseApis';

export const SupportAPI = {
    CreateTicket: (dataForm) => {
        console.log(dataForm);
        return BASEAPIS.POSTAPI('createSupport', dataForm);
    },

    getAllCaseStatusDashboard: () => {
        return BASEAPIS.GETAPI('getAllCaseStatus');
    },
    verifyUserDetail: (phoneNumber, emailId) => {
        return BASEAPIS.GETAPI('verifyUserInCase?email=' + emailId + '&phone=' + phoneNumber);
    },

    getAllCases: () => {
        return BASEAPIS.GETAPI('getAllCaseList');
    },

    upDateTicketStatusCases: (jsonBody) => {
        return BASEAPIS.PUTAPI(jsonBody, 'updateSupportStatus');
    }
};
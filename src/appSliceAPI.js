import Service from "./services";
import { apiBase, } from "./config";

const service = new Service();

export const getResourceTypes = ( data ) => service.getResource(`${apiBase}/?q=fsrResourceTypes`, data);
export const submit = ( data ) => service.postResource(`${apiBase}/?q=submit`, data);
export const outlook = ( data ) => service.postResource(`https://outlook.suek.ru/owa/#path=/mail/inbox`, data);
export const mainpage = ( data ) => service.postResource(`https://asuz.digtp.com/mainpage/`, data);
export const workplace = ( data ) => service.postResource(`https://asuz.digtp.com/workplace`, data);
export const sap = ( data ) => service.postResource(`https://asuz.digtp.com/corpsystems/sap`, data);
export const resource = ( data ) => service.postResource(`https://asuz.digtp.com/resource/`, data);
export const jira = ( data ) => service.postResource(`https://jira.digtp.com/secure/Tempo.jspa#/my-work/timesheet?worker=JIRAUSER98266&dateDisplayType=days&periodType=CURRENT_PERIOD&subPeriodType=MONTH&viewType=TIMESHEET&order=DESCENDING&sortBy=TITLE_COLUMN&columns=WORKED_COLUMN&groupBy=issue&from=2025-04-01&to=2025-04-30`, data);

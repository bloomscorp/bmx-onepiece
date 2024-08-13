import {LOG_TYPE} from './enum/log-type';
import LogDataModel from './orm/log-data-orm';

const info = (message: string, dataDump?: any, endpoint?: string, createdBy?: number): void => {
    console.info('message-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));

    LogDataModel.create({
        logType: LOG_TYPE.INFO,
        endpoint: endpoint,
        createdBy: createdBy,
        message: message,
        dataDump: JSON.stringify(dataDump, undefined, 4)
    });
}

const error = (message: string, dataDump?: any, endpoint?: string, createdBy?: number): void => {
    console.error('error-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));

    LogDataModel.create({
        logType: LOG_TYPE.ERROR,
        endpoint: endpoint,
        createdBy: createdBy,
        message: message,
        dataDump: JSON.stringify(dataDump, undefined, 4)
    });
}

const alfredLog = {info, error};

export default alfredLog;
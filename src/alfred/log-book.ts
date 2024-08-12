import {LOG_TYPE} from './enum/log-type';
import LogDataModel from './orm/log-data-orm';

const info = (message: string, dataDump?: any): void => {
    console.info('message-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.INFO,
        message: message,
        dataDump: dataDump
    });
}

const warning = (message: string, dataDump?: any): void => {
    console.warn('warning-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.WARNING,
        message: message,
        dataDump: dataDump
    });
}

const notice = (message: string, dataDump?: any): void => {
    console.log('notice-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.NOTICE,
        message: message,
        dataDump: dataDump
    });
}

const debug = (message: string, dataDump?: any): void => {
    console.debug('debug-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.DEBUG,
        message: message,
        dataDump: dataDump
    });
}

const error = (message: string, dataDump?: any): void => {
    console.error('error-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.ERROR,
        message: message,
        dataDump: dataDump
    });
}

const critical = (message: string, dataDump?: any): void => {
    console.error('critical-> ', message);
    console.error('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.CRITICAL,
        message: message,
        dataDump: dataDump
    });
}

const alert = (message: string, dataDump?: any): void => {
    console.log('alert-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.ALERT,
        message: message,
        dataDump: dataDump
    });
}

const emergency = (message: string, dataDump?: any): void => {
    console.error('emergency-> ', message);
    console.log('dataDump-> ', JSON.stringify(dataDump, undefined, 4));
    
    LogDataModel.create({
        logType: LOG_TYPE.EMERGENCY,
        message: message,
        dataDump: dataDump
    });
}
 const alfredLog = {
    info,
    warning,
    notice,
    debug,
    error,
    critical,
    alert,
    emergency
}

export default alfredLog;
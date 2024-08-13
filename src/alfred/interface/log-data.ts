import { LOG_TYPE } from "../enum/log-type";

export interface LogData {
    id: number;
    logType: LOG_TYPE;
    message: string;
    endpoint?: string;
    dataDump?: string;
    createdBy: number;
    createdAt: Date;
    updatedAt: Date;
}
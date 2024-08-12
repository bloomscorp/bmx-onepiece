import {USER_ROLE} from '../enum/user-role';
import {BehemothInterface} from 'bmx-behemoth-ts';

export interface UserRole extends BehemothInterface {
    id: number;
	role: USER_ROLE;
    createdAt: Date;
    updatedAt: Date;
}

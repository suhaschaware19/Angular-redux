
import { User } from '../../model/user.model';
import { Action } from '@ngrx/store';

export const SAVE_USER = 'SAVE_USER';

export function saveUserReducer(state: User[] = [], action) {
  switch (action.type) {
    case SAVE_USER:
        return [...state, action.payload];
    default:
        return state;
    }
}
import {IMainState} from './Main.types';
import {MainState} from './Main.state';
import {GenericAction} from '../../engine/types';

export const mainReducer = (
  state: IMainState = MainState,
  action: GenericAction<any>
): IMainState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

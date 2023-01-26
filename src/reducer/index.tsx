// actions
import { RESET, UPDATE_KEY_VALUE } from './action';

export default (previousState: any, action: { type: string; value: any }) => {
  switch (action.type) {
    case RESET:
      return {};

    case UPDATE_KEY_VALUE:
      return {
        ...previousState,
        ...action.value,
      };

    default:
      return previousState;
  }
};

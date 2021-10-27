import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// const unknown: number = 44

// const num = unknown as number | string;
// const num2: number | string  = unknown;

// type StringOrNumber = typeof num;


// console.log(num2 as StringOrNumber);


// type Func = (params: StringOrNumber) => [string, [number, number]];
// const func: Func = function passParam(paramt) {
//   return ["", [+paramt]];
// }

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

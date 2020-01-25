import React, { useReducer, createContext, useContext, useEffect } from 'react';

export type DeezerData = {
    title: string,
    preview: string,
    album : {
        cover: string
    }
}

type DeezerState = {
  data?: DeezerData
};

type DeezerAction = {
  type: 'set'
  data?: DeezerData
};

function reducer (state: DeezerState, action: DeezerAction): DeezerState {

  let data: DeezerData | undefined;

  switch (action.type) {

    case 'set':
      data = action.data;
      if (data !== state.data) {
        console.log('Set new data:', data);
        return { ...state, data };
      }
      return state;

    default:
      throw new Error('No action type provided');
  }
}

function functionStub () {
  throw new Error('Function needs to be set in DeezerProvider');
}

const initialState = {
  inited: false,
  data: undefined
};

export type DeezerContextProps = {
  state: DeezerState,
  dispatch: React.Dispatch<DeezerAction>,
  set: (data: DeezerData) => void
};

const contextStub: DeezerContextProps = {
  state: initialState,
  dispatch: functionStub,
  set: functionStub
};

export const DeezerContext = createContext<DeezerContextProps>(contextStub);

export function DeezerProvider (props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    state,
    dispatch,
    set: (data: DeezerData) => dispatch({ type: 'set', data: data }),
  };
  return (
    <DeezerContext.Provider value={contextValue}>
      {props.children}
    </DeezerContext.Provider>
  );
}

export function useDeezerData () {
  return useContext(DeezerContext);
}

export default DeezerProvider;

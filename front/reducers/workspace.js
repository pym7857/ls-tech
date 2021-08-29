export const initialState = {
    workSpaces: [],
    workspace: [],
};

export const LOAD_WORKSPACES_REQUEST = 'LOAD_WORKSPACES_REQUEST';
export const LOAD_WORKSPACES_SUCCESS = 'LOAD_WORKSPACES_SUCCESS';
export const LOAD_WORKSPACES_FAILURE = 'LOAD_WORKSPACES_FAILURE';

export const LOAD_WORKSPACE_REQUEST = 'LOAD_WORKSPACE_REQUEST';
export const LOAD_WORKSPACE_SUCCESS = 'LOAD_WORKSPACE_SUCCESS';
export const LOAD_WORKSPACE_FAILURE = 'LOAD_WORKSPACE_FAILURE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_WORKSPACES_REQUEST: {
          return {
            ...state,
            workSpaces: [],
          };
        }
        case LOAD_WORKSPACES_SUCCESS: {
          return {
            ...state,
            workSpaces: action.data,
          };
        }
        case LOAD_WORKSPACES_FAILURE: {
          return {
            ...state,
          };
        }
        case LOAD_WORKSPACE_REQUEST: {
          return {
            ...state,
            workspace: [],
          }
        }
        case LOAD_WORKSPACE_SUCCESS: {
          return {
            ...state,
            workspace: [action.data],
          }
        }
        case LOAD_WORKSPACE_FAILURE: {
          return {
            ...state,
          }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
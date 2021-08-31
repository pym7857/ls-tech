export const initialState = {
    workSpaces: [],
    workspace: [],

    addWorkspaceErrorReason: '', // ws 업로드 실패 사유
    isAddingWorkspace: false, // ws 업로드 중
    workspaceAdded: false, // wws 업로드 성공
};

export const LOAD_WORKSPACES_REQUEST = 'LOAD_WORKSPACES_REQUEST';
export const LOAD_WORKSPACES_SUCCESS = 'LOAD_WORKSPACES_SUCCESS';
export const LOAD_WORKSPACES_FAILURE = 'LOAD_WORKSPACES_FAILURE';

export const LOAD_WORKSPACE_REQUEST = 'LOAD_WORKSPACE_REQUEST';
export const LOAD_WORKSPACE_SUCCESS = 'LOAD_WORKSPACE_SUCCESS';
export const LOAD_WORKSPACE_FAILURE = 'LOAD_WORKSPACE_FAILURE';

export const ADD_WORKSPACE_REQUEST = 'ADD_WORKSPACE_REQUEST';
export const ADD_WORKSPACE_SUCCESS = 'ADD_WORKSPACE_SUCCESS';
export const ADD_WORKSPACE_FAILURE = 'ADD_WORKSPACE_FAILURE';

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
        case ADD_WORKSPACE_REQUEST: {
          return {
            ...state,
            isAddingWorkspace: true,
            addWorkspaceErrorReason: '',
            workspaceAdded: false,
          };
        }
        case ADD_WORKSPACE_SUCCESS: {
          return {
            ...state,
            isAddingWorkspace: false,
            workSpaces: [...state.workSpaces, action.data ],
            workspaceAdded: true,
          };
        }
        case ADD_WORKSPACE_FAILURE: {
          return {
            ...state,
            isAddingWorkspace: false,
            addWorkspaceErrorReason: action.error,
          };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
export const initialState = {
    workSpaces: [],
    workspace: [],

    channels: [],
    channel2s: [],

    addWorkspaceErrorReason: '', // ws 업로드 실패 사유
    isAddingWorkspace: false, // ws 업로드 중
    workspaceAdded: false, // ws 업로드 성공

    addChannel1ErrorReason: '', // ch1 업로드 실패 사유
    isAddingChannel1: false, // ch1 업로드 중
    channel1Added: false, // ch1 업로드 성공

    addChannel2ErrorReason: '', // ch2 업로드 실패 사유
    isAddingChannel2: false, // ch2 업로드 중
    channel2Added: false, // ch2 업로드 성공
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

export const LOAD_CHANNELS_REQUEST = 'LOAD_CHANNELS_REQUEST';
export const LOAD_CHANNELS_SUCCESS = 'LOAD_CHANNELS_SUCCESS';
export const LOAD_CHANNELS_FAILURE = 'LOAD_CHANNELS_FAILURE';

export const LOAD_CHANNEL2S_REQUEST = 'LOAD_CHANNEL2S_REQUEST';
export const LOAD_CHANNEL2S_SUCCESS = 'LOAD_CHANNEL2S_SUCCESS';
export const LOAD_CHANNEL2S_FAILURE = 'LOAD_CHANNEL2S_FAILURE';

export const ADD_CH1_REQUEST = 'ADD_CH1_REQUEST';
export const ADD_CH1_SUCCESS = 'ADD_CH1_SUCCESS';
export const ADD_CH1_FAILURE = 'ADD_CH1_FAILURE';

export const ADD_CH2_REQUEST = 'ADD_CH2_REQUEST';
export const ADD_CH2_SUCCESS = 'ADD_CH2_SUCCESS';
export const ADD_CH2_FAILURE = 'ADD_CH2_FAILURE';

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
        case LOAD_CHANNELS_REQUEST: {
          return {
            ...state,
            channels: [],
          };
        }
        case LOAD_CHANNELS_SUCCESS: {
          return {
            ...state,
            channels: action.data,
          };
        }
        case LOAD_CHANNELS_FAILURE: {
          return {
            ...state,
          };
        }
        case LOAD_CHANNEL2S_REQUEST: {
          return {
            ...state,
            channel2s: [],
          };
        }
        case LOAD_CHANNEL2S_SUCCESS: {
          return {
            ...state,
            channel2s: action.data,
          };
        }
        case LOAD_CHANNEL2S_FAILURE: {
          return {
            ...state,
          };
        }
        case ADD_CH1_REQUEST: {
          return {
            ...state,
            isAddingChannel1: true,
            addChannel1ErrorReason: '',
            channel1Added: false,
          };
        }
        case ADD_CH1_SUCCESS: {
          return {
            ...state,
            isAddingChannel1: false,
            channels: [...state.channels, action.data ],
            channel1Added: true,
          };
        }
        case ADD_CH1_FAILURE: {
          return {
            ...state,
            isAddingChannel1: false,
            addChannel1ErrorReason: action.error,
          };
        }
        case ADD_CH2_REQUEST: {
          return {
            ...state,
            isAddingChannel2: true,
            addChannel2ErrorReason: '',
            channel2Added: false,
          };
        }
        case ADD_CH2_SUCCESS: {
          return {
            ...state,
            isAddingChannel2: false,
            channel2s: [...state.channel2s, action.data ],
            channel2Added: true,
          };
        }
        case ADD_CH2_FAILURE: {
          return {
            ...state,
            isAddingChannel2: false,
            addChannel2ErrorReason: action.error,
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
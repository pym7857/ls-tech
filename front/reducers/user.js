export const initialState = {
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 실패 사유
    
    me: null, // 내 정보
    userInfo: null, // 남의 정보

    isEditingNickname: false, // 이름 변경 중
    editNicknameErrorReason: '', // 이름 변경 실패 사유
};

// 액션 이름
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const ADD_WORKSPACE_TO_ME = 'ADD_WORKSPACE_TO_ME';

// reducer: action에 따라 state바꾸는 역할 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
          return {
            ...state,
            isLoggingIn: true,
            logInErrorReason: '',
          };
        }
        case LOG_IN_SUCCESS: {
          return {
            ...state,
            isLoggingIn: false,
            me: action.data,
            isLoading: false,
          };
        }
        case LOG_IN_FAILURE: {
          return {
            ...state,
            isLoggingIn: false,
            logInErrorReason: action.error,
            me: null,
          };
        }
        case LOG_OUT_REQUEST: {
          return {
            ...state,
            isLoggingOut: true,
          };
        }
        case LOG_OUT_SUCCESS: {
          return {
            ...state,
            isLoggingOut: false,
            me: null,
          };
        }
        case LOAD_USER_REQUEST: {
          return {
            ...state,
          };
        }
        case LOAD_USER_SUCCESS: {
          if (action.me) { // 내 정보(me) 일때
            return {
              ...state,
              me: action.data,
            };
          }
          return { // 남의 정보(userInfo) 일때 
            ...state, 
            userInfo: action.data, 
          };
        }
        case LOAD_USER_FAILURE: {
          return {
            ...state,
          };
        }
        case ADD_POST_TO_ME: {
          return {
            ...state,
            me: {
              ...state.me,
              Posts: [{ id: action.data }, ...state.me.Posts],
            },
          };
        }
        case ADD_WORKSPACE_TO_ME: {
          return {
            ...state,
            me: {
              ...state.me,
              Workspaces: [{ id: action.data }, ...state.me.Workspaces],
            },
          };
        }
        case EDIT_NICKNAME_REQUEST: {
          return {
            ...state,
            isEditingNickname: true,
            editNicknameErrorReason: '',
          };
        }
        case EDIT_NICKNAME_SUCCESS: {
          return {
            ...state,
            isEditingNickname: false,
            me: {
              ...state.me,
              nickname: action.data,
            },
          };
        }
        case EDIT_NICKNAME_FAILURE: {
          return {
            ...state,
            isEditingNickname: false,
            editNicknameErrorReason: action.error,
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
export const initialState = {
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 실패 사유
    me: null, // 내 정보
    userInfo: null, // 남의 정보
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

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

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
          return {
            ...state,
            me: action.data,
          };
        }
        case LOAD_USER_FAILURE: {
          return {
            ...state,
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
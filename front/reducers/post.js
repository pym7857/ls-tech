export const initialState = {
    mainPosts: [],
    addPostErrorReason: '', // 포스트 업로드 실패 사유
    isAddingPost: false, // 포스트 업로드 중
    postAdded: false, // 포스트 업로드 성공
    hashTags: [],
    
    article: [],

    isEditingPost: false,
    editPostErrorReason: '', // 게시글 수정 실패 사유
};

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_TARGET_POSTS_REQUEST = 'LOAD_TARGET_POSTS_REQUEST';
export const LOAD_TARGET_POSTS_SUCCESS = 'LOAD_TARGET_POSTS_SUCCESS';
export const LOAD_TARGET_POSTS_FAILURE = 'LOAD_TARGET_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const LOAD_ALL_HASHTAGS_REQUEST = 'LOAD_ALL_HASHTAGS_REQUEST';
export const LOAD_ALL_HASHTAGS_SUCCESS = 'LOAD_ALL_HASHTAGS_SUCCESS';
export const LOAD_ALL_HASHTAGS_FAILURE = 'LOAD_ALL_HASHTAGS_FAILURE';

export const LOAD_ARTICLE_REQUEST = 'LOAD_ARTICLE_REQUEST';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_FAILURE = 'LOAD_ARTICLE_FAILURE';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST: {
          return {
            ...state,
            isAddingPost: true,
            addPostErrorReason: '',
            postAdded: false,
          };
        }
        case ADD_POST_SUCCESS: {
          return {
            ...state,
            isAddingPost: false,
            mainPosts: [action.data, ...state.mainPosts],
            postAdded: true,
          };
        }
        case ADD_POST_FAILURE: {
          return {
            ...state,
            isAddingPost: false,
            addPostErrorReason: action.error,
          };
        }
        case LOAD_MAIN_POSTS_REQUEST:
        case LOAD_HASHTAG_POSTS_REQUEST:
        case LOAD_USER_POSTS_REQUEST: 
        case LOAD_TARGET_POSTS_REQUEST: {
          return {
            ...state,
            mainPosts: [],
          };
        }
        case LOAD_MAIN_POSTS_SUCCESS:
        case LOAD_HASHTAG_POSTS_SUCCESS:
        case LOAD_USER_POSTS_SUCCESS: 
        case LOAD_TARGET_POSTS_SUCCESS: {
          return {
            ...state,
            mainPosts: action.data,
          };
        }
        case LOAD_MAIN_POSTS_FAILURE:
        case LOAD_HASHTAG_POSTS_FAILURE:
        case LOAD_USER_POSTS_FAILURE: 
        case LOAD_TARGET_POSTS_FAILURE: {
          return {
            ...state,
          };
        }
        case LIKE_POST_REQUEST: {
          return {
            ...state,
          };
        }
        case LIKE_POST_SUCCESS: {
          const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 내가 '좋아요' 누른 게시물이 몇번째 포스트인지 
          const post = state.mainPosts[postIndex];
          const Likers = [{ id: action.data.userId }, ...post.Likers]; // '좋아요'누른 사람목록에 내 이름 추가 
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = { ...post, Likers };
          return {
            ...state,
            mainPosts,
          };
        }
        case LIKE_POST_FAILURE: {
          return {
            ...state,
          };
        }
        case UNLIKE_POST_REQUEST: {
          return {
            ...state,
          };
        }
        case UNLIKE_POST_SUCCESS: {
          const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Likers = post.Likers.filter(v => v.id !== action.data.userId); // '좋아요'누른 사람목록에서 내 이름 빼기 (=필터링) 
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = { ...post, Likers };
          return {
            ...state,
            mainPosts,
          };
        }
        case UNLIKE_POST_FAILURE: {
          return {
            ...state,
          };
        }
        case LOAD_ALL_HASHTAGS_REQUEST: {
          return {
            ...state,
            hashTags: [],
          }
        }
        case LOAD_ALL_HASHTAGS_SUCCESS: {
          return {
            ...state,
            hashTags: action.data,
          }
        }
        case LOAD_ALL_HASHTAGS_FAILURE: {
          return {
            ...state,
          }
        }
        case LOAD_ARTICLE_REQUEST: {
          return {
            ...state,
            article: [],
          }
        }
        case LOAD_ARTICLE_SUCCESS: {
          return {
            ...state,
            article: [action.data],
          }
        }
        case LOAD_ARTICLE_FAILURE: {
          return {
            ...state,
          }
        }
        case EDIT_POST_REQUEST: {
          return {
            ...state,
            isEditingPost: true,
            editPostErrorReason: '',
          };
        }
        case EDIT_POST_SUCCESS: {
          return {
            ...state,
            isEditingPost: false,
            // me: {
            //   ...state.me,
            //   article: action.data, // me.article은 없음 
            // },
          };
        }
        case EDIT_POST_FAILURE: {
          return {
            ...state,
            isEditingPost: false,
            editPostErrorReason: action.error,
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
import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "react-js-pagination";

import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const [page, setPage] = useState(1); 
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
        });
    }, []);

    const handlePageChange = (page) => { 
        setPage(page); 
        alert(page);
    };

    return(
        <div>
            <h1>Hello Next.js 👋</h1>
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            })}
            <Pagination 
                activePage={page} 
                itemsCountPerPage={10} 
                totalItemsCount={450} 
                pageRangeDisplayed={5} 
                prevPageText={"‹"} 
                nextPageText={"›"} 
                onChange={handlePageChange} 
            />
        </div>
    );
};

export default Home;
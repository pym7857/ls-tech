import React, { useEffect, useState, useCallback } from 'react';
//import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "react-js-pagination";
import dynamic from 'next/dynamic'

import {  LOAD_TARGET_POSTS_REQUEST } from '../reducers/post';

const PostCard = dynamic(() => import('../components/PostCard'))

const Home = () => {
    const [page, setPage] = useState(1); // default: 1
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_TARGET_POSTS_REQUEST,
            data: 1,
        });
    }, []);

    const handlePageChange = useCallback((page) => { 
        setPage(page); 
        //alert(page);
        dispatch({
            type: LOAD_TARGET_POSTS_REQUEST,
            data: page,
        }, [page]);
    }, [page]);

    //console.log(mainPosts);

    return(
        <div>
            <h1>Hello Next.js 👋</h1>
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            })}
            <div>
                <Pagination 
                    activePage={page} 
                    itemsCountPerPage={5} 
                    totalItemsCount={450} 
                    pageRangeDisplayed={5} 
                    prevPageText={"‹"} 
                    nextPageText={"›"} 
                    onChange={handlePageChange} 
                />
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import s from '../Post/Post.module.css';

const Post = (props) => {
    console.log(props)
    
    return (

        <div className={s.item}>
            <img src="https://i.redd.it/xz8656i70hk11.jpg" alt="" />
                {props.message}
            <div>
                <span>likes {props.likeCount}</span>
            </div>
        </div>
    );
}
export default Post;
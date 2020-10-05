import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
<<<<<<< HEAD

=======
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
    let postsElements = props.posts.map(post =>
        <Post like={post.like} dislike={post.dislike} text={post.text} />)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
<<<<<<< HEAD
       props.addNewPost(text);
        
=======
        props.addNewPost(text);        
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
    }
    let changeNewPost = () => {
        let text = newPostElement.current.value
        props.changeNewPost(text);
    }
    return (
        <div className={s.Posts}>
            <div className={s.newPost}>
                <textarea ref={newPostElement}
                    value={props.newPostText}
                    placeholder="Enter new post"
                    onChange={changeNewPost}/>
                <div>
                    <button onClick={addNewPost}>Add new post</button>
                </div>
            </div>
            <div className={s.PostsElement}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;
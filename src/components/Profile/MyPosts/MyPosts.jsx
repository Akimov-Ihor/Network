import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' placeholder='Your Post' validate={[required, maxLength10]} />
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>)
}

const AddPostFormRedux = reduxForm({ form: 'newPostText' })(AddNewPostForm)





const MyPosts = (props) => {

  let postsElemets = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} key={p.id} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText)

  }

  return (

    <div className={s.postBlock}>
      My posts
      <div>
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>
        {postsElemets}
      </div>
    </div>);

}



export default MyPosts;
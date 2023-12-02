import Rating from '../rating/rating';
import React, {ReactElement, SyntheticEvent} from 'react';
import {postCommentAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import {isCommentFormValid} from '../../helpers/validate-comment-form';

const STAR_COUNT = 10;

type CommentSubmissionFormProps = {
  filmId: string;
}

function CommentSubmissionForm({filmId} : CommentSubmissionFormProps): ReactElement {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = React.useState({
    rating: 0,
    comment: ''
  });

  const handleFieldChange = (evt : SyntheticEvent) => {
    const {name, value} = evt.target as HTMLTextAreaElement;
    setFormData({...formData, [name]: value});
  };

  const onStarClick = (evt : SyntheticEvent) => {
    const {name, value} = evt.target as HTMLInputElement;
    setFormData({...formData, [name]: value});
  };

  function postComment() {
    dispatch(postCommentAction({id: filmId, comment: formData.comment, rating: Number(formData.rating)}));
  }

  return (
    <div className="add-review">
      <form className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: STAR_COUNT}, (_, i) => (i + 1).toString()).reverse()
              .map((value) => (<Rating value = {value} key = {value} onStarClick={onStarClick}/>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" onChange={handleFieldChange}
            value={formData.comment} name="comment" id="comment"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="button" onClick={() => postComment()}
              disabled={!isCommentFormValid(formData.comment, formData.rating)}
            >Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentSubmissionForm;

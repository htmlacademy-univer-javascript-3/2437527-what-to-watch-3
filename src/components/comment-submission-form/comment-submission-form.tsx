import Rating from '../rating/rating';
import React, {ReactElement, SyntheticEvent} from 'react';

const STAR_COUNT = 10;

function CommentSubmissionForm(): ReactElement {
  const [formData, setFormData] = React.useState({
    rating: '',
    reviewText: ''
  });

  const handleFieldChange = (evt : SyntheticEvent) => {
    const {name, value} = evt.target as HTMLTextAreaElement;
    setFormData({...formData, [name]: value});
  };

  const onStarClick = (evt : SyntheticEvent) => {
    const {name, value} = evt.target as HTMLInputElement;
    setFormData({...formData, [name]: value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: STAR_COUNT}, (_, i) => (i + 1).toString()).reverse()
              .map((value) => (<Rating value = {value} key = {value} onStarClick={onStarClick}/>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" onChange={handleFieldChange}
            value={formData.reviewText} name="reviewText" id="reviewText"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentSubmissionForm;

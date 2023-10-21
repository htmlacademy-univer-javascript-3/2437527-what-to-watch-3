import Rating from '../rating/rating';
import React, {ReactElement, SyntheticEvent} from 'react';

const StarCount = 10;

function CommentSubmissionForm(): ReactElement {
  const ratingValues : string[] = [];
  for (let i = StarCount; i > 0; i--) {
    ratingValues.push(i.toString());
  }

  const [formData, setFormData] = React.useState({
    rating: '',
    reviewText: ''
  });

  const handleFieldChange = (evt : SyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value as string});
  };

  const onStarClick = (evt : SyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value as string});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingValues.map((value) => (<Rating value = {value} key = {value} onStarClick={onStarClick}/>))}
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

const LOWER_CHARACTER_LIMIT = 50;
const UPPER_CHARACTER_LIMIT = 400;

export function isCommentFormValid(comment: string, rating: number) {
  return comment.length >= LOWER_CHARACTER_LIMIT && comment.length <= UPPER_CHARACTER_LIMIT && rating > 0;
}

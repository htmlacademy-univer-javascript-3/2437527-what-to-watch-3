export function isCommentFormValid(comment: string, rating: number) {
  return comment.length >= 50 && comment.length <= 400 && rating > 0;
}

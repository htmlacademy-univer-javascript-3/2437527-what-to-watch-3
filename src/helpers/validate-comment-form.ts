const CharacterLimits = {
  Lower: 50,
  Upper: 400,
} as const;

export function isCommentFormValid(comment: string, rating: number) {
  return comment.length >= CharacterLimits.Lower && comment.length <= CharacterLimits.Upper && rating > 0;
}

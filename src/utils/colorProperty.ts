export function ratingColor(rating: number | null): string {
  if(rating >= 4) return 'teal'
  if(rating < 4 && rating >= 3) return 'yellow'
  if(rating < 3) return 'red'
  if(rating == null) return 'transparent'
}
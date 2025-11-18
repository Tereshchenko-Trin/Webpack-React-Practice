const ID_REGEX: RegExp = /^\d+$/

export function isNumId(id: string | undefined): boolean {
  if (!id) return false

  return ID_REGEX.test(id)
}

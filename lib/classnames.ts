/**
 * An util that allows for effortless combination of classnames with conditional application
 * */
export const cx = (
  ...classRequests: (string | false | null | undefined)[]
): string => {
  let classNames = ''

  for (const className of classRequests) {
    classNames += className ? className + ' ' : ''
  }
  return classNames
}

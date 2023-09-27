import { forwardRef } from 'react'

//Dragging handle icon was extracted into a separate component for readability
export const DraggerIcon = forwardRef((props, ref) => (
  <svg ref={ref} {...props} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 40 20'>
    <rect x='0' y='2' width='40' height='4' rx='3' ry='3' fill='currentColor'/>
    <rect x='0' y='15' width='40' height='4' rx='3' ry='3' fill='currentColor'/>
  </svg>
))
DraggerIcon.displayName = 'DraggerIcon'
import { ReactNode } from 'react'
export const TableCell = ({ children, ...props }: {children?: ReactNode}) => (
  <td className='border border-x-0 border-slate-600 p-3' {...props}>{children}</td>
)

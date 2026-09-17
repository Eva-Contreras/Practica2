import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

export const Card = ({ children, header, footer }: CardProps) => {
  return (
    <article className="card">
      {header ? <header className="card__header">{header}</header> : null}
      {children}
      {footer ? <footer className="card__footer">{footer}</footer> : null}
    </article>
  )
}
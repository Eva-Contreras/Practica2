interface AvatarProps {
  firstName: string
  lastName: string
  imageUrl?: string
  size?: 'sm' | 'md' | 'lg'
}

const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
}

export const Avatar = ({ firstName, lastName, imageUrl, size = 'md' }: AvatarProps) => {
  const sizeClass = size === 'md' ? '' : ` avatar--${size}`
  const fullName = `${firstName} ${lastName}`

  return (
    <span className={`avatar${sizeClass}`} aria-hidden={imageUrl ? undefined : true}>
      {imageUrl ? (
        <img src={imageUrl} alt={fullName} />
      ) : (
        getInitials(firstName, lastName)
      )}
    </span>
  )
}
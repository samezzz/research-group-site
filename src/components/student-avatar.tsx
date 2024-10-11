import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StudentAvatarProps {
  name: string
  avatar: string
}

export function StudentAvatar({ name, avatar }: StudentAvatarProps) {
  return (
    <Avatar className="size-16">
      <AvatarImage src={avatar} alt={name} />
      <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
    </Avatar>
  )
}


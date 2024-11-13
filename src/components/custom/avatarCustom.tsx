import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarCustom(props: { photo: string, name: string }) {
  return (
    <Avatar>
      <AvatarImage src={props.photo} alt="avatar" />
      <AvatarFallback>{props.name}</AvatarFallback>
    </Avatar>
  )
}
import Link from "next/link"

interface MenuItemProps {
  text:string
  href:string
}

export default function MenuItem(props: MenuItemProps) {
  return <Link href={props.href}>{props.text}</Link>
}
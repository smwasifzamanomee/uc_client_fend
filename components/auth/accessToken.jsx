
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data } = useSession()
//   const token = data
  return data
}


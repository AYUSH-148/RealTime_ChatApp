import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <button onClick={() => signOut()}>Sign out</button>
  );
}

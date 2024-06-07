"use client";
import { useSession } from "next-auth/react";

export default function Providers() {
  const session = useSession();
  if (session.data?.user) {
    return <div>From client: Signed In</div>;
  } else {
    return <div>From client: Not Signed In</div>;
  }
}

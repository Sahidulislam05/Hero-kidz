"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";

const AuthButtons = () => {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="btn btn-ghost btn-sm">Loading...</div>;
  }

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  if (status === "loading") {
    return <div className="btn btn-ghost btn-sm">Loading...</div>;
  }

  if (status === "authenticated" && session?.user) {
    return (
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex flex-col items-end">
          <p className="text-sm font-semibold">{session.user.name || "User"}</p>
          <p className="text-xs text-gray-500">{session.user.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="btn btn-primary gap-2"
          title={`Logout ${session.user.email}`}
        >
          <BiLogOut className="text-lg" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <Link href="/login">
      <button className="btn btn-primary btn-outline gap-2">
        <BiLogIn className="text-lg" />
        <span className="hidden sm:inline">Login</span>
      </button>
    </Link>
  );
};

export default AuthButtons;

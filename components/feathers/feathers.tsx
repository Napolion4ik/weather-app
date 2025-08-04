"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function LinkHook({
  href,
  children,
  classes,
}: {
  href: string;
  children: React.ReactNode;
  classes: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const className = isActive ? "after:w-full" : "";

  return (
    <Link className={`${classes} ${className}`} href={href}>
      {children}
    </Link>
  );
}

export default LinkHook;

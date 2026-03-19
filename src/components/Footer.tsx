"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        &copy; <span suppressHydrationWarning>{year}</span> Agam Pathak. All rights reserved.
      </p>
      <Link href="/#top">Back to top</Link>
    </footer>
  );
}

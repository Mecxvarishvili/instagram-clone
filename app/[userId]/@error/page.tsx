import Link from 'next/link'
import React from 'react'

export default function NotFoundUser() {
  return (
    <div>
        <div>Sorry This page isn't available.</div>
        <span>
            The link you followed may be broken, or the page may have been removed.
            <Link href="/"> Go back to Instagram.</Link>
        </span>
    </div>
  )
}

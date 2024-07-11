import React from 'react'
import Link from 'next/link'

export default function LogInForm() {
  return (
    <div>
        <form>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit"> Log in</button>
        </form> 
        <div>
            <span>
                Don't have an account?
                <Link href="/accounts/signup" >Sign up</Link>    
            </span>
        </div>
    </div>
  )
}

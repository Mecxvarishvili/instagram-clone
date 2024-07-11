import React from 'react'
import Link from 'next/link'

export default function LogInForm() {
  return (
    <div className='flex justify-center border-1 mt-20' >
      <div className="flex flex-col items-center border py-3" >
        <div className="authorization-logo"></div>

        <form className="flex flex-col mx-10" >
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit"> Log in</button>
        </form>

        <div>
          <div></div>
          <div>OR</div>
          <div></div>
        </div>

        <div>
            <span>
                Don't have an account?
                <Link href="/accounts/signup" > Sign up</Link>    
            </span>
        </div>
      </div>
    </div>
  )
}

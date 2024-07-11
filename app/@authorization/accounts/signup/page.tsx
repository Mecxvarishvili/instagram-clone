import Link from "next/link";

export default function SignUpPage () {
    return (
        <div>
            <div>sign up</div>
            <div>
                <span>
                    Have an account? 
                    <Link href="/accounts/login">Log in</Link>
                </span>
            </div>
        </div>
    )
}
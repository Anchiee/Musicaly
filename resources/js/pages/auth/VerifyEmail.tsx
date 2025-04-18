import CardLayout from "@/Layouts/CardLayout"
import { Link } from "@inertiajs/react"

export default function VerifyEmail() {
    return(
        <CardLayout title="Verify email">
            <section className="size-full">
                <h1 className="text-violet uppercase tracking-wider font-bold text-lg">email verification</h1>
                <p>We've sent you email verification link. Your email has to be verified in order to proceed further</p>

                <p className="mt-4 font-semibold">Didn't get the link?</p>
                
                <Link className="bg-violet text-white py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity w-full" href="/email/verify" method="post">
                    Sent the link again
                </Link>
            </section>
        </CardLayout>
    )
}
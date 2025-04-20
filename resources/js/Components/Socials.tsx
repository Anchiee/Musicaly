import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@inertiajs/react"


export default function Socials() {
    return (
        <div className="flex justify-around border-b-[1px] border-gray-300 pb-4">
            <Link href="/github/redirect">
                <FontAwesomeIcon icon={faGithub} size="lg"/>
            </Link>
            <Link href="/gitlab/redirect">
                <FontAwesomeIcon icon={faGitlab} size="lg"/>
            </Link> 
        </div>
    )
}
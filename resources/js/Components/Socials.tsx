import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Socials() {
    return (
        <div className="flex justify-around border-b-[1px] border-gray-300 pb-4">
            <FontAwesomeIcon icon={faGithub} size="lg"/>
            <FontAwesomeIcon icon={faGitlab} size="lg"/>
        </div>
    )
}
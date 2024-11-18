import { FaFacebook } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

interface IProps {
  git: string;
  facebook: string;
}
const SocialMedia = (props: IProps) => {
  const { git, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a href={git} target="_blank" className="highlight" title="Git của Việt">
        <AiFillGithub size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Việt"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;

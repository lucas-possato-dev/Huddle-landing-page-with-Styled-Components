import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';
export default function SocialIcons() {

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <StyledSocialIcons>
      <li>
        <a onClick={handleClick} href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>  
      <li>
        <a onClick={handleClick} href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>  
      <li>
        <a onClick={handleClick} href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )

}
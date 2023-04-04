import React from 'react';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer class="footer">
          <div>
                <a href="https://github.com/bsovic23" target="_blank">< AiFillGithub class="icon" id="github-icon"/></a>
                <a href="https://www.linkedin.com/in/brit-sovic/" target="_blank">< AiFillLinkedin class="icon" id="linkedin-icon"/></a>
            </div>
          <div>
            &copy;2023 by Brit Sovic
          </div>
        </footer>
      );
}

export default Footer;
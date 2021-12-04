import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer (){

    const year = new Date().getFullYear();
    const iconStyle = { height:'40px', width:'40px', color: '#248fdb', marginRight:'10px' };


    return (
        <footer className="footer">
            <div className="social-links">
                    <a href="https://github.com/MayurSMahajan"><GitHubIcon sx={iconStyle}/></a>
                    <a href="https://www.linkedin.com/in/mayur-mahajan-596701215/"><LinkedInIcon className="icon" sx={iconStyle}/></a>
                    <a href="https://www.youtube.com/channel/UCN9Dnl0-fh1pTRI7gaPJJPg"><YouTubeIcon sx={iconStyle}/></a>
                    <a href="https://www.instagram.com/_whats_in_a.name_/"><InstagramIcon sx={iconStyle}/></a>
            </div>
            <p className="made-with-p" > Made with ❤️ and React JS</p>
            <p className="copyright" > &copy; Mayur Mahajan {year}</p>
        </footer>
    );
}

export default Footer;
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default {
    name: 'Sean Liebel',
    title: 'Full stack developer',

    birthday: '05th June 1985',
    email: 'seanliebel@gmail.com',
    address: '456 test St',
    phone: '123 456 7890',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com',
            text: 'SeanIsCoding',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: 'https://www.twitter.com',
            text: 'MyTwitter',
            icon: <TwitterIcon />
        },
        LinkedIn: {
            link: 'https://www.linkedin.com',
            text: 'MyLinkedin',
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: 'https://www.github.com',
            text: 'MyGithub',
            icon: <GitHubIcon />
        }
    }
}
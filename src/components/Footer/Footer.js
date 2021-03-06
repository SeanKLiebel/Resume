import React from 'react'
import {Typography} from '@material-ui/core'
import resumeData from '../../Utils/resumeData'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">{resumeData.name}</Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">
                    Designed and developed by{" "} <a href="/" target="_blank">Sean Liebel</a>
                    <br/>
                    Clone idea from <a href="https://themeforest.net/user/tavonline"target="_blank">Travonline</a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer

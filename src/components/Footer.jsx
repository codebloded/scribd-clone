import React from 'react'
import LinkBox from "./LinkBox";
import "../footer.css"
import Apple from "../assets/apl.svg"
import Play from "../assets/an.svg"

const ColoredLine = ({ color }) => (
    <hr style={{
            color: color,
            backgroundColor: color,
            height: 2,
            
        }}
    />
)

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="root">

                <div className="link_main">

                <div className="linkx">
                    <h4>About</h4>
                    <LinkBox name="About Scribd" />
                    <LinkBox name="Press" />
                    <LinkBox name="Our Blog" />
                    <LinkBox name="Join our team!" />
                    <LinkBox name="Contact us" />
                    <LinkBox name="Invite friends" />
                    <LinkBox name="Gifts" />
                    <LinkBox name="Scribd Enterprise" />
                </div>
                <div className="linkx">
                    <h4>Support</h4>
                    <LinkBox name="Help / FAQ" />
                    <LinkBox name="Accessibility" />
                    <LinkBox name="Purchase help" />
                    <LinkBox name="AdChoices" />
                    <LinkBox name="Publishers" />

                </div>
                <div className="linkx">
                    <h4>Legal</h4>
                    <LinkBox name="Terms" />
                    <LinkBox name="Privacy" />
                    <LinkBox name="Condition" />

                </div>
                <div className="linkx">
                    <h4>Social</h4>
                    <LinkBox name="Instagram" />
                    <LinkBox name="Twitter" />
                    <LinkBox name="Facebook" />
                    <LinkBox name="Pinterest" />

                    </div>
                <div className="promo">
                <h4>Get Our free Apps</h4>
                <img src={Apple} alt="app"/>
                <img src={Play} alt="app"/>
                </div>
            </div>


            </div>
            <ColoredLine color="grey"/>
          <div className="bottom">
           
                <li>Books</li>
                <li>AudioBooks</li>
                <li>Magazines</li>
                <li>Podcasts</li>
                <li>Sheet Music</li>
                <li>Documents</li>
                <li>Snapshots</li>
                <li>Directory</li>
          </div>
        </div>
          </>
    )
}
export default Footer;
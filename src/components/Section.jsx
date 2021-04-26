import React from "react"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HeadsetIcon from '@material-ui/icons/Headset';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import DescriptionIcon from '@material-ui/icons/Description';
import '../section.css'

const Section = () => {
    return (
        <React.Fragment>

        <div className="section_main">
            <div className="head">
                <h1>All in one simple subscription</h1>
            </div>
            <div className="icons">

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "4px" }}>
                    <LibraryBooksIcon fontSize="large" color="primary" />
                    <h5>Books</h5>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <HeadsetIcon fontSize="large" color="primary" />
                    <h5>Audiobooks</h5>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <MenuBookIcon fontSize="large" color="primary" />
                    <h5>Magazines</h5>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <SettingsVoiceIcon fontSize="large" color="primary" />
                    <h5>Podcasts</h5>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <MusicNoteIcon fontSize="large" color="primary" />
                    <h5>Sheet Music</h5>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <DescriptionIcon fontSize="large" color="primary" />
                    <h5>Document</h5>
                </div>
                
            </div>
            <div className="quote_main">
                    
                <h2>"Scribd is overall the best and most convenient deal for online reading.</h2>
                    <p>Business Insider</p>
            </div>
              
        </div>
        </React.Fragment>
    )
}
export default Section;

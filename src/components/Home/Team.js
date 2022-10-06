import './Team.css'

const Team = () => {

    return(
        <div className="team">
            <h2>Our Crew</h2>
            <div className="members">
                <div className="member">
                    <img src="/images/red_eyes.png" alt="Space Foods Company Red Eyes"/>
                    <h3>Ryan</h3>
                    <h4>Specialty: Operations</h4>
                </div>
                <div className="member">
                    <img src="/images/light_blue_eyes.png" alt="Space Foods Company Light Blue Eyes"/>
                    <h3>Stephen</h3>
                    <h4>Specialty: Tech</h4>
                </div>
                <div className="member">
                    <img src="/images/black_eyes.png" alt="Space Foods Company Black Eyes"/>
                    <h3>Tyler</h3>
                    <h4>Specialty: Art</h4>
                </div>
                <div className="member">
                    <img src="/images/orange_eyes.png" alt="Space Foods Company Orange Eyes"/>
                    <h3>Maria</h3>
                    <h4>Specialty: Marketing</h4>
                </div>
                <div className="member">
                    <img src="/images/green_eyes.png" alt="Space Foods Company Green Eyes"/>
                    <h3>Jon</h3>
                    <h4>Specialty: Music</h4>
                </div>
                <div className="member">
                    <img src="/images/yellow_eyes.png" alt="Space Foods Company Yellow Eyes"/>
                    <h3>Ben</h3>
                    <h4>Specialty: Finance</h4>
                </div>
                <div className="member">
                    <img src="/images/blue_eyes.png" alt="Space Foods Company Blue Eyes"/>
                    <h3>Cam</h3>
                    <h4>Specialty: Babying</h4>
                </div>
            </div>
        </div>
    );



}

export default Team;
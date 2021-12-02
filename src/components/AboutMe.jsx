import React from 'react';
import AttributeDiv from './AttributeDiv';
import { AttributeData } from './AttributeData';


function AboutMe() {
    return <div id="about-me">
        <h1 className="about-me-heading"> About Me </h1>
        <div className="about-me-container">
            <div className="profile">
                <div className="profile-image">
                    <img src="images/profile.jpeg" alt="profile-image" />
                </div>
                <div className="profile-info">
                    <h2>Mayur S. Mahajan</h2>
                    <p>Hi! I'm Mayur, a Developer, experienced in Web and App development. I am currently learning
                    Data Science and Machine Learning. I'm an ardent believer of the learn-by-doing approach.</p>

                    <p>I have done tons of software development projects over the years.
                    I also worked as Full Stack Development Intern at Value Wealth Creators (http://valuewealthcreator.herokuapp.com/).
                    I have a youtube channel where I try to 
                    solve frontend challenges like.</p>

                    <p>I spend most of my time learning new technologies and frameworks. I like to do competitive programming and solve algorithm-related problems on
                    Codechef. When I am not coding, I like to design UI/UX on Figma.  </p>

                    <p>In my free-time I listen to music. I am a huge supporter of Manchester United FC and Mumbai Indians.
                    I am a casual reader. But generally you will find me watching a movie or a series.
                    </p>

                </div>
                
            </div>
            <div className="attributes">
                {AttributeData.map(attribute =>
                    <AttributeDiv
                        key={attribute.id}
                        name={attribute.name}
                        content={attribute.content} />)

                }

            </div>
        </div>
    </div>
}

export default AboutMe;
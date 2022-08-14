import React from 'react';
import AttributeDiv from './AttributeDiv';
import { AttributeData } from './AttributeData';


function AboutMe() {
    return <div id="about-me">
        <h1 className="about-me-heading"> About Me </h1>
        <div className="about-me-container">
            <div className="profile">
                <div className="profile-image">
                    <img src="images/profile.jpeg" alt="profile" />
                </div>
                <div className="profile-info">
                    <h2>Mayur S. Mahajan</h2>
                    <p>Hi! I'm Mayur, a Developer, experienced in Web and App development. I am currently learning WEB3.0 development with ICP. I'm an ardent believer in the learn-by-doing approach.</p>

                    <p className="additional-about">I have done tons of software development projects over the years. I also worked as a Flutter Development Intern and Full Stack Development Intern. I have a youtube channel where I try to solve front-end challenges.</p>

                    <p className="additional-about">I spend most of my time learning new technologies and frameworks. I like to do open source contributions. I've contributed to Flutter WebRTC package, to React Docs and other interesting Open Source Projects. When I am not coding, I like to design UI/UX on Figma. </p>

                    <p className="additional-about">In my free time, I listen to music. I am a huge fan of Manchester United FC and Mumbai Indians. I am a casual reader, my favourite book is Atomic Habits by James Clear. But most often, you will find me watching a movie or a series.</p>

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

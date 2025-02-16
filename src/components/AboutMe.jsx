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
                    <p>Hi! I'm Mayur, a Software Developer, experienced in Web and App development. I am currently learning NextJS. I'm an ardent believer in the learn-by-doing approach.</p>

                    <p className="additional-about">I have done tons of software development projects over the years. I have a youtube channel where I try to solve front-end challenges.</p>

                    <p className="additional-about">I spend most of my time learning new technologies. I like to do open source contributions. I've contributed to AppFlowy, Flutter WebRTC package, to React Docs and other interesting Open Source Projects. When I am not coding, I like to design UI/UX on Figma. </p>

                    <p className="additional-about">In my free time, I listen to sufi music. I am a casual reader. Check what I am reading currently on [Goodreads](https://www.goodreads.com/user/show/176169282-mayur-mahajan), my favourite book is The God of Small Things by Arundhati Roy. I am a huge fan of Manchester United FC and Mumbai Indians. But most often, you will find me watching a movie or a series.</p>

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

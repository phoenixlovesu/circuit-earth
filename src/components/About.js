//About page
import React from 'react';
import NavBar from './NavBar';


const About = () => {
    return (
        <div>
            <NavBar />
            <main>
                <h1>About Circuit Earth</h1>
                <p>
                    Project Circuit Earth is dedicated to addressing critical environmental and social issues facing our planet today.
                    Our aim is to raise awareness and drive action towards creating a sustainable future for all.
                </p>

                <h2>Mission Statement</h2>
                <p>
                    Our mission is to promote environmental sustainability, social equality, and economic empowerment through
                    innovative solutions and community engagement.
                </p>

                <h2>Key Issues We Address</h2>
                <ul>
                    <li>
                        <strong>Environmental Sustainability:</strong> Tackling climate change, reducing pollution, and protecting natural resources.
                    </li>
                    <li>
                        <strong>Economic Challenges:</strong> Addressing poverty, inequality, and providing resources for economic empowerment.
                    </li>
                    <li>
                        <strong>Social Issues:</strong> Supporting community initiatives, education, and health services for marginalized populations.
                    </li>
                </ul>

                <h2>Why This Matters</h2>
                <p>
                    The challenges we face today have far-reaching consequences. By addressing these issues, we can create a more
                    equitable and sustainable world. Did you know that over 800 million people live in extreme poverty? Or that
                    climate change could displace millions in the coming decades? It's time to take action!
                </p>

                <h2>Get Involved</h2>
                <p>
                    Join us in our mission to make a difference! Whether you want to share this project, contribute ideas, or
                    participate in our initiatives, every action counts. Together, we can create a brighter future for our planet.
                </p>
            </main>
        </div>
    );
};

export default About;

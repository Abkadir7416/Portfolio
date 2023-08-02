import React from "react";
import { BsLinkedin } from "react-icons/bs";
import {FaTwitter} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import '../styles/Home.css';


function Home () {
    return(
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Abdul Kadir</h2>
                <div className="prompt">
                    <p>A Software developer with a passion for learning and creating.</p>
                    <BsLinkedin />
                    <BsInstagram />
                    <BsFacebook />
                    <FaTwitter />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                        HTML, CSS, JavaScript, ReactJS, Angular, React Native,Flutter, Ionic, NPM, Bootstrap, Redux, TailwindCSS, Material-UI, Yarn, styleComponents.
                        </span>
                    </li>
                <li className="item">
                        <h2>Back-End</h2>
                        <span>
                        Node.js, Expressjs, .NET, Java Spring, GraphQL, ApolloServer, MySQL, MongoDB, DynamicDB, DigitalOcean, AWS S3, MS SQL
                        </span>
                    </li>
                <li className="item">
                        <h2>Languages</h2>
                        <span>
                        JavaScript, Python, Java, C#, C++, C, TypeScript, Go.
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
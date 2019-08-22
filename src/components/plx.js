import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import bg1 from '../images/sq.jpg'
import HTML5 from '../images/html5-brands.svg'
import CSS3 from '../images/css3-alt-brands.svg'
import js from '../images/js-brands.svg'
import nep from '../images/nep.png'
import peggy from '../images/peggysky.png'
import stars from './stars.js'



class Plx extends Component {

    render() {
        
        return (

            <Parallax ref={ref => (this.parallax = ref)} pages={5} >
                <ParallaxLayer offset={0} speed={0} style={{
                    background:'linear-gradient(0deg, rgba(106,162,219,1) 0%,rgba(25,0,150,1) 55%)' }} />
                <ParallaxLayer offset={0} speed={0}>
                    <svg id="svgCanvas" viewbox="0 0 2000 1000" preserveaspectratio="xMinYMin slice" width="100%" height="100%">
                        <g id="starGroup"></g>
                    </svg>
                    </ParallaxLayer> 
            
                <ParallaxLayer offset={1} speed={0} style={{background:'linear-gradient(0deg, rgba(192, 224, 247, 1) 0%,rgba(106, 162, 219, 1) 89%)'}} />
                <ParallaxLayer offset={2} speed={0} style={{ background:'linear-gradient(180deg, rgba(192, 224, 247, 1) 52%, rgba(247, 227, 249, 1) 82%)' }} />
                <ParallaxLayer offset={3} speed={0} style={{ background:'linear-gradient(180deg, rgba(247,227,249,1) 13%, rgba(11,112,199,1) 43%, rgba(19,92,198,1) 70%)' }} /> 
                <ParallaxLayer offset={3} speed={0} >
                    <div class="ocean">
                        <div class="wave"></div>
                        <div class="wave"></div>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={4} speed={0} style={{ background:'linear-gradient(180deg, rgba(19, 92, 198, 1) 0%, rgba(25, 0, 150, 1) 65%)' }} />

                <ParallaxLayer offset={0.3} speed={0.2}> 
                    <div style={{ textAlign: 'center', color: '#fff' }}>
                        <h1 className="title"> Jennifer Chow </h1>
                        <p className="statement"> I am a design-oriented developer making interactive experiences come to life.   </p>
                    </div>
                </ParallaxLayer>
                

                <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 1.0 }}>
                    <img src={`${nep}`} style={{ display: 'block', width: '20%', marginLeft: '10%', marginTop: '8%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Skills </h1>
                        <p className="statement"> I have skillz   </p>
                        <ul>
                        <li> Software: Atom, Visual Studio Code, Microsoft Office, Dreamweaver, Photoshop, After Effects, Premiere Pro </li>
                        <li> Languages and Frameworks: HTML, CSS, JavaScript,  Ruby, Ruby on Rails, Node.js/Express.js, Bootstrap </li>
                        <li> Other Technical: Git, Github, Bash CLI, PostgresSQL, Heroku, WordPress, MacOSX/Windows </li>
                        </ul>

                    <p> This very page is made with Gatsby, React and React-Spring! <a href="https://github.com/jennego/digi-resume"> See code for this site on Github.</a></p>
                    </div>

                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 1.0 }}>
                    <img src={`${peggy}`} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                </ParallaxLayer> 


                <ParallaxLayer offset={1} speed={1} style={{ opacity: 0.7 }}>
                    <img src={`${HTML5}`} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={`${CSS3}`} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                    <img src={`${js}`} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
                </ParallaxLayer>


                <ParallaxLayer offset={2} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Education </h1>
                        <p className="statement"> I have education!   </p>
                        <h3> CodeCore Bootcamp </h3>
                        <h3> Simon Fraser University </h3> 
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Hobbies </h1>
                        <p className="statement"> Away from the computer, I enjoy horseback riding, photography and being a weirdo.   </p>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={4} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Contact </h1>
                        <p className="statement"> Contact form </p>
                    </div>
                </ParallaxLayer>


                

        </Parallax> 

        )}
    }


    export default Plx 
    

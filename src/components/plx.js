import React, {Component} from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import bg1 from '../images/sq.jpg'
import HTML5 from '../images/html5-brands.svg'
import CSS3 from '../images/css3-alt-brands.svg'
import js from '../images/js-brands.svg'

// Little helpers ...
// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


class Plx extends Component {
    render() {
        return (

            
        
            <Parallax ref={ref => (this.parallax = ref)} pages={5}>
                <ParallaxLayer offset={0} speed={0} style={{ backgroundImage: `url(${bg1})`, backgroundSize:'cover'}}>
                
                </ParallaxLayer>
                <ParallaxLayer offset={1} factor={2} speed={0} style={{ backgroundColor: '#fff' }} />
                <ParallaxLayer offset={2} factor={1.5} speed={0} style={{ backgroundColor: '#d47508' }} />
                <ParallaxLayer offset={3} speed={0} style={{ backgroundColor: '#87BCDE' }} > 
                </ParallaxLayer>
                <ParallaxLayer offset={4} factor={1.5} speed={0} style={{ backgroundColor: '#9f60f7' }} />

                <ParallaxLayer offset={0.3} speed={0.5}> 
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Jennifer Chow </h1>
                        <p className="statement"> I am a design-oriented developer making interactive experiences come to life.   </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.3}>
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


                <ParallaxLayer offset={1} speed={1} style={{ opacity: 0.9 }}>
                    <img src={`${HTML5}`} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={`${CSS3}`} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                    <img src={`${js}`} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
                </ParallaxLayer>


                <ParallaxLayer offset={2} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Education </h1>
                        <p className="statement"> I have education!   </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Hobbies </h1>
                        <p className="statement"> I am a horse!  </p>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={4} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Contact </h1>
                        <p className="statement"> I am a horse!  </p>
                    </div>
                </ParallaxLayer>


                



                {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '10%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer> */}


                {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer> 

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '0%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true)
                    }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('server')} style={{ width: '20%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('bash')} style={{ width: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer>  
     */}
            </Parallax> 

        )}
    }

    export default Plx 
    

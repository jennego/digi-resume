import React from 'react'

function Footer() {
    return (
        <div class="footer"> 


            <nav class="navbar navbar-expand navbar-dark fixed-bottom ">
                <div class="container justify-content-center">
                    <div class="d-flex flex-column flex-wrap" id="navbarCollapse">
                        <ul class="navbar-nav mx-auto text-center">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"> Resume <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://jenniferchow.ca">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://blog.jennego.com">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://github.com/jennego"> <i class="fab fa-github"></i> Github</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://linkedin.com/in/jennego"> <i class="fab fa-linkedin"></i> LinkedIn</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://instagram.com/thejennego"> <i class="fab fa-instagram"></i> Instagram</a>
                            </li>
                        </ul>
                        <div class="navbar-text mx-auto"> <small> Copyright. 2019. Stars and planets from <a href="http://obsidiandawn.com"> Obsidian Dawn Photoshop Brushes</a>. Wave from <a href="https://codepen.io/tedmcdo/pen/PqxKXg">Ted McDonald on CodePen</a>.  </small> </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Footer

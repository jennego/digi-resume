import React from 'react'

function Footer() {
    return (
        <div> 
            <nav class="navbar navbar-expand-lg fixed-bottom navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto   text-center">
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
                </div>
            </nav>
        </div>
    )
}

export default Footer

class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
        <a class="navbar-brand" href="index.html">My Foodie</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login.html">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="register.html">Register</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">More</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <a class="dropdown-item" href="about-us.html">About Us</a>
                        <a class="dropdown-item" href="contact-us.html">Contact Us</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`;
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="background-color: gray;">
        <div>
            <nav class="navbar navbar-expand navbar-light bg-light">
                <ul class="nav navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Back To Top<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about-us.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact-us.html">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div style="background-color: lightgray;">
            <p style="text-align: right;">Follow us on Social Media
                <a href="https://www.facebook.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg" alt="facebook"
                        style="width: 50px;">
                </a>
                <a href="https://www.instagram.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                        alt="instagram" style="width: 50px;">
                </a>
                <a href="https://twitter.com/">
                    <img src="data:image/png;base64,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"
                        alt="twitter" style="width: 50px;">
                </a>
            </p>
        </div>

        <div>
            <h4 style="text-align: center;">All Copyrights Reserved, 2022</h4>
        </div>
    </div>`;
    }
}


customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);
const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function() {
    header.innerHTML = `
        <div class="logo"><img src="/images/PinkWatermark.png"></div>
        <ul>
            <div class="dropdown">
                <button>▼ Creations</button>
                    <div class="dropdown-content">
                        <a href="/artncraft/DA.html" class="no-underline">Digital Art</a>
                        <a href="/artncraft/videos.html" class="no-underline">Videos</a>
                        <a href="/artncraft/3DA.html" class="no-underline">3D Art</a>
                        <a href="/artncraft/crafts.html" class="no-underline">Crafts</a>
                        <a href="/artncraft/CW.html" class="no-underline">Commissioned Work</a>
                    </div>
            </div>


            <li><a href="/artncraft/aac.html" class="no-underline">About</a></li>
            <li><a href="/contact.html" class="no-underline">Contact</a></li>
        </ul>
    `;

    footer.innerHTML = `
        <div class="left-footer"> <img src="https://cdn.nookazon.com/128x128/nookazon/MenuIcon/Turip3.png"> </div>
            <div id="footer" class="middle-footer">
                <p>✉ overrain.arts@gmail.com <br> © 2026 OverRain's Art Gallery</p>
            </div>
            <div class="right-footer"><img src="https://cdn.nookazon.com/128x128/nookazon/MenuIcon/Turip3.png"></div>
        </footer>
    `;
});
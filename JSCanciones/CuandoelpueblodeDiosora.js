﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />// Cuando el pueblo de Dios ora,<br /><br />suceden cosas,<br /><br />suceden cosas maravillosas //<br /><br /><br /><br />// Hay sanidad, hay salvación<br /><br />y se siente la presencia del Señor //<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />// Cuando el <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Lam</span></span>blo de Dios ora,<br /><br />su<span class="syllable" style="text-decoration: underline;">ce<span class="note" data-notation="Latina">Do</span></span>den <span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Mi</span></span>sas, su<span class="syllable" style="text-decoration: underline;">ce<span class="note" data-notation="Latina">Do</span></span>den <span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Mi</span></span>sas maravi<span class="syllable" style="text-decoration: underline;">llo<span class="note" data-notation="Latina">Lam</span></span>sas //<br /><br /><br /><br />// Hay sani<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Rem</span></span>, hay salva<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Lam</span></span><br /><br />y se <span class="syllable" style="text-decoration: underline;">sien<span class="note" data-notation="Latina">Mi</span></span>te la presencia del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Lam</span></span> //<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Cuando el pueblo de Dios ora" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/construye-tu-casa-sobre-la-roca.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">31. Construye tu casa sobre la roca</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/demos-gracias.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">33. Demos gracias</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">// Cuando el pueblo de Dios ora,<br />suceden cosas,<br />suceden cosas maravillosas //<br /></p><p class="InterlineadoLetra">// Hay sanidad, hay salvación<br />y se siente la presencia del Señor //<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">// Cuando el <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Lam</span></span></span>blo de Dios ora,<br />su<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ce<span class="note" data-notation="Latina">Do</span></span></span>den <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Mi</span></span></span>sas, su<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ce<span class="note" data-notation="Latina">Do</span></span></span>den <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Mi</span></span></span>sas maravi<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">llo<span class="note" data-notation="Latina">Lam</span></span></span>sas //<br /></p><p class="InterlineadoGuitarra">Hay sani<span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Rem.png' alt="Rem"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Rem</span></span></span>, hay salva<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Lam</span></span></span><br />y se <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">sien<span class="note" data-notation="Latina">Mi</span></span></span>te la presencia del Se<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Lam</span></span></span> <span class="chord" data-tabsaurus="La7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La7.png' alt="La7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La7</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra">Hay sani<span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Rem.png' alt="Rem"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Rem</span></span></span>, hay salva<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Lam</span></span></span><br />y se <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">sien<span class="note" data-notation="Latina">Mi</span></span></span>te la presencia del Se<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Lam</span></span></span><br /></p><p class="InterlineadoGuitarra"></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Cuando el pueblo de Dios ora" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/construye-tu-casa-sobre-la-roca.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">31. Construye tu casa sobre la roca</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/demos-gracias.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">33. Demos gracias</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


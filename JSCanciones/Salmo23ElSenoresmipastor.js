﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">//El Señor es mi pastor<br />nada me faltará//<br /></p><p class="InterlineadoLetra">//Aunque yo ande en valles de sombra y de muerte//<br /></p><p class="InterlineadoLetra">//No temeré, no temeré, no temeré mal alguno//<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra">// <span class="syllable" style="text-decoration: underline;">El<span class="note" data-notation="Latina">Do</span></span> Señor es <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Mim</span></span> pastor<br /><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Fa</span></span>da me falta<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Sol</span></span>//<br /></p><p class="InterlineadoGuitarra">//<span class="syllable" style="text-decoration: underline;">Aun<span class="note" data-notation="Latina">Do</span></span>que yo <span class="syllable" style="text-decoration: underline;">an<span class="note" data-notation="Latina">Mim</span></span>de en <span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Fa</span></span>lles de sombra y de <span class="syllable" style="text-decoration: underline;">muer<span class="note" data-notation="Latina">Sol</span></span>te//<br /><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">Do</span></span> temeré, <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Mim</span></span> temeré, <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Fa</span></span> temeré mal al<span class="syllable" style="text-decoration: underline;">gu<span class="note" data-notation="Latina">Sol</span></span>no<br /><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">Do</span></span> temeré, <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Mim</span></span> temeré, <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Fa</span></span> temeré mal al<span class="syllable" style="text-decoration: underline;">gu<span class="note" data-notation="Latina">Sol</span></span>&emsp;-<span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Do</span></span><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Salmo 23 - El Señor es mi pastor" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/volvera.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">57. Volverá</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">El hombre que anduvo en Galilea<br />se llamaba Jesús de Nazareth<br />ahora está conmigo, renueva así mi vida<br />y aumenta cada día más y más mi fe.<br /></p><p class="InterlineadoLetra">Fe más fe, amor más amor<br />quien no tenga pida al Salvador.<br />pues sin fe, pues sin amor,<br />no puede agradar al Señor.<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">El <span class="syllable" style="text-decoration: underline;">hom<span class="note" data-notation="Latina">Re</span></span>bre que anduvo en Galilea<br />se llamaba Jesús de Naza<span class="syllable" style="text-decoration: underline;">reth<span class="note" data-notation="Latina">La</span></span><br />a<span class="syllable" style="text-decoration: underline;">ho<span class="note" data-notation="Latina">La</span></span>ra está conmigo, renueva así mi vida<br />y aumenta cada día más y más mi <span class="syllable" style="text-decoration: underline;">fe<span class="note" data-notation="Latina">Re</span></span>.<br /></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Fe<span class="note" data-notation="Latina">Re</span></span> más fe, a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span> más amor<br /><span class="syllable" style="text-decoration: underline;">quien<span class="note" data-notation="Latina">Re</span></span> no tenga <span class="syllable" style="text-decoration: underline;">pi<span class="note" data-notation="Latina">La</span></span>da al Salvador.<br /><span class="syllable" style="text-decoration: underline;">pues<span class="note" data-notation="Latina">Re</span></span> sin fe, <span class="syllable" style="text-decoration: underline;">pues<span class="note" data-notation="Latina">Sol</span></span> sin amor,<br />no <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Re</span></span>de agra<span class="syllable" style="text-decoration: underline;">dar<span class="note" data-notation="Latina">La</span></span> al Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span>.<br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="El hombre que anduvo en Galilea" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/el-es-senor-jehova.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">35. Él es Señor Jehová</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/en-el-gran-mar.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">37. En el gran mar</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


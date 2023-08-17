﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">// Dios está aquí. Aleluya.<br />Tan cierto como el aire que respiro<br />Tan cierto como la mañana se levanta<br />Tan cierto como yo te hablo<br />y me puedes oír //<br /></p><p class="InterlineadoLetra">Lo puedes sentir<br />en este mismo instante<br />Lo puedes sentir<br />muy cerca de tu corazón<br />Te puede ayudar,<br />con ese problema que tienes<br />Jesús está aquí,<br />y si tú quieres lo puedes sentir<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">//<span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span> es<span class="syllable" style="text-decoration: underline;">tá<span class="note" data-notation="Latina">La</span></span> a<span class="syllable" style="text-decoration: underline;">quí<span class="note" data-notation="Latina">Sim</span></span><br />Tan <span class="syllable" style="text-decoration: underline;">cier<span class="note" data-notation="Latina">Sol</span></span>to como el aire <span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">La</span></span> respi<span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Re</span></span><br />Tan <span class="syllable" style="text-decoration: underline;">cier<span class="note" data-notation="Latina">Sol</span></span>to como la ma<span class="syllable" style="text-decoration: underline;">ña<span class="note" data-notation="Latina">La</span></span>na se le<span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Re</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">an<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Sim</span></span><br />Tan <span class="syllable" style="text-decoration: underline;">cier<span class="note" data-notation="Latina">Sol</span></span>to como yo te <span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">La</span></span>blo y me puedes o<span class="syllable" style="text-decoration: underline;">ír<span class="note" data-notation="Latina">Re</span></span>//<br /></p><p class="InterlineadoGuitarra">Lo puedes sen<span class="syllable" style="text-decoration: underline;">tir<span class="note" data-notation="Latina">La</span></span> en este mismo ins<span class="syllable" style="text-decoration: underline;">tan<span class="note" data-notation="Latina">Re</span></span>te<br />Lo puedes sen<span class="syllable" style="text-decoration: underline;">tir<span class="note" data-notation="Latina">La</span></span> muy cerca de tu cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Re</span></span><br />Te puede ayu<span class="syllable" style="text-decoration: underline;">dar<span class="note" data-notation="Latina">La</span></span> con ese problema que <span class="syllable" style="text-decoration: underline;">tie<span class="note" data-notation="Latina">Re</span></span>nes<br />Jesús está <span class="syllable" style="text-decoration: underline;">aquí<span class="note" data-notation="Latina">La</span></span> y si tu <span class="syllable" style="text-decoration: underline;">quie<span class="note" data-notation="Latina">Sol</span></span>res lo <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">La</span></span>des sen<span class="syllable" style="text-decoration: underline;">tir<span class="note" data-notation="Latina">Re</span></span><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Dios está aquí" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/demos-gracias.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">33. Demos gracias</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/el-es-senor-jehova.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">35. Él es Señor Jehová</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


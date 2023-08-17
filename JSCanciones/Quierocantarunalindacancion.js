﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Quiero cantar una linda canción<br /><br />de un hombre que me transformó,<br /><br />quiero cantar una linda canción<br /><br />de aquel que mi vida cambió.<br /><br /><br /><br />CORO:<br /><br />&emsp;Es mi amigo Jesús, es mi amigo Jesús.<br /><br />&emsp;El es Dios, el es Rey, es amor y verdad,<br /><br />&emsp;solo en Él encontré esa paz que busqué,<br /><br />&emsp;solo en Él encontré la felicidad.<br /><br /><br /><br />Quiero invitarte para que conozcas<br /><br />a Cristo mi Rey y Señor,<br /><br />quiero que sientas el gozo de ver<br /><br />su bondad y su grande amor.<br /><br /><br /><br />CORO:<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><span class="syllable" style="text-decoration: underline;">Quie<span class="note" data-notation="Latina">La</span></span>ro cantar una linda canción<br /><br />de un <span class="syllable" style="text-decoration: underline;">hom<span class="note" data-notation="Latina">Re</span></span>bre que me transfor<span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">Mi</span></span>,<br /><br /><span class="syllable" style="text-decoration: underline;">quie<span class="note" data-notation="Latina">La</span></span>ro cantar una linda canción<br /><br />de a<span class="syllable" style="text-decoration: underline;">quel<span class="note" data-notation="Latina">Re</span></span> que mi vida cam<span class="syllable" style="text-decoration: underline;">bió<span class="note" data-notation="Latina">La</span></span>.<br /><br /><br /><br /><b>CORO</b>:<br /><br />&emsp;Es mi a<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">La</span></span>go Jesús, <br /><br />&emsp;es mi a<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span>go Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi</span></span>.<br /><br />&emsp;El es <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span>, el es <span class="syllable" style="text-decoration: underline;">Rey<span class="note" data-notation="Latina">Re</span></span>, <br /><br />&emsp;es amor y ver<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Mi</span></span>,<br /><br />&emsp;solo en <span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">La</span></span> encontré <br /><br />&emsp;esa <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Re</span></span> que bus<span class="syllable" style="text-decoration: underline;">qué<span class="note" data-notation="Latina">Mi</span></span>,<br /><br />&emsp;solo en <span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">La</span></span> encontré <br /><br />&emsp;la fe<span class="syllable" style="text-decoration: underline;">li<span class="note" data-notation="Latina">Re</span></span><span class="syllable" style="text-decoration: underline;">ci<span class="note" data-notation="Latina">Mi</span></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">La</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Quie<span class="note" data-notation="Latina">La</span></span>ro invitarte para que conozcas<br /><br />a <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to mi Rey y Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mi</span></span>,<br /><br /><span class="syllable" style="text-decoration: underline;">quie<span class="note" data-notation="Latina">La</span></span>ro que sientas el gozo de ver<br /><br />su bon<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Re</span></span> y su grande a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Mi</span></span>.<br /><br /><br /><br /><b>CORO</b>:<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Quiero cantar una linda canción" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/que-no-se-apague-el-fuego.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">50. Que no se apague el fuego</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/renuevame.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">52. Renuévame</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


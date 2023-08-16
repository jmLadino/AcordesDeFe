﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />// Alelu, Alelu, Alelu, Aleluya<br /><br />Gloria a Dios //<br /><br /><br /><br />/// Gloria a Dios Aleluya ///<br /><br />Gloria a Dios<br /><br /><br /><br />// Alelu, Alelu, Alelu, Aleluya<br /><br />Gloria a Dios //<br /><br /><br /><br />/// Gloria a Dios Aleluya ///<br /><br />Gloria a Dios<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>ya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span> a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><br /><br /><br /><br />Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>ya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span> a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa#m</span></span> Aleluya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span> Aleluya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa#m</span></span> Aleluya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span><br /><br /><br /><br />Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>ya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span> a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><br /><br /><br /><br />Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span>, Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span>ya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span> a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa#m</span></span> Aleluya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span> Aleluya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa#m</span></span> Aleluya<br /><br /><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span>ria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Alelu, alelu, aleluya" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/alabare.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">19. Alabaré</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/al-lado-de-jesus.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">21. Al lado de Jesús</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


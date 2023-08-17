﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Puedo confiar en el Señor<br /><br />que me va a guiar,<br /><br />Puedo confiar en el Señor<br /><br />no me va a fallar.<br /><br />Si el sol llegara a oscurecer<br /><br />y no brille más<br /><br />yo igual confío en el Señor<br /><br />no me va a fallar.<br /><br /><br /><br />Puedo descasar, puedo descasar<br /><br />y una mansión, Cristo me dará<br /><br />Si el sol llegara a oscurecer<br /><br />y no brille más<br /><br />yo igual confío en el Señor<br /><br />no me va a fallar.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br />(cejillo en el traste 1, tonalidad inicial)<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Pue<span class="note" data-notation="Latina">Do</span></span>do confiar en el Señor<br /><br />que me va a gui<span class="syllable" style="text-decoration: underline;">ar<span class="note" data-notation="Latina">Sol</span></span>,<br /><br />Puedo con<span class="syllable" style="text-decoration: underline;">fiar<span class="note" data-notation="Latina">Fa</span></span> en el Señor<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><br /><br />no me va a fa<span class="syllable" style="text-decoration: underline;">llar<span class="note" data-notation="Latina">Do</span></span>.<br /><br />Si el sol llegara a oscurecer<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span><br /><br />y no brille <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Fa</span></span><br /><br />yo igual con<span class="syllable" style="text-decoration: underline;">fío<span class="note" data-notation="Latina">Sol</span></span> en el Señor<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa</span></span><br /><br />no me va a fa<span class="syllable" style="text-decoration: underline;">llar<span class="note" data-notation="Latina">Do</span></span>.<br /><br />Puedo desca<span class="syllable" style="text-decoration: underline;">sar<span class="note" data-notation="Latina">Sol</span></span>, puedo desca<span class="syllable" style="text-decoration: underline;">sar<span class="note" data-notation="Latina">Do</span></span><br /><br />y una man<span class="syllable" style="text-decoration: underline;">sión<span class="note" data-notation="Latina">Sol</span></span>, Cristo me da<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Do</span></span><br /><br />Si el sol llegara a oscurecer<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span><br /><br />y no brille <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Fa</span></span><br /><br />yo igual con<span class="syllable" style="text-decoration: underline;">fío<span class="note" data-notation="Latina">Sol</span></span> en el Señor<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa</span></span><br /><br />no me va a fa<span class="syllable" style="text-decoration: underline;">llar<span class="note" data-notation="Latina">Do</span></span>.<br /><br />yo igual con<span class="syllable" style="text-decoration: underline;">fío<span class="note" data-notation="Latina">Sol</span></span> en el Señor<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa</span></span><br /><br />no me va a fa<span class="syllable" style="text-decoration: underline;">llar<span class="note" data-notation="Latina">Do</span></span>.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Puedo Confiar" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/pon-tus-manos.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">47. Pon tus manos</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/quedate-senor.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">49. Quédate Señor</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


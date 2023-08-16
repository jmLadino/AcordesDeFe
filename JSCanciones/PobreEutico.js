﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />Pobre Eutico se cayó<br /><br />De la ventana pues se durmió<br /><br />Cuando la gente se le acercó<br /><br />Se dieron cuenta que Eutico murió<br /><br /><br /><br />Cuando Pablo tirado lo vio<br /><br />A su lado él se arrodilló<br /><br />Y con sus brazos su cuerpo rodeó<br /><br />Hizo una oración y Eutico vivió<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Po<span class="note" data-notation="Latina">Do</span></span>bre Eutico se ca<span class="syllable" style="text-decoration: underline;">yó<span class="note" data-notation="Latina">Sol</span></span><br /><br />De la ventana pues se dur<span class="syllable" style="text-decoration: underline;">mió<span class="note" data-notation="Latina">Do</span></span><br /><br />Cuando la gente se le acer<span class="syllable" style="text-decoration: underline;">có<span class="note" data-notation="Latina">Sol</span></span><br /><br />Se dieron cuenta que Eutico mu<span class="syllable" style="text-decoration: underline;">rió<span class="note" data-notation="Latina">Do</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Cuan<span class="note" data-notation="Latina">Fa</span></span>do Pablo ti<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">Do</span></span>do lo vio<br /><br /><span class="syllable" style="text-decoration: underline;">A<span class="note" data-notation="Latina">Sol</span></span> su lado él <span class="syllable" style="text-decoration: underline;">se a<span class="note" data-notation="Latina">Do</span></span>rrodi<span class="syllable" style="text-decoration: underline;">lló<span class="note" data-notation="Latina">Do7</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">Y<span class="note" data-notation="Latina">Fa</span></span> con sus brazos su <span class="syllable" style="text-decoration: underline;">cuer<span class="note" data-notation="Latina">Do</span></span>po rodeó<br /><br /><span class="syllable" style="text-decoration: underline;">Hi<span class="note" data-notation="Latina">Sol</span></span>zo una oración y Eu<span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Do</span></span>co vivió<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Pobre Eutico" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/la-b-i-b-l-i-a.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">13. La B-I-B-L-I-A</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/quien-es-el-rey-de-la-selva.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">15. ¿Quién es el rey de la Selva?</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


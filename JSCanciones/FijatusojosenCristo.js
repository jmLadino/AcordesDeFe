﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />Fija tus ojos en Cristo,<br /><br />tan lleno de gracia y amor,<br /><br />y lo terrenal sin valor será<br /><br />a la luz del glorioso Señor<br /><br /><br /><br />Fijo mis ojos en Cristo,<br /><br />tan lleno de gracia y amor,<br /><br />y lo terrenal sin valor será<br /><br />a la luz del glorioso Señor<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Fi<span class="note" data-notation="Latina">Re</span></span>ja tus <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">La</span></span>jos en <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sim</span></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Fam#</span></span>,<br /><br />tan <span class="syllable" style="text-decoration: underline;">lle<span class="note" data-notation="Latina">Sol</span></span>no de gracia y a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">La</span></span>, <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La7</span></span><br /><br />y lo <span class="syllable" style="text-decoration: underline;">te<span class="note" data-notation="Latina">Re</span></span>rre<span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">La</span></span> sin va<span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">Sim</span></span> se<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Fam#</span></span><br /><br />a la <span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Re</span></span> del glo<span class="syllable" style="text-decoration: underline;">rio<span class="note" data-notation="Latina">Sol</span></span>so <span class="syllable" style="text-decoration: underline;">Se<span class="note" data-notation="Latina">La</span></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Fi<span class="note" data-notation="Latina">Re</span></span>jo mis <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">La</span></span>jos en <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sim</span></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Fam#</span></span>,<br /><br />tan <span class="syllable" style="text-decoration: underline;">lle<span class="note" data-notation="Latina">Sol</span></span>no de gracia y a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">La</span></span>, <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La7</span></span><br /><br />y lo <span class="syllable" style="text-decoration: underline;">te<span class="note" data-notation="Latina">Re</span></span>rre<span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">La</span></span> sin va<span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">Sim</span></span> se<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Fam#</span></span><br /><br />a la <span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Re</span></span> del glo<span class="syllable" style="text-decoration: underline;">rio<span class="note" data-notation="Latina">Sol</span></span>so <span class="syllable" style="text-decoration: underline;">Se<span class="note" data-notation="Latina">La</span></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Fija tus ojos en Cristo" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/en-el-gran-mar.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">36. En el gran mar</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/jesus-mi-capitan.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">38. Jesús mi capitán</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


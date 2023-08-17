﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">// Alelu, Alelu, Alelu, Aleluya<br />Gloria a Dios //<br /></p><p class="InterlineadoLetra">/// Gloria a Dios Aleluya ///<br />Gloria a Dios<br /></p><p class="InterlineadoLetra">// Alelu, Alelu, Alelu, Aleluya<br />Gloria a Dios //<br /></p><p class="InterlineadoLetra">/// Gloria a Dios Aleluya ///<br />Gloria a Dios<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>, Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>ya<br /><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span><span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7"></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span></span> a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span> <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span> <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra">Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>, Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>ya<br /><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span><span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7"></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span></span> a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span> <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span> <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span>ria a <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m.png' alt="Fa#m"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">FaSostm</span></span></span> Aleluya<br /><span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span></span>ria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span> Aleluya<br /><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span>ria a <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m.png' alt="Fa#m"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">FaSostm</span></span></span> Aleluya<br /><span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span></span>ria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span><br /></p><p class="InterlineadoGuitarra">Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>, Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>ya<br /><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span><span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7"></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span></span> a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span> <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span> <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra">Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>, Ale<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mi</span></span></span>, Ale<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">La</span></span></span>ya<br /><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span><span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7"></span><span class="syllable" style="text-decoration: underline;">ria<span class="note" data-notation="Latina">Si7</span></span></span> a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span> <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span> <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span>ria a <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m.png' alt="Fa#m"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">FaSostm</span></span></span> Aleluya<br /><span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span></span>ria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span> Aleluya<br /><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Mi</span></span></span>ria a <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m.png' alt="Fa#m"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">FaSostm</span></span></span> Aleluya<br /><span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">Glo<span class="note" data-notation="Latina">Si</span></span></span>ria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Alelu, alelu, aleluya" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/alabare.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">20. Alabaré</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/al-lado-de-jesus.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">22. Al lado de Jesús</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


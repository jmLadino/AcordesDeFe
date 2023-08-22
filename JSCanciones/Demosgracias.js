﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">Demos gracias al Señor, demos gracias<br />Demos gracias por su amor<br /></p><p class="InterlineadoLetra">Por las mañanas las aves cantan<br />las alabanzas a Cristo Salvador<br />Y tú mi hermano por qué no cantas<br />las alabanzas al Cristo Salvador<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <div id="DIV_Ribbon">                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                  <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                  <button id="btnAcordes" class="blue-button">Acordes</button>                </div>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">// Demos <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">gra<span class="note" data-notation="Latina">Re</span></span></span>cias al Señor, demos gracias<br />Demos <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">gra<span class="note" data-notation="Latina">La</span></span></span>cias por su a<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span></span> // &emsp;<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra">Por las ma<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">ña<span class="note" data-notation="Latina">Sol</span></span></span>nas las aves <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">can<span class="note" data-notation="Latina">Re</span></span></span>tan<br />las ala<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ban<span class="note" data-notation="Latina">La</span></span></span>zas a Cristo Salva<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Re</span></span></span> <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br />Y tú mi her<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Sol</span></span></span>no por qué no <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">can<span class="note" data-notation="Latina">Re</span></span></span>tas<br />las ala<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ban<span class="note" data-notation="Latina">La</span></span></span>zas al Cristo Salva<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Re</span></span></span><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Demos gracias" frameborder="0" allowfullscreen></iframe>            </div>            <div id="DIV_Cursor" class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/cuando-el-pueblo-de-dios-ora.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">32. Cuando el pueblo de Dios ora</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/dios-esta-aqui.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">34. Dios está aquí</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


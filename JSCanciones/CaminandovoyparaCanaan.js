﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">/// Caminando voy para Canaán ///<br />gloria a Dios<br />caminando voy para Canaán.<br /></p><p class="InterlineadoLetra">/// Si tu no vas no me impidas a mí ///<br />gloria a Dios<br />caminando voy para Canaán.<br /></p><p class="InterlineadoLetra">/// Al venir Jesús yo me voy con Él ///<br />gloria a Dios<br />caminando voy para Canaán.<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <div id="DIV_Ribbon">                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                  <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                  <button id="btnAcordes" class="blue-button">Acordes</button>                </div>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Cami<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nan<span class="note" data-notation="Latina">Mi</span></span></span>do voy para Cana<span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Si7</span></span></span><br />caminando voy para Cana<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span></span><br />caminando <span class="chord" data-tabsaurus="Mi7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi7.png' alt="Mi7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Mi7</span></span></span> para Cana<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">La</span></span></span><br />gloria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span><br />caminando <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span></span> para Cana<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span></span>.<br /></p><p class="InterlineadoGuitarra">Si ud no <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Mi</span></span></span> no me impida <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ir<span class="note" data-notation="Latina">Si7</span></span></span><br />Si ud no va no me impida <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ir<span class="note" data-notation="Latina">Mi</span></span></span><br />Si ud no <span class="chord" data-tabsaurus="Mi7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi7.png' alt="Mi7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Mi7</span></span></span> no me impida <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ir<span class="note" data-notation="Latina">La</span></span></span><br />gloria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span><br />caminando <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span></span> para Cana<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span></span>.<br /></p><p class="InterlineadoGuitarra">Al venir Je<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi</span></span></span> yo me voy con <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Si7</span></span></span><br />Al venir Jesús yo me voy con <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Mi</span></span></span><br />Al venir Je<span class="chord" data-tabsaurus="Mi7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi7.png' alt="Mi7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi7</span></span></span> yo me voy con <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">La</span></span></span><br />gloria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span><br />caminando <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span></span> para Cana<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span></span>.<br /></p><p class="InterlineadoGuitarra">gloria a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span></span><br />caminando <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span></span> para Cana<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span></span>.<br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Caminando voy para Canaán" frameborder="0" allowfullscreen></iframe>            </div>            <div id="DIV_Cursor" class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/baja-dios-de-las-nubes.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">27. Baja a Dios de las nubes</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/canto-de-alegria.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">29. Canto de alegría</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


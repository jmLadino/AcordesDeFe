﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">/// Mi pensamiento eres tú, Señor ///<br />Mi pensamiento eres tú.<br /></p><p class="InterlineadoLetra"><b>CORO</b><br />&emsp;// Porque tú me has dado la vida<br />&emsp;Porque tú me has dado el existir<br />&emsp;Porque tú me has dado cariño<br />&emsp;Me has dado amor //<br /></p><p class="InterlineadoLetra">/// Mi fortaleza eres tú, Señor ///<br />Mi fortaleza eres tú<br /></p><p class="InterlineadoLetra"><b>CORO</b>:<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">Mi<span class="note" data-notation="Latina">Sol</span></span></span> pensamiento <br />eres <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span></span>, Señor<br /><span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span>Mi pensamiento <br />eres <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sim</span></span></span>, Señor <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mim</span></span>&emsp;</span><br />Mi pensamiento <br />eres <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span></span>, Señor <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br />Mi pensamiento eres <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sol</span></span></span>.&emsp;<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol7.png' alt="Sol7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol7</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><b>CORO</b><br />&emsp;// Porque <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span></span> <br />&emsp;me has dado la <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Re</span></span></span>da<br />&emsp;Porque <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sim</span></span></span> <br />&emsp;me has dado el exis<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">tir<span class="note" data-notation="Latina">Mim</span></span></span><br />&emsp;Porque <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span></span> <br />&emsp;me has dado ca<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">ri<span class="note" data-notation="Latina">Re</span></span></span>ño<br />&emsp;Me has dado a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol7.png' alt="Sol7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol7</span></span>&emsp;</span>//<br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">Mi<span class="note" data-notation="Latina">Sol</span></span></span> fortaleza <br />eres <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span></span>, Señor<br /><span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span>Mi fortaleza <br />eres <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sim</span></span></span>, Señor&emsp;<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mim</span></span>&emsp;</span><br />Mi fortaleza <br />eres <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span></span>, Señor&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br />Mi fortaleza eres <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol7.png' alt="Sol7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol7</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><b>CORO</b>:<br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Mi Pensamiento" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/maranatha.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">43. Maranatha</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/mirad-cual-amor.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">45. Mirad cual amor</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


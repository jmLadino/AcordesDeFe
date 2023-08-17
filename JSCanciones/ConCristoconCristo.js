﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">Con Cristo con Cristo /:<br />Junto a las flores /:<br />He encontrado que mi vida es de colores<br />El sol y la luna /:<br />Caminan conmigo /:<br /></p><p class="InterlineadoLetra">Desde cuando Jesucristo está conmigo<br />Voy corriendo por los valles<br />Voy saltando en los trigales<br />Siempre unidos de la mano<br />Voy cantando mi canción<br />Voy corriendo por los valles<br />Voy saltando en los trigales<br />Siempre unidos de la mano<br /></p><p class="InterlineadoLetra">/// Cristo y yo ///<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Con <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span></span>to con Cristo/:<br /><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">Jun<span class="note" data-notation="Latina">Sol</span></span></span>to a las flores/:<br />He encon<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">tra<span class="note" data-notation="Latina">La</span></span></span>do que mi <span class="chord" data-tabsaurus="La7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La7.png' alt="La7"></span><span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">La7</span></span></span>da es de co<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">lo<span class="note" data-notation="Latina">Re</span></span></span>res<br />El <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Re</span></span></span>y la luna/:<br />Ca<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sol</span></span></span>nan conmigo/:<br />Desde <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">cuan<span class="note" data-notation="Latina">La</span></span></span>do Jesu<span class="chord" data-tabsaurus="La7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La7.png' alt="La7"></span><span class="syllable" style="text-decoration: underline;">cris<span class="note" data-notation="Latina">La7</span></span></span>to está con<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span></span>go <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra">Voy co<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">rrien<span class="note" data-notation="Latina">Sol</span></span></span>do por los <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">La</span></span></span>lles<br />Voy sal<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">tan<span class="note" data-notation="Latina">Re</span></span></span>do en los tri<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim"></span><span class="syllable" style="text-decoration: underline;">ga<span class="note" data-notation="Latina">Sim</span></span></span>les<br />Siempre u<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">ni<span class="note" data-notation="Latina">Sol</span></span></span>dos de la <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">La</span></span></span>no<br />Voy can<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">tan<span class="note" data-notation="Latina">Re</span></span></span>do mi can<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Re7</span></span></span><br />Voy co<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">rrien<span class="note" data-notation="Latina">Sol</span></span></span>do por los <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">La</span></span></span>lles<br />Voy sal<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">tan<span class="note" data-notation="Latina">Re</span></span></span>do en los tri<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable" style="text-decoration: underline;">ga<span class="note" data-notation="Latina">Re7</span></span></span>les<br />Siempre u<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">ni<span class="note" data-notation="Latina">Sol</span></span></span>dos de la <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">La</span></span></span>no<br />Cristo y <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span></span>&emsp;<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span><br />Cristo y <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span></span>&emsp;<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span><br />Cristo y <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span></span><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Con Cristo con Cristo" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/canto-de-alegria.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">29. Canto de alegría</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/construye-tu-casa-sobre-la-roca.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">31. Construye tu casa sobre la roca</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


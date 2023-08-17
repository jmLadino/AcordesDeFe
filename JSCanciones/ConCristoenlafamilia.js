﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><p class="InterlineadoLetra">Con <b>Cristo</b> en la familia</p><p class="InterlineadoLetra">/// Que hogar feliz ///</p><p class="InterlineadoLetra">Con Cristo en la familia</p><p class="InterlineadoLetra">// Que hogar feliz //</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Con <b>papi</b> en la familia</p><p class="InterlineadoLetra">/// Que hogar feliz ///</p><p class="InterlineadoLetra">Con papi en la familia</p><p class="InterlineadoLetra">// Que hogar feliz //</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Con <b>mami</b> en la familia</p><p class="InterlineadoLetra">/// Que hogar feliz ///</p><p class="InterlineadoLetra">Con mami en la familia</p><p class="InterlineadoLetra">// Que hogar feliz //</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Con <b>mi hermano/a</b> en la familia</p><p class="InterlineadoLetra">/// Que hogar feliz ///</p><p class="InterlineadoLetra">Con mi hermano/a en la familia</p><p class="InterlineadoLetra">// Que hogar feliz //</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Con <b>Cristo</b> en la familia</p><p class="InterlineadoLetra">/// Que hogar feliz ///</p><p class="InterlineadoLetra">Con Cristo en la familia</p><p class="InterlineadoLetra">// Que hogar feliz //</p><p class="InterlineadoLetra"></p></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><p class="InterlineadoGuitarra">Con <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz</p><p class="InterlineadoGuitarra">Con Cristo en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Con <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span>pi en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz</p><p class="InterlineadoGuitarra">Con papi en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Con <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>mi en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz</p><p class="InterlineadoGuitarra">Con mami en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Con mi her<span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>no en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz</p><p class="InterlineadoGuitarra">Con mi hermano en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Con <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz</p><p class="InterlineadoGuitarra">Con Cristo en la familia</p><p class="InterlineadoGuitarra">Que hogar feliz</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span></p></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Con Cristo en la familia" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/al-son-del-cocodrilo.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">2. Al son del cocodrilo</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/cristo-nos-dice-que-subamos-mas.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">4. Cristo nos dice que subamos más</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><p class="InterlineadoLetra">Pon tus manos</p><p class="InterlineadoLetra">en las manos del Señor de Galilea,</p><p class="InterlineadoLetra">pon tus manos</p><p class="InterlineadoLetra">en las manos del Señor</p><p class="InterlineadoLetra">que calma la mar,</p><p class="InterlineadoLetra">Si el Señor reina hoy</p><p class="InterlineadoLetra">y por siempre en nuestro ser,</p><p class="InterlineadoLetra">pon tus manos</p><p class="InterlineadoLetra">en las manos del Señor</p><p class="InterlineadoLetra">que calma la mar.</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Pon tus pasos</p><p class="InterlineadoLetra">en los pasos del Señor de Galilea,</p><p class="InterlineadoLetra">pon tus pasos</p><p class="InterlineadoLetra">en los pasos del Señor</p><p class="InterlineadoLetra">que calma la mar,</p><p class="InterlineadoLetra">Si el Señor reina hoy</p><p class="InterlineadoLetra">y por siempre en nuestro ser,</p><p class="InterlineadoLetra">pon tus pasos</p><p class="InterlineadoLetra">en los pasos del Señor</p><p class="InterlineadoLetra">que calma la mar.</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Pon tus ojos</p><p class="InterlineadoLetra">en los ojos del Señor de Galilea,</p><p class="InterlineadoLetra">pon tus ojos</p><p class="InterlineadoLetra">en los ojos del Señor</p><p class="InterlineadoLetra">que calma la mar,</p><p class="InterlineadoLetra">Si el Señor reina hoy</p><p class="InterlineadoLetra">y por siempre en nuestro ser,</p><p class="InterlineadoLetra">pon tus ojos</p><p class="InterlineadoLetra">en los ojos del Señor</p><p class="InterlineadoLetra">que calma la mar.</p><p class="InterlineadoLetra"></p></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Pon tus <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>nos </p><p class="InterlineadoGuitarra">en las manos del Señor </p><p class="InterlineadoGuitarra">de Gali<span class="syllable" style="text-decoration: underline;">le<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>,</p><p class="InterlineadoGuitarra">pon tus <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Sol</span></span>nos </p><p class="InterlineadoGuitarra">en las manos del Señor </p><p class="InterlineadoGuitarra">que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">La</span></span>ma la <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>,</p><p class="InterlineadoGuitarra">Si el Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span> reina <span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Re7</span></span> </p><p class="InterlineadoGuitarra">y por <span class="syllable" style="text-decoration: underline;">siem<span class="note" data-notation="Latina">Sol</span></span>pre en nuestro <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span>,</p><p class="InterlineadoGuitarra">pon tus <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>nos </p><p class="InterlineadoGuitarra">en las manos del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span> </p><p class="InterlineadoGuitarra">que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">Sol</span></span>ma <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>.</p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Pon tus <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span>sos </p><p class="InterlineadoGuitarra">en los pasos del Señor </p><p class="InterlineadoGuitarra">de Gali<span class="syllable" style="text-decoration: underline;">le<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>,</p><p class="InterlineadoGuitarra">pon tus <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Sol</span></span>sos </p><p class="InterlineadoGuitarra">en las pasos del Señor </p><p class="InterlineadoGuitarra">que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">La</span></span>ma la <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>,</p><p class="InterlineadoGuitarra">Si el Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span> reina <span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Re7</span></span> </p><p class="InterlineadoGuitarra">y por <span class="syllable" style="text-decoration: underline;">siem<span class="note" data-notation="Latina">Sol</span></span>pre en nuestro <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span>,</p><p class="InterlineadoGuitarra">pon tus <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span>sos </p><p class="InterlineadoGuitarra">en las pasos del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span> </p><p class="InterlineadoGuitarra">que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">Sol</span></span>ma <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>.</p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Pon tus <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span>jos </p><p class="InterlineadoGuitarra">en los ojos del Señor </p><p class="InterlineadoGuitarra">de Gali<span class="syllable" style="text-decoration: underline;">le<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>,</p><p class="InterlineadoGuitarra">pon tus <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Sol</span></span>jos </p><p class="InterlineadoGuitarra">en las ojos del Señor </p><p class="InterlineadoGuitarra">que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">La</span></span>ma la <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>,</p><p class="InterlineadoGuitarra">Si el Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span> reina <span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Re7</span></span> </p><p class="InterlineadoGuitarra">y por <span class="syllable" style="text-decoration: underline;">siem<span class="note" data-notation="Latina">Sol</span></span>pre en nuestro <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span>,</p><p class="InterlineadoGuitarra">pon tus <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span>jos </p><p class="InterlineadoGuitarra">en las ojos del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span> </p><p class="InterlineadoGuitarra">que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">Sol</span></span>ma <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>.</p></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Pon tus manos" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/no-me-importa-de-donde-tu-vengas.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">46. No me importa de donde tu vengas</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/puedo-confiar.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">48. Puedo Confiar</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


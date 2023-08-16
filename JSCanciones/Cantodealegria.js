﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Canto de alegría porque tengo amor<br /><br />Vivo cada día por el Salvador<br /><br />Quiero a todo el mundo de Él siempre hablar<br /><br />Porque Cristo a todos nos quiere salvar<br /><br /><br /><br />Por eso canto, porque tengo amor<br /><br />Vivo por El Salvador<br /><br />Quiero de Él siempre hablar<br /><br />Porque nos quiere salvar<br /><br /><br /><br />En todas las pruebas Él te sostendrá<br /><br />No te desampara, no te dejará<br /><br />Él te necesita para trabajar<br /><br />Vamos adelante, vamos a triunfar<br /><br /><br /><br />Por eso canto, porque tengo amor<br /><br />Vivo por El Salvador<br /><br />Quiero de Él siempre hablar<br /><br />Porque nos quiere salvar<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br />INTRO: <br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Can<span class="note" data-notation="Latina">Re</span></span>to de alegría porque <span class="syllable" style="text-decoration: underline;">ten<span class="note" data-notation="Latina">Sol</span></span>go amor<br /><br /><span class="syllable" style="text-decoration: underline;">Vi<span class="note" data-notation="Latina">La</span></span>vo cada día por el <span class="syllable" style="text-decoration: underline;">Sal<span class="note" data-notation="Latina">Re</span></span>vador<br /><br /><span class="syllable" style="text-decoration: underline;">Quie<span class="note" data-notation="Latina">Re</span></span>ro a todo el mundo de Él siem<span class="syllable" style="text-decoration: underline;">pre<span class="note" data-notation="Latina">Sol</span></span> hablar<br /><br /><span class="syllable" style="text-decoration: underline;">Por<span class="note" data-notation="Latina">La</span></span>que Cristo a todos nos quie<span class="syllable" style="text-decoration: underline;">re<span class="note" data-notation="Latina">Re</span></span> salvar<br /><br /><br /><br />Por eso <span class="syllable" style="text-decoration: underline;">can<span class="note" data-notation="Latina">Re</span></span>to, porque <span class="syllable" style="text-decoration: underline;">ten<span class="note" data-notation="Latina">Sol</span></span>go amor<br /><br /><span class="syllable" style="text-decoration: underline;">Vi<span class="note" data-notation="Latina">La</span></span>vo por El <span class="syllable" style="text-decoration: underline;">Sal<span class="note" data-notation="Latina">Re</span></span>vador<br /><br /><span class="syllable" style="text-decoration: underline;">Quie<span class="note" data-notation="Latina">Re</span></span>ro de Él siem<span class="syllable" style="text-decoration: underline;">pre<span class="note" data-notation="Latina">Sol</span></span> hablar<br /><br /><span class="syllable" style="text-decoration: underline;">Por<span class="note" data-notation="Latina">La</span></span>que nos quie<span class="syllable" style="text-decoration: underline;">re<span class="note" data-notation="Latina">Re</span></span> salvar<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">En<span class="note" data-notation="Latina">Re</span></span> todas las pruebas Él te <span class="syllable" style="text-decoration: underline;">sos<span class="note" data-notation="Latina">Sol</span></span>tendrá<br /><br /><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">La</span></span> te desampara, no te <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Re</span></span>jará<br /><br /><span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Re</span></span> te necesita para <span class="syllable" style="text-decoration: underline;">tra<span class="note" data-notation="Latina">Sol</span></span>bajar<br /><br /><span class="syllable" style="text-decoration: underline;">Va<span class="note" data-notation="Latina">La</span></span>mos adelante, vamos <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Re</span></span>triunfar<br /><br /><br /><br />Por eso <span class="syllable" style="text-decoration: underline;">can<span class="note" data-notation="Latina">Re</span></span>to, porque <span class="syllable" style="text-decoration: underline;">ten<span class="note" data-notation="Latina">Sol</span></span>go amor<br /><br /><span class="syllable" style="text-decoration: underline;">Vi<span class="note" data-notation="Latina">La</span></span>vo por El <span class="syllable" style="text-decoration: underline;">Sal<span class="note" data-notation="Latina">Re</span></span>vador<br /><br /><span class="syllable" style="text-decoration: underline;">Quie<span class="note" data-notation="Latina">Re</span></span>ro de Él siem<span class="syllable" style="text-decoration: underline;">pre<span class="note" data-notation="Latina">Sol</span></span> hablar<br /><br /><span class="syllable" style="text-decoration: underline;">Por<span class="note" data-notation="Latina">La</span></span>que nos quie<span class="syllable" style="text-decoration: underline;">re<span class="note" data-notation="Latina">Re</span></span> salvar<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:block">                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZnEFQvBuS8Y" title="Canto de alegría" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/caminando-voy-para-canaan.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">28. Caminando voy para Canaán</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/con-cristo-con-cristo.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">30. Con Cristo con Cristo</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


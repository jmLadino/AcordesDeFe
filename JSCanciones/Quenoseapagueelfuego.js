﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">// Que no se apague el fuego<br />que hay en mi corazón<br />que no se apague el fuego<br />que siga ardiendo más y más//<br /></p><p class="InterlineadoLetra">// Dame gozo Señor,<br />dame paz y amor,<br />porque voy a morar más allá del sol //<br /></p><p class="InterlineadoLetra">Cuando el alma está triste y vacía<br />cuando el alma está triste y vacía,<br />es difícil orar durante el día y cantar<br />cuando el alma está triste y vacía.<br /></p><p class="InterlineadoLetra">Cuando el alma está llena de amor de Dios<br />Cuando el alma está llena de amor de Dios<br />es más fácil orar durante el día y cantar<br />cuando el alma está llena de amor de Dios.<br /></p><p class="InterlineadoLetra">// Que no se apague el fuego<br />que hay en mi corazón<br />que no se apague el fuego<br />que siga ardiendo más y más //<br /></p><p class="InterlineadoLetra">// Dame gozo Señor,<br />dame paz y amor,<br />porque voy a morar más allá del sol //<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra">// <span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> no se apague el fuego<br />que hay en mi cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">La</span></span><br />que no se apague el fuego<br />que siga ardiendo más y <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Re</span></span>//&emsp;<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re7</span></span><br /></p><p class="InterlineadoGuitarra">// Dame <span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">Sol</span></span>zo Señor,<br />dame <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Re</span></span> y amor,<br />porque <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">La</span></span> a morar <br />más allá del <span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Re</span></span>//<br /></p><p class="InterlineadoGuitarra">Cuando el <span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Re</span></span>ma <br />está triste y va<span class="syllable" style="text-decoration: underline;">cía<span class="note" data-notation="Latina">La</span></span><br />cuando el alma <br />está triste y va<span class="syllable" style="text-decoration: underline;">cía<span class="note" data-notation="Latina">Re</span></span>,<br />es difícil orar durante <br />el <span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Sol</span></span> y cantar<br />cuando el <span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span>ma <br />está triste y va<span class="syllable" style="text-decoration: underline;">cía<span class="note" data-notation="Latina">Re</span></span>.<br /></p><p class="InterlineadoGuitarra">Cuando el <span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Re</span></span>ma <br />está llena de amor de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span><br />Cuando el alma <br />está llena de amor de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span><br />es más fácil orar durante <br />el <span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Sol</span></span> y cantar<br />cuando el <span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span>ma <br />está llena de amor de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span>.<br /></p><p class="InterlineadoGuitarra">// <span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> no se apague el fuego<br />que hay en mi cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">La</span></span><br />que no se apague el fuego<br />que siga ardiendo más y <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Re</span></span>//&emsp;<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re7</span></span><br /></p><p class="InterlineadoGuitarra">// Dame <span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">Sol</span></span>zo Señor,<br />dame <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Re</span></span> y amor,<br />porque <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">La</span></span> a morar <br />más allá del <span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Re</span></span>//<br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Que no se apague el fuego" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/quedate-senor.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">49. Quédate Señor</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/quiero-cantar-una-linda-cancion.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">51. Quiero cantar una linda canción</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


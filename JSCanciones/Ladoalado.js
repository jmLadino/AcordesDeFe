﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><p class="InterlineadoLetra">Lado a lado estoy, con mi Salvador.</p><p class="InterlineadoLetra">Mi amigo es Jesús.</p><p class="InterlineadoLetra">Vivo por su amor, con Él yo soy feliz</p><p class="InterlineadoLetra">Y de su mano siempre voy</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Venid conmigo, juntemos las manos,</p><p class="InterlineadoLetra">Aquí donde está Jesús,</p><p class="InterlineadoLetra">Venid, cantemos en el mundo oscuro</p><p class="InterlineadoLetra">Que Cristo es nuestra luz.</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Solitario estás desconfiado vas.</p><p class="InterlineadoLetra">Todo es odio alrededor,</p><p class="InterlineadoLetra">Pero en Jesús encontrarás amor,</p><p class="InterlineadoLetra">Él te dará felicidad.</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Venid conmigo, juntemos las manos,</p><p class="InterlineadoLetra">Aquí donde está Jesús,</p><p class="InterlineadoLetra">Venid, cantemos en el mundo oscuro</p><p class="InterlineadoLetra">Que Cristo es nuestra luz.</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Vamos de la mano del Señor Jesús</p><p class="InterlineadoLetra"></p></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">Fa</span></span>do a lado es<span class="syllable" style="text-decoration: underline;">toy<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">con<span class="note" data-notation="Latina">Do</span></span> mi Salva<span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Lam</span></span>.</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Mi<span class="note" data-notation="Latina">Fa</span></span> amigo <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span>. <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Vi<span class="note" data-notation="Latina">Fa</span></span>vo por su <span class="syllable" style="text-decoration: underline;">amor<span class="note" data-notation="Latina">Sol</span></span>, con <span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Do</span></span> yo soy fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Lam</span></span></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Y<span class="note" data-notation="Latina">Fa</span></span> de su <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Sol</span></span>no siempre <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Do</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Ve<span class="note" data-notation="Latina">Fa</span></span>nid con<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sol</span></span>go, <span class="syllable" style="text-decoration: underline;">jun<span class="note" data-notation="Latina">Do</span></span>temos las <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Lam</span></span>nos,</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">A<span class="note" data-notation="Latina">Fa</span></span>quí donde es<span class="syllable" style="text-decoration: underline;">tá<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span>, <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span></p><p class="InterlineadoGuitarra">Ve<span class="syllable" style="text-decoration: underline;">nid<span class="note" data-notation="Latina">Fa</span></span>, can<span class="syllable" style="text-decoration: underline;">te<span class="note" data-notation="Latina">Sol</span></span>mos <span class="syllable" style="text-decoration: underline;">en<span class="note" data-notation="Latina">Do</span></span> el mundo os<span class="syllable" style="text-decoration: underline;">cu<span class="note" data-notation="Latina">Lam</span></span>ro</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Fa</span></span> Cristo <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span> nuestra <span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Do</span></span>.</p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">So<span class="note" data-notation="Latina">Fa</span></span>litario es<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable" style="text-decoration: underline;">des<span class="note" data-notation="Latina">Do</span></span>confiado <span class="syllable" style="text-decoration: underline;">vas<span class="note" data-notation="Latina">Lam</span></span>.</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">To<span class="note" data-notation="Latina">Fa</span></span>do es odio al<span class="syllable" style="text-decoration: underline;">re<span class="note" data-notation="Latina">Sol</span></span>de<span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Do</span></span>, <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Pe<span class="note" data-notation="Latina">Fa</span></span>ro en Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Sol</span></span> en<span class="syllable" style="text-decoration: underline;">con<span class="note" data-notation="Latina">Do</span></span>trarás a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Lam</span></span>,</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Fa</span></span> te da<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Sol</span></span> felici<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Do</span></span>.</p></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Lado a lado" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/la-alegria.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">40. La alegría</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/07/la-esperanza-es-jesus.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">42. La esperanza es Jesús</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


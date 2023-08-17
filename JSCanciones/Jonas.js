﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><p class="InterlineadoLetra">Voy a contar una historia</p><p class="InterlineadoLetra">pongan mucha atención</p><p class="InterlineadoLetra">a Jonás esto sucedió</p><p class="InterlineadoLetra">se le pidió predicar</p><p class="InterlineadoLetra">la palabra de Dios</p><p class="InterlineadoLetra">y el prefirió escapar</p><p class="InterlineadoLetra">halló una nave muy grande</p><p class="InterlineadoLetra">que salía para Tarsis,</p><p class="InterlineadoLetra">pagó y al barco subió</p><p class="InterlineadoLetra">pensó que así podía él</p><p class="InterlineadoLetra">escapar de la presencia de Dios</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Mas Jehová levantó</p><p class="InterlineadoLetra">un gran viento en el mar</p><p class="InterlineadoLetra">y hubo una tempestad</p><p class="InterlineadoLetra">los marineros clamaban</p><p class="InterlineadoLetra">cada uno a su dios</p><p class="InterlineadoLetra">sentían miedo y temor</p><p class="InterlineadoLetra">todos atemorizados</p><p class="InterlineadoLetra">echaron la suerte,</p><p class="InterlineadoLetra">la suerte cayó en Jonás</p><p class="InterlineadoLetra">tomaron pues a Jonás</p><p class="InterlineadoLetra">y lo arrojaron al fondo del mar</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">CORO:</p><p class="InterlineadoLetra">&emsp;Y vino un pez, grande muy grande</p><p class="InterlineadoLetra">&emsp;y se lo tragó, sí se lo tragó</p><p class="InterlineadoLetra">&emsp;porque Jonás no obedeció</p><p class="InterlineadoLetra">&emsp;la palabra de Dios (la palabra de Dios)</p><p class="InterlineadoLetra">&emsp;y vino un pez, grande muy grande</p><p class="InterlineadoLetra">&emsp;y se lo tragó, sí se lo tragó</p><p class="InterlineadoLetra">&emsp;porqué Jonás no obedeció</p><p class="InterlineadoLetra">&emsp;la palabra de Dios.</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Jonás oró a Jehová desde el vientre del pez</p><p class="InterlineadoLetra">y en su angustia clamó</p><p class="InterlineadoLetra">más yo con voz de alabanza ofreceré sacrificio</p><p class="InterlineadoLetra">cumpliré lo que prometí</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Al ver Jehová que Jonás arrepentido clamaba</p><p class="InterlineadoLetra">le dio otra oportunidad</p><p class="InterlineadoLetra">con su poder ordenó que el gran pez…</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">(solo voz)</p><p class="InterlineadoLetra">&emsp;Niños ¿y que creen que pasó?</p><p class="InterlineadoLetra">♫</p><p class="InterlineadoLetra">&emsp;Pues el gran pez, lo vomitó.</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">CORO: x2</p><p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Y vino un pez grande muy grande…</p><p class="InterlineadoLetra">(solo voz)</p><p class="InterlineadoLetra">&emsp;Ahora, díganme ustedes, ¿qué sucedió?</p><p class="InterlineadoLetra">(voz niños)</p><p class="InterlineadoLetra">&emsp;Se lo tragó</p><p class="InterlineadoLetra">(solo voz)</p><p class="InterlineadoLetra">&emsp;muy bien</p><p class="InterlineadoLetra">♫</p><p class="InterlineadoLetra">Y así Jonás a Nínive</p><p class="InterlineadoLetra">(solo voz)</p><p class="InterlineadoLetra">&emsp;<b><i>Nínive fue la ciudad a la cual Dios envió a Jonás a predicar las buenas nuevas de salvación.</i></b></p><p class="InterlineadoLetra">♫</p><p class="InterlineadoLetra">&emsp;La palabra de Dios.</p><p class="InterlineadoLetra">&emsp;La palabra de Dios.</p><p class="InterlineadoLetra">&emsp;La palabra de Dios.</p><p class="InterlineadoLetra"></p></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Voy a con<span class="syllable" style="text-decoration: underline;">tar<span class="note" data-notation="Latina">Re</span></span> una historia</p><p class="InterlineadoGuitarra">pongan mucha atención</p><p class="InterlineadoGuitarra">a Jonás esto suce<span class="syllable" style="text-decoration: underline;">dió<span class="note" data-notation="Latina">La</span></span></p><p class="InterlineadoGuitarra">se le pidió predicar </p><p class="InterlineadoGuitarra">la palabra de Dios</p><p class="InterlineadoGuitarra">y el prefirió esca<span class="syllable" style="text-decoration: underline;">par<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra">halló una nave muy grande </p><p class="InterlineadoGuitarra">que salía para Tarsis, </p><p class="InterlineadoGuitarra">pagó y al barco su<span class="syllable" style="text-decoration: underline;">bió<span class="note" data-notation="Latina">Sol</span></span></p><p class="InterlineadoGuitarra">pensó que <span class="syllable" style="text-decoration: underline;">así<span class="note" data-notation="Latina">Re</span></span> podía él</p><p class="InterlineadoGuitarra">esca<span class="syllable" style="text-decoration: underline;">par<span class="note" data-notation="Latina">La</span></span> de la presencia de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Mas Jeho<span class="syllable" style="text-decoration: underline;">vá<span class="note" data-notation="Latina">Re</span></span> levantó</p><p class="InterlineadoGuitarra">un gran viento en el mar</p><p class="InterlineadoGuitarra">y hubo una tempes<span class="syllable" style="text-decoration: underline;">tad<span class="note" data-notation="Latina">La</span></span></p><p class="InterlineadoGuitarra">los marineros clamaban</p><p class="InterlineadoGuitarra">cada uno a su dios</p><p class="InterlineadoGuitarra">sentían miedo y te<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra">todos atemorizados</p><p class="InterlineadoGuitarra">echaron la <span class="syllable" style="text-decoration: underline;">suer<span class="note" data-notation="Latina">Re7</span></span>te, </p><p class="InterlineadoGuitarra">la suerte cayó en Jo<span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span></p><p class="InterlineadoGuitarra">tomaron <span class="syllable" style="text-decoration: underline;">pues<span class="note" data-notation="Latina">Re</span></span> a Jonás</p><p class="InterlineadoGuitarra">y lo arro<span class="syllable" style="text-decoration: underline;">ja<span class="note" data-notation="Latina">La</span></span>ron al fondo del <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re7</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><b>CORO</b>:</p><p class="InterlineadoGuitarra">&emsp;Y vino un <span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">Sol</span></span>, grande muy <span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">La</span></span>de </p><p class="InterlineadoGuitarra">&emsp;y se lo tra<span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re</span></span>, sí se lo tra<span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re7</span></span></p><p class="InterlineadoGuitarra">&emsp;porque Jo<span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span> no obede<span class="syllable" style="text-decoration: underline;">ció<span class="note" data-notation="Latina">La</span></span></p><p class="InterlineadoGuitarra">&emsp;la palabra de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span> (la palabra de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re7</span></span>)</p><p class="InterlineadoGuitarra">&emsp;y vino un <span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">Sol</span></span>, grande muy <span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">La</span></span>de </p><p class="InterlineadoGuitarra">&emsp;y se lo tra<span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re</span></span>, sí se lo tra<span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re7</span></span></p><p class="InterlineadoGuitarra">&emsp;porqué Jo<span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span> no obede<span class="syllable" style="text-decoration: underline;">ció<span class="note" data-notation="Latina">La</span></span></p><p class="InterlineadoGuitarra">&emsp;la palabra de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span>.</p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Jo<span class="note" data-notation="Latina">Re</span></span>nás oró a Jehová desde el vientre del pez</p><p class="InterlineadoGuitarra">y en su angustia cla<span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">La</span></span> </p><p class="InterlineadoGuitarra">más yo con voz de alabanza ofreceré sacrificio</p><p class="InterlineadoGuitarra">cumpliré lo que prome<span class="syllable" style="text-decoration: underline;">tí<span class="note" data-notation="Latina">Re</span></span></p><p class="InterlineadoGuitarra">Al ver Jehová que Jonás arrepentido clamaba</p><p class="InterlineadoGuitarra">le dio otra oportuni<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Sol</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">con su po<span class="syllable" style="text-decoration: underline;">der<span class="note" data-notation="Latina">Re</span></span> ordenó que el gran <span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">La</span></span>…</p><p class="InterlineadoGuitarra">(solo voz)</p><p class="InterlineadoGuitarra">Niños ¿y que creen que pasó?</p><p class="InterlineadoGuitarra">♫</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">Pues<span class="note" data-notation="Latina">La</span></span> el gran pez, lo vomi<span class="syllable" style="text-decoration: underline;">tó<span class="note" data-notation="Latina">Re</span></span>. <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re7</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><b>CORO</b>: x2</p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Y vino un <span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">Sol</span></span> grande muy grande…</p><p class="InterlineadoGuitarra">(solo voz)</p><p class="InterlineadoGuitarra">&emsp;Ahora, díganme ustedes, ¿qué sucedió?</p><p class="InterlineadoGuitarra">(voz niños)</p><p class="InterlineadoGuitarra">&emsp;Se lo tragó (muy bien)</p><p class="InterlineadoGuitarra">♫</p><p class="InterlineadoGuitarra">Y así Jo<span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span> a Níni<span class="syllable" style="text-decoration: underline;">ve<span class="note" data-notation="Latina">La</span></span></p><p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">(solo voz)</p><p class="InterlineadoGuitarra">&emsp;<b><i>Nínive fue la ciudad a la cual Dios envió a Jonás a predicar las buenas nuevas de salvación.</i></b></p><p class="InterlineadoGuitarra">♫</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">La</span></span> palabra de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span>.</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">La</span></span> palabra de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span>.</p><p class="InterlineadoGuitarra"><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">La</span></span> palabra de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span>.</p></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Jonás" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/era-un-muchachito-de-nombre-david.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">11. Era un muchachito de nombre David</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/la-b-i-b-l-i-a.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">13. La B-I-B-L-I-A</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


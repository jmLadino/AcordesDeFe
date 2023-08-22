﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">Voy a contar una historia<br />pongan mucha atención<br />a Jonás esto sucedió<br />se le pidió predicar<br />la palabra de Dios<br />y el prefirió escapar<br />halló una nave muy grande<br />que salía para Tarsis,<br />pagó y al barco subió<br />pensó que así podía él<br />escapar de la presencia de Dios<br /></p><p class="InterlineadoLetra">Mas Jehová levantó<br />un gran viento en el mar<br />y hubo una tempestad<br />los marineros clamaban<br />cada uno a su dios<br />sentían miedo y temor<br />todos atemorizados<br />echaron la suerte,<br />la suerte cayó en Jonás<br />tomaron pues a Jonás<br />y lo arrojaron al fondo del mar<br /></p><p class="InterlineadoLetra"><b>CORO</b>:<br />&emsp;Y vino un pez, grande muy grande<br />&emsp;y se lo tragó, sí se lo tragó<br />&emsp;porque Jonás no obedeció<br />&emsp;la palabra de Dios (la palabra de Dios)<br />&emsp;y vino un pez, grande muy grande<br />&emsp;y se lo tragó, sí se lo tragó<br />&emsp;porqué Jonás no obedeció<br />&emsp;la palabra de Dios.<br /></p><p class="InterlineadoLetra">Jonás oró a Jehová desde el vientre del pez<br />y en su angustia clamó<br />más yo con voz de alabanza ofreceré sacrificio<br />cumpliré lo que prometí<br /></p><p class="InterlineadoLetra">Al ver Jehová que Jonás arrepentido clamaba<br />le dio otra oportunidad<br />con su poder ordenó que el gran pez…<br /></p><p class="InterlineadoLetra">(solo voz)<br />&emsp;Niños ¿y que creen que pasó?<br />♫<br />&emsp;Pues el gran pez, lo vomitó.<br /></p><p class="InterlineadoLetra"><b>CORO</b>: x2<br /></p><p class="InterlineadoLetra">Y vino un pez grande muy grande…<br />(solo voz)<br />&emsp;Ahora, díganme ustedes, ¿qué sucedió?<br />(voz niños)<br />&emsp;Se lo tragó<br />(solo voz)<br />&emsp;muy bien<br />♫<br />Y así Jonás a Nínive<br />(solo voz)<br />&emsp;<b><i>Nínive fue la ciudad a la cual Dios envió a Jonás a predicar las buenas nuevas de salvación.</i></b><br />♫<br />&emsp;La palabra de Dios.<br />&emsp;La palabra de Dios.<br />&emsp;La palabra de Dios.<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <div id="DIV_Ribbon">                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                  <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                  <button id="btnAcordes" class="blue-button">Acordes</button>                </div>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">Voy a con<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">tar<span class="note" data-notation="Latina">Re</span></span></span> una historia<br />pongan mucha atención<br />a Jonás esto suce<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">dió<span class="note" data-notation="Latina">La</span></span></span><br />se le pidió predicar <br />la palabra de Dios<br />y el prefirió esca<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">par<span class="note" data-notation="Latina">Re</span></span></span><br />halló una nave muy grande <br />que salía para Tarsis, <br />pagó y al barco su<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">bió<span class="note" data-notation="Latina">Sol</span></span></span><br />pensó que <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">así<span class="note" data-notation="Latina">Re</span></span></span> podía él<br />esca<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">par<span class="note" data-notation="Latina">La</span></span></span> de la presencia de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span><br /></p><p class="InterlineadoGuitarra">Mas Jeho<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">vá<span class="note" data-notation="Latina">Re</span></span></span> levantó<br />un gran viento en el mar<br />y hubo una tempes<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">tad<span class="note" data-notation="Latina">La</span></span></span><br />los marineros clamaban<br />cada uno a su dios<br />sentían miedo y te<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span></span><br />todos atemorizados<br />echaron la <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable" style="text-decoration: underline;">suer<span class="note" data-notation="Latina">Re7</span></span></span>te, <br />la suerte cayó en Jo<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span></span><br />tomaron <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">pues<span class="note" data-notation="Latina">Re</span></span></span> a Jonás<br />y lo arro<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ja<span class="note" data-notation="Latina">La</span></span></span>ron al fondo del <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span></span> <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><b>CORO</b>:<br />&emsp;Y vino un <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">Sol</span></span></span>, grande muy <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">La</span></span></span>de <br />&emsp;y se lo tra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re</span></span></span>, sí se lo tra<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re7</span></span></span><br />&emsp;porque Jo<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span></span> no obede<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ció<span class="note" data-notation="Latina">La</span></span></span><br />&emsp;la palabra de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span> (la palabra de <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re7</span></span></span>)<br />&emsp;y vino un <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">Sol</span></span></span>, grande muy <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">La</span></span></span>de <br />&emsp;y se lo tra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re</span></span></span>, sí se lo tra<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable" style="text-decoration: underline;">gó<span class="note" data-notation="Latina">Re7</span></span></span><br />&emsp;porqué Jo<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span></span> no obede<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ció<span class="note" data-notation="Latina">La</span></span></span><br />&emsp;la palabra de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span>.<br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Jo<span class="note" data-notation="Latina">Re</span></span></span>nás oró a Jehová desde el vientre del pez<br />y en su angustia cla<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">La</span></span></span> <br />más yo con voz de alabanza ofreceré sacrificio<br />cumpliré lo que prome<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">tí<span class="note" data-notation="Latina">Re</span></span></span><br />Al ver Jehová que Jonás arrepentido clamaba<br />le dio otra oportuni<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Sol</span></span></span><br /></p><p class="InterlineadoGuitarra">con su po<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">der<span class="note" data-notation="Latina">Re</span></span></span> ordenó que el gran <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">La</span></span></span>…<br />(solo voz)<br />Niños ¿y que creen que pasó?<br />♫<br /><span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">Pues<span class="note" data-notation="Latina">La</span></span></span> el gran pez, lo vomi<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">tó<span class="note" data-notation="Latina">Re</span></span></span>. <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re7.png' alt="Re7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><b>CORO</b>: x2<br /></p><p class="InterlineadoGuitarra">Y vino un <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">pez<span class="note" data-notation="Latina">Sol</span></span></span> grande muy grande…<br />(solo voz)<br />&emsp;Ahora, díganme ustedes, ¿qué sucedió?<br />(voz niños)<br />&emsp;Se lo tragó (muy bien)<br />♫<br />Y así Jo<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">nás<span class="note" data-notation="Latina">Sol</span></span></span> a Níni<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ve<span class="note" data-notation="Latina">La</span></span></span><br /></p><p class="InterlineadoGuitarra">(solo voz)<br />&emsp;<b><i>Nínive fue la ciudad a la cual Dios envió a Jonás a predicar las buenas nuevas de salvación.</i></b><br />♫<br /><span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">La</span></span></span> palabra de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span>.<br /><span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">La</span></span></span> palabra de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span>.<br /><span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">La</span></span></span> palabra de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span>.<br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Jonás" frameborder="0" allowfullscreen></iframe>            </div>            <div id="DIV_Cursor" class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/era-un-muchachito-de-nombre-david.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">11. Era un muchachito de nombre David</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/la-b-i-b-l-i-a.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">13. La B-I-B-L-I-A</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


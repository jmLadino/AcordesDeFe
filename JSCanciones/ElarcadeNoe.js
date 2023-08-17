﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">Hombre muy famoso<br />en la historia fue Noé<br />hizo un arca inmensa<br />que medía 80 pies<br />la pintó con alquitrán<br />y le puso gran farol<br />y a los animales los metió<br />de dos en dos<br /></p><p class="InterlineadoLetra">Doña cebra entró con<br />con su lisado camisón<br />la siguió el camello<br />la serpiente cascabel,<br />el monito orangután<br />el ratón y el puerco espín<br />la paloma, el burro, el conejo y el zorzal<br /></p><p class="InterlineadoLetra">Cerca de cuarenta días<br />duró el chaparrón<br />Hasta que el inmenso bote<br />quieto se quedó<br /></p><p class="InterlineadoLetra">// Ya salió el señor Noé,<br />que en el viaje no temió,<br />Bajo el arco iris<br />muchas gracias le dio a Dios. //<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m7.png' alt="Fa#m7"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa#m7</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Si</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Hom<span class="note" data-notation="Latina">Mi</span></span></span>bre muy fa<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m7.png' alt="Fa#m7"></span><span class="syllable" style="text-decoration: underline;">mo<span class="note" data-notation="Latina">Fa#m7</span></span></span>so<br />en la his<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Si</span></span></span>ria fue No<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">é<span class="note" data-notation="Latina">Mi</span></span></span> <br />hizo un arca in<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m7.png' alt="Fa#m7"></span><span class="syllable" style="text-decoration: underline;">men<span class="note" data-notation="Latina">Fa#m7</span></span></span>sa <br />que me<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Si</span></span></span> 80 pi<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Mi</span></span></span> <br />la pintó con <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span></span>quitrán <br /><span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Si</span></span></span> le puso <span class="chord" data-tabsaurus="Sol#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol#m.png' alt="Sol#m"></span><span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">Sol#m</span></span></span> fa<span class="chord" data-tabsaurus="Do#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do#m.png' alt="Do#m"></span><span class="syllable" style="text-decoration: underline;">rol<span class="note" data-notation="Latina">Do#m</span></span></span><br />y a los ani<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m7.png' alt="Fa#m7"></span><span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Fa#m7</span></span></span>les los me<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">tió<span class="note" data-notation="Latina">Si</span></span></span> <br />de dos en <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">dos<span class="note" data-notation="Latina">Mi</span></span></span><br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">Do<span class="note" data-notation="Latina">Mi</span></span></span>ña cebra en<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m7.png' alt="Fa#m7"></span><span class="syllable" style="text-decoration: underline;">tró<span class="note" data-notation="Latina">Fa#m7</span></span></span> con<br />con su li<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">sa<span class="note" data-notation="Latina">Si</span></span></span>do cami<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">són<span class="note" data-notation="Latina">Mi</span></span></span><br />la siguió el ca<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m7.png' alt="Fa#m7"></span><span class="syllable" style="text-decoration: underline;">me<span class="note" data-notation="Latina">Fa#m7</span></span></span>llo<br />la ser<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Si</span></span></span>te casca<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">bel<span class="note" data-notation="Latina">Mi</span></span></span>,<br />el monito o<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La"></span><span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">La</span></span></span>ngután<br /><span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Si</span></span></span> ratón y el <span class="chord" data-tabsaurus="Sol#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol#m7.png' alt="Sol#m7"></span><span class="syllable" style="text-decoration: underline;">puer<span class="note" data-notation="Latina">Sol#m7</span></span></span>co es<span class="chord" data-tabsaurus="Do#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do#m.png' alt="Do#m"></span><span class="syllable" style="text-decoration: underline;">pín<span class="note" data-notation="Latina">Do#m</span></span></span><br />la paloma, el <span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa#m7.png' alt="Fa#m7"></span><span class="syllable" style="text-decoration: underline;">bu<span class="note" data-notation="Latina">Fa#m7</span></span></span>rro, el co<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Si.png' alt="Si"></span><span class="syllable" style="text-decoration: underline;">ne<span class="note" data-notation="Latina">Si</span></span></span>jo y el zor<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi"></span><span class="syllable" style="text-decoration: underline;">zal<span class="note" data-notation="Latina">Mi</span></span></span><br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Cer<span class="note" data-notation="Latina">Fa</span></span></span>ca de cua<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Solm.png' alt="Solm"></span><span class="syllable" style="text-decoration: underline;">ren<span class="note" data-notation="Latina">Solm</span></span></span>ta días <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">du<span class="note" data-notation="Latina">Do</span></span></span>ró el chapa<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">rrón<span class="note" data-notation="Latina">Fa</span></span></span> <br /><span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Has<span class="note" data-notation="Latina">Fa</span></span></span>ta que el in<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Solm.png' alt="Solm"></span><span class="syllable" style="text-decoration: underline;">men<span class="note" data-notation="Latina">Solm</span></span></span>so bote <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">quie<span class="note" data-notation="Latina">Do</span></span></span>to se que<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">dó<span class="note" data-notation="Latina">Fa</span></span></span> <br />Ya salió el se<span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La#.png' alt="La#"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La#</span></span></span> Noé, <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Do</span></span></span> en el viaje no te<span class="chord" data-tabsaurus="Lam7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam7.png' alt="Lam7"></span><span class="syllable" style="text-decoration: underline;">mió<span class="note" data-notation="Latina">Lam7</span></span></span>,<br /><span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Rem.png' alt="Rem"></span><span class="syllable" style="text-decoration: underline;">Ba<span class="note" data-notation="Latina">Rem</span></span></span>jo el arco <span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Solm.png' alt="Solm"></span><span class="syllable" style="text-decoration: underline;">iris<span class="note" data-notation="Latina">Solm</span></span></span> muchas <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">gra<span class="note" data-notation="Latina">Do</span></span></span>cias le dio a Di<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">os<span class="note" data-notation="Latina">Fa</span></span></span>.<br /></p><p class="InterlineadoGuitarra">Ya salió el se<span class="chord" data-tabsaurus="La#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La#m.png' alt="La#m"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La#m</span></span></span> Noé, <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Lam</span></span></span> en el viaje no te<span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Rem.png' alt="Rem"></span><span class="syllable" style="text-decoration: underline;">mió<span class="note" data-notation="Latina">Rem</span></span></span>,<br />Bajo el arco <span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Solm.png' alt="Solm"></span><span class="syllable" style="text-decoration: underline;">iris<span class="note" data-notation="Latina">Solm</span></span></span> muchas <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">graaaaacias<span class="note" data-notation="Latina">Do</span></span></span> le dio a <span class="chord" data-tabsaurus="Do#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do#.png' alt="Do#"></span><span class="syllable" style="text-decoration: underline;">Dio<span class="note" data-notation="Latina">Do#</span></span></span>&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re"></span><span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span></span>&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">os<span class="note" data-notation="Latina">Fa</span></span></span>.<br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="El arca de Noé" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/edifica-su-casita-la-fiel-hormiguita.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">7. Edifica su casita la fiel hormiguita</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/el-hombre-prudente.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">9. El hombre prudente</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


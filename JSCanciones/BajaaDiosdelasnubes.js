﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra"></p><p class="InterlineadoLetra">Baja a Dios de las nubes<br />Y llévalo a la fábrica donde trabajas<br />Quita a Dios del retrato<br />y grábalo dentro de tu corazón.<br />Saca a Dios de los templos<br />Donde lo encerraron hace tantos años<br />Déjalo libre en las plazas<br />Y también en el mercado del pueblo<br />Porque Dios no es un Dios muerto<br />Y si piensas que está muerto<br />Equivocado, equivocado,<br />Equivocado estás.<br /></p><p class="InterlineadoLetra">Ayer hablé con él,<br />Y lo noté un tanto triste<br />Hoy hablé con él,<br />Y me dijo que está solo<br />Porque hay muchos hombres<br />que se reúnen en su nombre<br />pero no le dejan entrar a él<br />porque hay muchos hombres<br />que hablan en su nombre<br />pero no le dejan hablar a él.<br /></p><p class="InterlineadoLetra">Baja a Dios de las nubes<br />Y llévalo a la fábrica donde trabajas<br />Quita a Dios del retrato<br />y grábalo dentro de tu corazón.<br />Saca a Dios de los templos<br />Donde lo encerraron hace tantos años<br />Déjalo libre en las plazas<br />Y también en el mercado del pueblo<br />Porque Dios no es un Dios muerto<br />Y si piensas que está muerto<br />Equivocado, equivocado,<br />Equivocado estás.<br /></p><p class="InterlineadoLetra">Porque Dios no es un Dios muerto<br />Y si piensas que está muerto<br />Equivocado, equivocado,<br />Equivocado estás.<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">Ba<span class="note" data-notation="Latina">Do</span></span></span>ja a Dios de las nubes<br />Y llévalo a la <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">fá<span class="note" data-notation="Latina">Mim</span></span></span>brica donde trabajas<br /><span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Qui<span class="note" data-notation="Latina">Fa</span></span></span>ta a Dios del retrato <br />y <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">grá<span class="note" data-notation="Latina">Sol</span></span></span>balo dentro de tu cora<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol7.png' alt="Sol7"></span><span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Sol7</span></span></span>.<br /><span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">Sa<span class="note" data-notation="Latina">Do</span></span></span>ca a Dios de los templos<br />Donde lo ence<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">rra<span class="note" data-notation="Latina">Mim</span></span></span>ron hace tantos años<br /><span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Dé<span class="note" data-notation="Latina">Fa</span></span></span>jalo libre en las plazas<br />Y tam<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Sol</span></span></span> en el mercado del pueblo<br />Porque <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa</span></span></span> no es un Dios muerto<br />Y si <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Do</span></span></span>sas que está muerto<br />E<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do, e<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do,<br />E<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Do</span></span></span>.<br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">Ayer<span class="note" data-notation="Latina">Lam</span></span></span> hablé con él, <br />Y lo no<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">té<span class="note" data-notation="Latina">Mim</span></span></span> un tanto triste<br /><span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Rem.png' alt="Rem"></span><span class="syllable" style="text-decoration: underline;">Hoy<span class="note" data-notation="Latina">Rem</span></span></span> hablé con él,<br />Y me <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Lam</span></span></span>jo que está solo<br />Porque hay muchos hombres <br />que se re<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">ú<span class="note" data-notation="Latina">Mim</span></span></span>nen en su nombre<br /><span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Rem.png' alt="Rem"></span><span class="syllable" style="text-decoration: underline;">pe<span class="note" data-notation="Latina">Rem</span></span></span>ro no le dejan entrar a <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Lam</span></span></span><br /><span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Lam</span></span></span>que hay muchos hombres<br />que <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">Mim</span></span></span>blan en su nombre<br /><span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Rem.png' alt="Rem"></span><span class="syllable" style="text-decoration: underline;">pe<span class="note" data-notation="Latina">Rem</span></span></span>ro no le dejan hablar a <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Lam.png' alt="Lam"></span><span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Lam</span></span></span>.&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra"><span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">Ba<span class="note" data-notation="Latina">Do</span></span></span>ja a Dios de las nubes<br />Y llévalo a la <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">fá<span class="note" data-notation="Latina">Mim</span></span></span>brica donde trabajas<br /><span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Qui<span class="note" data-notation="Latina">Fa</span></span></span>ta a Dios del retrato <br />y <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">grá<span class="note" data-notation="Latina">Sol</span></span></span>balo dentro de tu cora<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol7.png' alt="Sol7"></span><span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Sol7</span></span></span>.<br /><span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">Sa<span class="note" data-notation="Latina">Do</span></span></span>ca a Dios de los templos<br />Donde lo ence<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mim.png' alt="Mim"></span><span class="syllable" style="text-decoration: underline;">rra<span class="note" data-notation="Latina">Mim</span></span></span>ron hace tantos años<br /><span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Dé<span class="note" data-notation="Latina">Fa</span></span></span>jalo libre en las plazas<br />Y tam<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Sol</span></span></span> en el mercado del pueblo<br />Porque <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa</span></span></span> no es un Dios muerto<br />Y si <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Do</span></span></span>sas que está muerto<br />E<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do, e<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do,<br />E<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Do</span></span></span>.<br /></p><p class="InterlineadoGuitarra">Porque <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa</span></span></span> no es un Dios muerto<br />Y si <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Do</span></span></span>sas que está muerto<br />E<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do, e<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do,<br />E<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>vo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span></span>do <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do"></span><span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Do</span></span></span>.<br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Baja a Dios de las nubes" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/aquel-que-la-buena-obra-empezo.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">26. Aquel que la buena obra empezó</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/caminando-voy-para-canaan.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">28. Caminando voy para Canaán</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


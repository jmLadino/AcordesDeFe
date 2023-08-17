﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><br /><br />Baja a Dios de las nubes<br /><br />Y llévalo a la fábrica donde trabajas<br /><br />Quita a Dios del retrato<br /><br />y grábalo dentro de tu corazón.<br /><br />Saca a Dios de los templos<br /><br />Donde lo encerraron hace tantos años<br /><br />Déjalo libre en las plazas<br /><br />Y también en el mercado del pueblo<br /><br />Porque Dios no es un Dios muerto<br /><br />Y si piensas que está muerto<br /><br />Equivocado, equivocado,<br /><br />Equivocado estás.<br /><br /><br /><br />Ayer hablé con él,<br /><br />Y lo noté un tanto triste<br /><br />Hoy hablé con él,<br /><br />Y me dijo que está solo<br /><br />Porque hay muchos hombres<br /><br />que se reúnen en su nombre<br /><br />pero no le dejan entrar a él<br /><br />porque hay muchos hombres<br /><br />que hablan en su nombre<br /><br />pero no le dejan hablar a él.<br /><br /><br /><br />Baja a Dios de las nubes<br /><br />Y llévalo a la fábrica donde trabajas<br /><br />Quita a Dios del retrato<br /><br />y grábalo dentro de tu corazón.<br /><br />Saca a Dios de los templos<br /><br />Donde lo encerraron hace tantos años<br /><br />Déjalo libre en las plazas<br /><br />Y también en el mercado del pueblo<br /><br />Porque Dios no es un Dios muerto<br /><br />Y si piensas que está muerto<br /><br />Equivocado, equivocado,<br /><br />Equivocado estás.<br /><br /><br /><br />Porque Dios no es un Dios muerto<br /><br />Y si piensas que está muerto<br /><br />Equivocado, equivocado,<br /><br />Equivocado estás.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Ba<span class="note" data-notation="Latina">Do</span></span>ja a Dios de las nubes<br /><br />Y llévalo a la <span class="syllable" style="text-decoration: underline;">fá<span class="note" data-notation="Latina">Mim</span></span>brica donde trabajas<br /><br /><span class="syllable" style="text-decoration: underline;">Qui<span class="note" data-notation="Latina">Fa</span></span>ta a Dios del retrato <br /><br />y <span class="syllable" style="text-decoration: underline;">grá<span class="note" data-notation="Latina">Sol</span></span>balo dentro de tu cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Sol7</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">Sa<span class="note" data-notation="Latina">Do</span></span>ca a Dios de los templos<br /><br />Donde lo ence<span class="syllable" style="text-decoration: underline;">rra<span class="note" data-notation="Latina">Mim</span></span>ron hace tantos años<br /><br /><span class="syllable" style="text-decoration: underline;">Dé<span class="note" data-notation="Latina">Fa</span></span>jalo libre en las plazas<br /><br />Y tam<span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Sol</span></span> en el mercado del pueblo<br /><br />Porque <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa</span></span> no es un Dios muerto<br /><br />Y si <span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Do</span></span>sas que está muerto<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do, e<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do,<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Do</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Ayer<span class="note" data-notation="Latina">Lam</span></span> hablé con él, <br /><br />Y lo no<span class="syllable" style="text-decoration: underline;">té<span class="note" data-notation="Latina">Mim</span></span> un tanto triste<br /><br /><span class="syllable" style="text-decoration: underline;">Hoy<span class="note" data-notation="Latina">Rem</span></span> hablé con él,<br /><br />Y me <span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Lam</span></span>jo que está solo<br /><br />Porque hay muchos hombres <br /><br />que se re<span class="syllable" style="text-decoration: underline;">ú<span class="note" data-notation="Latina">Mim</span></span>nen en su nombre<br /><br /><span class="syllable" style="text-decoration: underline;">pe<span class="note" data-notation="Latina">Rem</span></span>ro no le dejan entrar a <span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Lam</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Lam</span></span>que hay muchos hombres<br /><br />que <span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">Mim</span></span>blan en su nombre<br /><br /><span class="syllable" style="text-decoration: underline;">pe<span class="note" data-notation="Latina">Rem</span></span>ro no le dejan hablar a <span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Lam</span></span>.&emsp;<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Ba<span class="note" data-notation="Latina">Do</span></span>ja a Dios de las nubes<br /><br />Y llévalo a la <span class="syllable" style="text-decoration: underline;">fá<span class="note" data-notation="Latina">Mim</span></span>brica donde trabajas<br /><br /><span class="syllable" style="text-decoration: underline;">Qui<span class="note" data-notation="Latina">Fa</span></span>ta a Dios del retrato <br /><br />y <span class="syllable" style="text-decoration: underline;">grá<span class="note" data-notation="Latina">Sol</span></span>balo dentro de tu cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Sol7</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">Sa<span class="note" data-notation="Latina">Do</span></span>ca a Dios de los templos<br /><br />Donde lo ence<span class="syllable" style="text-decoration: underline;">rra<span class="note" data-notation="Latina">Mim</span></span>ron hace tantos años<br /><br /><span class="syllable" style="text-decoration: underline;">Dé<span class="note" data-notation="Latina">Fa</span></span>jalo libre en las plazas<br /><br />Y tam<span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Sol</span></span> en el mercado del pueblo<br /><br />Porque <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa</span></span> no es un Dios muerto<br /><br />Y si <span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Do</span></span>sas que está muerto<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do, e<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do,<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Do</span></span>.<br /><br /><br /><br />Porque <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa</span></span> no es un Dios muerto<br /><br />Y si <span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Do</span></span>sas que está muerto<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do, e<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do,<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Do</span></span>.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Baja a Dios de las nubes" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/aquel-que-la-buena-obra-empezo.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">26. Aquel que la buena obra empezó</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/caminando-voy-para-canaan.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">28. Caminando voy para Canaán</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


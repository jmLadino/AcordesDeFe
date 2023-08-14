﻿const contenidoHTML = `    <div class="container">        <div class="content"><button class="blue-button" onclick="transposeNotes(1)">Subir Medio Tono</button><button class="blue-button" onclick="transposeNotes(-1)">Bajar Medio Tono</button><button class="blue-button" onclick="TonalidadInicial()">Tonalidad Inicial</button><button class="blue-button" onclick="convertirNotacion()">Alternar Notación</button><button id="DIVAcordes" class="blue-button">Acordes</button><div id="container"> <div id="imageContainer" class="fixed-div" style="display: block;"></div> <p><br /><span class="syllable" style="text-decoration: underline;">Ba<span class="note" data-notation="Latina">Do</span></span>ja a Dios de las nubes<br /><br />Y llévalo a la <span class="syllable" style="text-decoration: underline;">fá<span class="note" data-notation="Latina">Mim</span></span>brica donde trabajas<br /><br /><span class="syllable" style="text-decoration: underline;">Qui<span class="note" data-notation="Latina">Fa</span></span>ta a Dios del retrato <br /><br />y <span class="syllable" style="text-decoration: underline;">grá<span class="note" data-notation="Latina">Sol</span></span>balo dentro de tu cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Sol7</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">Sa<span class="note" data-notation="Latina">Do</span></span>ca a Dios de los templos<br /><br />Donde lo ence<span class="syllable" style="text-decoration: underline;">rra<span class="note" data-notation="Latina">Mim</span></span>ron hace tantos años<br /><br /><span class="syllable" style="text-decoration: underline;">Dé<span class="note" data-notation="Latina">Fa</span></span>jalo libre en las plazas<br /><br />Y tam<span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Sol</span></span> en el mercado del pueblo<br /><br />Porque <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Fa</span></span> no es un Dios muerto<br /><br />Y si <span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Do</span></span>sas que está muerto<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do, e<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do,<br /><br />E<span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span>vo<span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Do</span></span>do <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Sol</span></span>-<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Do</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">Ayer<span class="note" data-notation="Latina">Lam</span></span> hablé con él, <br /><br />Y lo no<span class="syllable" style="text-decoration: underline;">té<span class="note" data-notation="Latina">Mim</span></span> un tanto triste<br /><br /><span class="syllable" style="text-decoration: underline;">Hoy<span class="note" data-notation="Latina">Rem</span></span> hablé con él,<br /><br />Y me <span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Lam</span></span>jo que está solo<br /><br />Porque hay muchos hombres <br /><br />que se re<span class="syllable" style="text-decoration: underline;">ú<span class="note" data-notation="Latina">Mim</span></span>nen en su nombre<br /><br /><span class="syllable" style="text-decoration: underline;">pe<span class="note" data-notation="Latina">Rem</span></span>ro no le dejan entrar a <span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Lam</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Lam</span></span>que hay muchos hombres<br /><br />que <span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">Mim</span></span>blan en su nombre<br /><br /><span class="syllable" style="text-decoration: underline;">pe<span class="note" data-notation="Latina">Rem</span></span>ro no le dejan hablar a <span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Lam</span></span>. <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><br /><br /></p> <iframe width="550px" height="315" src="" title="Baja a Dios de las nubes" frameborder="0" allowfullscreen></iframe></div><div class="center"> <a href="https://jmladino.blogspot.com/2023/08/indice.html"><button class="blue-button">INDICE</button></a></div>        </div>    </div>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


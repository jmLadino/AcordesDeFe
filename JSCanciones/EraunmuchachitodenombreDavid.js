﻿const contenidoHTML = `    <div class="container">        <div class="content"><button class="blue-button" onclick="transposeNotes(1)">Subir Medio Tono</button><button class="blue-button" onclick="transposeNotes(-1)">Bajar Medio Tono</button><button class="blue-button" onclick="TonalidadInicial()">Tonalidad Inicial</button><button class="blue-button" onclick="convertirNotacion()">Alternar Notación</button><button id="DIVAcordes" class="blue-button">Acordes</button><div id="container"> <div id="imageContainer" class="fixed-div" style="display: block;"></div> <p><br /><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Mi</span></span> simple muchachito<br /><br />que se llamaba Da<span class="syllable" style="text-decoration: underline;">vid<span class="note" data-notation="Latina">Si</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">un<span class="note" data-notation="Latina">Mi</span></span> simple pastorcito<br /><br />cui<span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">Fa#</span></span>ba su re<span class="syllable" style="text-decoration: underline;">dil<span class="note" data-notation="Latina">Si</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">De<span class="note" data-notation="Latina">Mi</span></span> un arroyito cinco piedritas to<span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Mi</span></span> simple muchachito <br /><br />Ar<span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Si</span></span>do de va<span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">Mi</span></span><br /><br />Y <span class="syllable" style="text-decoration: underline;">una<span class="note" data-notation="Latina">La</span></span> pequeña piedra<br /><br />En su <span class="syllable" style="text-decoration: underline;">on<span class="note" data-notation="Latina">Mi</span></span>da colocó<br /><br /><span class="syllable" style="text-decoration: underline;">Una<span class="note" data-notation="Latina">Fa#7</span></span> pequeña piedra<br /><br />Y la onda giró y gi<span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">Si</span></span><br /><br />Gi<span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">Mi</span></span> y giró, Giró y giró, Giró y giró y gi<span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">La</span></span><br /><br />A<span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Mi</span></span>lla piedrita echó a volar<br /><br />Y el gi<span class="syllable" style="text-decoration: underline;">gan<span class="note" data-notation="Latina">Si</span></span>te se desplo<span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">Mi</span></span><br /><br />Gi<span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">Mi</span></span> y giró, Giró y giró, Giró y giró y gi<span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">La</span></span><br /><br />A<span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Mi</span></span>lla piedrita echó a volar<br /><br />Y el gi<span class="syllable" style="text-decoration: underline;">gan<span class="note" data-notation="Latina">Si</span></span>te se desplo<span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">Mi</span></span>.<br /><br /></p> <iframe width="550px" height="315" src="" title="Era un muchachito de nombre David" frameborder="0" allowfullscreen></iframe></div><div class="center"> <a href="https://jmladino.blogspot.com/2023/08/indice.html"><button class="blue-button">INDICE</button></a></div>        </div>    </div>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


﻿const contenidoHTML = `    <div class="container">        <div class="content"><button class="blue-button" onclick="transposeNotes(1)">Subir Medio Tono</button><button class="blue-button" onclick="transposeNotes(-1)">Bajar Medio Tono</button><button class="blue-button" onclick="TonalidadInicial()">Tonalidad Inicial</button><button class="blue-button" onclick="convertirNotacion()">Alternar Notación</button><button id="DIVAcordes" class="blue-button">Acordes</button><div id="container"> <div id="imageContainer" class="fixed-div" style="display: block;"></div> <p><br />San<span class="syllable" style="text-decoration: underline;">són<span class="note" data-notation="Latina">Re</span></span> era un muchacho así, así, <span class="syllable" style="text-decoration: underline;">así<span class="note" data-notation="Latina">La</span></span><br /><br />Te<span class="syllable" style="text-decoration: underline;">nía<span class="note" data-notation="Latina">La</span></span> mucha fuerza así, así, <span class="syllable" style="text-decoration: underline;">así<span class="note" data-notation="Latina">Re</span></span><br /><br />Vinieron los filisteos a a<span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Re7</span></span>car a Isra<span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Sol</span></span><br /><br />Y <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Sol</span></span> y pum y <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span> <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span> <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span><br /><br />San<span class="syllable" style="text-decoration: underline;">són<span class="note" data-notation="Latina">La</span></span> los derri<span class="syllable" style="text-decoration: underline;">bó<span class="note" data-notation="Latina">Re</span></span><br /><br /></p> <iframe width="550px" height="315" src="" title="Sansón" frameborder="0" allowfullscreen></iframe></div><div class="center"> <a href="https://jmladino.blogspot.com/2023/08/indice.html"><button class="blue-button">INDICE</button></a></div>        </div>    </div>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


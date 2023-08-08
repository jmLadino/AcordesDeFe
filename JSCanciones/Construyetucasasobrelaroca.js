﻿const contenidoHTML = `    <div class="container">        <div class="content"><button class="blue-button" onclick="transposeNotes(1)">Subir Medio Tono</button><button class="blue-button" onclick="transposeNotes(-1)">Bajar Medio Tono</button><button class="blue-button" onclick="TonalidadInicial()">Tonalidad Inicial</button><button class="blue-button" onclick="convertirNotacion()">Alternar Notación</button><button id="DIVAcordes" class="blue-button">Acordes</button><div id="container"> <div id="imageContainer" class="fixed-div" style="display: block;"></div> <p><br />Construye tu <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>sa sobre la roca<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Sol</span></span>sa sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Re</span></span>ca<br /><br />Construye tu casa sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Sim</span></span>ca<br /><br />Y dura<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">La</span></span><br /><br />No habrá po<span class="syllable" style="text-decoration: underline;">der<span class="note" data-notation="Latina">Re</span></span> en este <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Re7</span></span>do<br /><br />que pueda sepa<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span>nos de su pa<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span>bra<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>sa sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">La</span></span>ca<br /><br />Que es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span>.<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Re</span></span>da sobre la roca<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Sol</span></span>da sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Re</span></span>ca<br /><br />Construye tu vida sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Sim</span></span>ca<br /><br />Y dura<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">La</span></span><br /><br />No habrá po<span class="syllable" style="text-decoration: underline;">der<span class="note" data-notation="Latina">Re</span></span> en este <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Re7</span></span>do<br /><br />que pueda sepa<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span>nos de su pa<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span>bra<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Re</span></span>da sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">La</span></span>ca<br /><br />Que es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span>.<br /><br />Construye tu i<span class="syllable" style="text-decoration: underline;">gle<span class="note" data-notation="Latina">Re</span></span>sia sobre la roca<br /><br />Construye tu i<span class="syllable" style="text-decoration: underline;">gle<span class="note" data-notation="Latina">Sol</span></span>sia sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Re</span></span>ca<br /><br />Construye tu i<span class="syllable" style="text-decoration: underline;">gle<span class="note" data-notation="Latina">Sim</span></span>sia sobre la <br /><br />Y dura<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">La</span></span><br /><br />No habrá po<span class="syllable" style="text-decoration: underline;">der<span class="note" data-notation="Latina">Re</span></span> en este <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Re7</span></span>do<br /><br />que pueda sepa<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span>nos de su pa<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span>bra<br /><br />Construye tu i<span class="syllable" style="text-decoration: underline;">gle<span class="note" data-notation="Latina">Re</span></span>sia sobre la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">La</span></span>ca<br /><br />Que es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span>.<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>sa, vida, iglesia<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Sol</span></span>sa, vida, i<span class="syllable" style="text-decoration: underline;">gle<span class="note" data-notation="Latina">Re</span></span>sia<br /><br />Construye tu casa, vida, i<span class="syllable" style="text-decoration: underline;">gle<span class="note" data-notation="Latina">Sim</span></span>sia<br /><br />Y dura<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">La</span></span><br /><br />No habrá po<span class="syllable" style="text-decoration: underline;">der<span class="note" data-notation="Latina">Re</span></span> en este <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Re7</span></span>do<br /><br />que pueda sepa<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span>nos de su pa<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span>bra<br /><br />Construye tu <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>sa, vida, i<span class="syllable" style="text-decoration: underline;">gle<span class="note" data-notation="Latina">La</span></span>sia<br /><br />Que es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span>.<br /><br /></p> <iframe width="550px" height="315" src="" title="Construye tu casa sobre la roca" frameborder="0" allowfullscreen></iframe></div><div class="center"> <a href="https://jmladino.blogspot.com/2023/08/indice.html"><button class="blue-button">INDICE</button></a></div>        </div>    </div>`;
document.body.innerHTML = contenidoHTML;


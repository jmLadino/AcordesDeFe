﻿const contenidoHTML = `    <div class="container">        <div class="content"><button class="blue-button" onclick="transposeNotes(1)">Subir Medio Tono</button><button class="blue-button" onclick="transposeNotes(-1)">Bajar Medio Tono</button><button class="blue-button" onclick="TonalidadInicial()">Tonalidad Inicial</button><button class="blue-button" onclick="convertirNotacion()">Alternar Notación</button><button id="DIVAcordes" class="blue-button">Acordes</button><div id="container"> <div id="imageContainer" class="fixed-div" style="display: block;"></div> <p><br />Edi<span class="syllable" style="text-decoration: underline;">fi<span class="note" data-notation="Latina">Re</span></span>ca su casita la <span class="syllable" style="text-decoration: underline;">fiel<span class="note" data-notation="Latina">La</span></span> hormi<span class="syllable" style="text-decoration: underline;">gui<span class="note" data-notation="Latina">Re</span></span>ta<br /><br />Edi<span class="syllable" style="text-decoration: underline;">fi<span class="note" data-notation="Latina">Re</span></span>ca su casita con <span class="syllable" style="text-decoration: underline;">mu<span class="note" data-notation="Latina">La</span></span>cho a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span><br /><br />Su<span class="syllable" style="text-decoration: underline;">be<span class="note" data-notation="Latina">La</span></span> por los <span class="syllable" style="text-decoration: underline;">mon<span class="note" data-notation="Latina">Re</span></span>tes<br /><br />Ba<span class="syllable" style="text-decoration: underline;">ja<span class="note" data-notation="Latina">La</span></span> por los <span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Re</span></span>lles<br /><br />// <span class="syllable" style="text-decoration: underline;">Tra<span class="note" data-notation="Latina">Re</span></span>lalalalala la<span class="syllable" style="text-decoration: underline;">lala<span class="note" data-notation="Latina">La</span></span> la<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span> //<br /><br />Y si <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Re</span></span> también trabajas por <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">La</span></span>to tu a<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span>go, <br /><br />Sem<span class="syllable" style="text-decoration: underline;">bran<span class="note" data-notation="Latina">Re</span></span>do la palabra con <span class="syllable" style="text-decoration: underline;">mu<span class="note" data-notation="Latina">La</span></span>cho a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span><br /><br />Su<span class="syllable" style="text-decoration: underline;">ben<span class="note" data-notation="Latina">La</span></span> ora<span class="syllable" style="text-decoration: underline;">cio<span class="note" data-notation="Latina">Re</span></span>nes<br /><br />Baj<span class="syllable" style="text-decoration: underline;">an<span class="note" data-notation="Latina">La</span></span> bendi<span class="syllable" style="text-decoration: underline;">cio<span class="note" data-notation="Latina">Re</span></span>nes<br /><br />// <span class="syllable" style="text-decoration: underline;">Tra<span class="note" data-notation="Latina">Re</span></span>lalalalala la<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span>la la<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span> //<br /><br /></p> <iframe width="550px" height="315" src="" title="Edifica su casita la fiel hormiguita" frameborder="0" allowfullscreen></iframe></div><div class="center"> <a href="https://jmladino.blogspot.com/2023/08/indice.html"><button class="blue-button">INDICE</button></a></div>        </div>    </div>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


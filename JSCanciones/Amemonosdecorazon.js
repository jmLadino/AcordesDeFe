﻿const contenidoHTML = `    <div class="container">        <div class="content"><button class="blue-button" onclick="transposeNotes(1)">Subir Medio Tono</button><button class="blue-button" onclick="transposeNotes(-1)">Bajar Medio Tono</button><button class="blue-button" onclick="TonalidadInicial()">Tonalidad Inicial</button><button class="blue-button" onclick="convertirNotacion()">Alternar Notación</button><button id="DIVAcordes" class="blue-button">Acordes</button><div id="container"> <div id="imageContainer" class="fixed-div" style="display: block;"></div> <p><br />// A<span class="syllable" style="text-decoration: underline;">mé<span class="note" data-notation="Latina">Lam</span></span>monos de cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Mi</span></span><br /><br />No de labios, ni de o<span class="syllable" style="text-decoration: underline;">í<span class="note" data-notation="Latina">Lam</span></span>dos //<br /><br />// <span class="syllable" style="text-decoration: underline;">Pa<span class="note" data-notation="Latina">Rem</span></span>ra cuando Cristo <span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Lam</span></span>ga<br /><br />Para cuando Cristo <span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Mi</span></span>ga<br /><br />Nos encuentre prepa<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">Lam</span></span><span class="syllable" style="text-decoration: underline;">dos<span class="note" data-notation="Latina">La7</span></span>//<br /><br />// ¿ <span class="syllable" style="text-decoration: underline;">Có<span class="note" data-notation="Latina">Lam</span></span>mo puedes tu o<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Mi</span></span><br /><br />enojado con tu her<span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Lam</span></span>no? //<br /><br />// <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Rem</span></span> no escucha la ora<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Lam</span></span><br /><br />Dios no escucha la ora<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Mi</span></span><br /><br />Si no estás reconci<span class="syllable" style="text-decoration: underline;">lia<span class="note" data-notation="Latina">Lam</span></span><span class="syllable" style="text-decoration: underline;">do<span class="note" data-notation="Latina">La7</span></span>//<br /><br /></p> <iframe width="550px" height="315" src="" title="Amémonos de corazón" frameborder="0" allowfullscreen></iframe></div><div class="center"> <a href="https://jmladino.blogspot.com/2023/08/indice.html"><button class="blue-button">INDICE</button></a></div>        </div>    </div>`;
document.body.innerHTML = contenidoHTML;


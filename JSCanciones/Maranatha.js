﻿const contenidoHTML = `    <div class="container">        <div class="content"><button class="blue-button" onclick="transposeNotes(1)">Subir Medio Tono</button><button class="blue-button" onclick="transposeNotes(-1)">Bajar Medio Tono</button><button class="blue-button" onclick="TonalidadInicial()">Tonalidad Inicial</button><button class="blue-button" onclick="convertirNotacion()">Alternar Notación</button><button id="DIVAcordes" class="blue-button">Acordes</button><div id="container"> <div id="imageContainer" class="fixed-div" style="display: block;"></div> <p><br />INTRO:<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">Tú<span class="note" data-notation="Latina">Sim</span></span> eres mi luz, <span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Sol</span></span>mi salvación<br /><br />a <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Re</span></span> me rendi<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">si<span class="note" data-notation="Latina">Sim</span></span> a tu lado estoy <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">Sol</span></span>guro en tus manos<br /><br /><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Re</span></span>da teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>,     Tú eres <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Re</span></span>to Oh Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>,     Tú eres <span class="syllable" style="text-decoration: underline;">dig<span class="note" data-notation="Latina">Re</span></span>no de lo<span class="syllable" style="text-decoration: underline;">or<span class="note" data-notation="Latina">La</span></span><br /><br /><b>CORO</b>:<br /><br />// <span class="syllable" style="text-decoration: underline;">So<span class="note" data-notation="Latina">Sol</span></span>lo en ti confía<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Sim</span></span>,  yo nada teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Re</span></span><br /><br />al frente yo i<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>,  pues yo sé que vivo es<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Sol</span></span><br /><br />y un día volve<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">Sim</span></span>,  nos vendrás a bus<span class="syllable" style="text-decoration: underline;">car<span class="note" data-notation="Latina">Re</span></span><br /><br />y siempre reina<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">La</span></span>, Aleluya //<br /><br />PUENTE:<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">Tú<span class="note" data-notation="Latina">Sim</span></span> eres mi luz, <span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Sol</span></span>mi salvación<br /><br />a <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Re</span></span> me rendi<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">si<span class="note" data-notation="Latina">Sim</span></span> a tu lado estoy <span class="syllable" style="text-decoration: underline;">seguro<span class="note" data-notation="Latina">Sol</span></span>en tus manos<br /><br /><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Re</span></span>da teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>,     Tú eres <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Re</span></span>to Oh Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>,     Tú eres <span class="syllable" style="text-decoration: underline;">dig<span class="note" data-notation="Latina">Re</span></span>no de lo<span class="syllable" style="text-decoration: underline;">or<span class="note" data-notation="Latina">La</span></span><br /><br /><b>CORO</b>:<br /><br />// <span class="syllable" style="text-decoration: underline;">So<span class="note" data-notation="Latina">Sol</span></span>lo en ti confía<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Sim</span></span>,  yo nada teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Re</span></span><br /><br />al frente yo i<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>,  pues yo sé que vivo es<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Sol</span></span><br /><br />y un día volve<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">Sim</span></span>,  nos vendrás a bus<span class="syllable" style="text-decoration: underline;">car<span class="note" data-notation="Latina">Re</span></span><br /><br />y siempre reina<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">La</span></span>, Aleluya //<br /><br />PUENTE:<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br />//// Ven Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span>, ven Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Sol</span></span><br /><br />Mara<span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Re</span></span>tha, ahora ven Señor Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">La</span></span>////<br /><br /><b>CORO</b> x2<br /><br />Arpegio final:<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /></p> <iframe width="550px" height="315" src="" title="Maranatha" frameborder="0" allowfullscreen></iframe></div><div class="center"> <a href="https://jmladino.blogspot.com/2023/08/indice.html"><button class="blue-button">INDICE</button></a></div>        </div>    </div>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


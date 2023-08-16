﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Tú eres mi luz, y mi salvación<br /><br />a ti me rendiré<br /><br />si a tu lado estoy seguro en tus manos<br /><br />nada temeré.<br /><br /><br /><br />oh, oh, oh, Tú eres santo Oh Señor<br /><br />oh, oh, oh, Tú eres digno de loor<br /><br /><br /><br />CORO:<br /><br />&emsp;// Solo en ti confiaré, yo nada temeré<br /><br />&emsp;al frente yo iré, pues yo sé que vivo estás<br /><br />&emsp;y un día volverás, nos vendrás a buscar<br /><br />&emsp;y siempre reinarás, Aleluya //<br /><br /><br /><br />Tú eres mi luz, y mi salvación<br /><br />a ti me rendiré<br /><br />si a tu lado estoy seguro en tus manos<br /><br />nada temeré.<br /><br /><br /><br />oh, oh, oh, Tú eres santo Oh Señor<br /><br />oh, oh, oh, Tú eres digno de loor<br /><br /><br /><br />CORO:<br /><br />&emsp;// Solo en ti confiaré, yo nada temeré<br /><br />&emsp;al frente yo iré, pues yo sé que vivo estás<br /><br />&emsp;y un día volverás, nos vendrás a buscar<br /><br />&emsp;y siempre reinarás, Aleluya //<br /><br /><br /><br />//// Ven Jesús, ven Jesús<br /><br />maranatha, ahora ven Señor Jesús ////<br /><br /><br /><br />CORO x2<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br />INTRO:<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Tú<span class="note" data-notation="Latina">Sim</span></span> eres mi luz, <span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Sol</span></span>mi salvación<br /><br />a <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Re</span></span> me rendi<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">si<span class="note" data-notation="Latina">Sim</span></span> a tu lado estoy <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">Sol</span></span>guro en tus manos<br /><br /><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Re</span></span>da teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>, Tú eres <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Re</span></span>to Oh Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>, Tú eres <span class="syllable" style="text-decoration: underline;">dig<span class="note" data-notation="Latina">Re</span></span>no de lo<span class="syllable" style="text-decoration: underline;">or<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br /><b>CORO</b>:<br /><br />&emsp;// <span class="syllable" style="text-decoration: underline;">So<span class="note" data-notation="Latina">Sol</span></span>lo en ti confía<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Sim</span></span>,  yo nada teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Re</span></span><br /><br />&emsp;al frente yo i<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>,  pues yo sé que vivo es<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Sol</span></span><br /><br />&emsp;y un día volve<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">Sim</span></span>,  nos vendrás a bus<span class="syllable" style="text-decoration: underline;">car<span class="note" data-notation="Latina">Re</span></span><br /><br />&emsp;y siempre reina<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">La</span></span>, Aleluya //<br /><br /><br /><br />PUENTE:<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Tú<span class="note" data-notation="Latina">Sim</span></span> eres mi luz, <span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Sol</span></span>mi salvación<br /><br />a <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Re</span></span> me rendi<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">si<span class="note" data-notation="Latina">Sim</span></span> a tu lado estoy <span class="syllable" style="text-decoration: underline;">seguro<span class="note" data-notation="Latina">Sol</span></span>en tus manos<br /><br /><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Re</span></span>da teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>,     Tú eres <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Re</span></span>to Oh Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sol</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">oh<span class="note" data-notation="Latina">Sim</span></span>,     Tú eres <span class="syllable" style="text-decoration: underline;">dig<span class="note" data-notation="Latina">Re</span></span>no de lo<span class="syllable" style="text-decoration: underline;">or<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br /><b>CORO</b>:<br /><br />&emsp;// <span class="syllable" style="text-decoration: underline;">So<span class="note" data-notation="Latina">Sol</span></span>lo en ti confía<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Sim</span></span>,  yo nada teme<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Re</span></span><br /><br />&emsp;al frente yo i<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span>,  pues yo sé que vivo es<span class="syllable" style="text-decoration: underline;">tás<span class="note" data-notation="Latina">Sol</span></span><br /><br />&emsp;y un día volve<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">Sim</span></span>,  nos vendrás a bus<span class="syllable" style="text-decoration: underline;">car<span class="note" data-notation="Latina">Re</span></span><br /><br />&emsp;y siempre reina<span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">La</span></span>, Aleluya //<br /><br /><br /><br />PUENTE:<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br />//// Ven Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span>, ven Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Sol</span></span><br /><br />Mara<span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Re</span></span>tha, ahora ven Señor Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">La</span></span>////<br /><br /><br /><br /><b>CORO</b> x2<br /><br /><br /><br />Arpegio final:<br /><br /><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Maranatha" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/07/la-esperanza-es-jesus.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">42. La esperanza es Jesús</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/mi-pensamiento.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">44. Mi Pensamiento</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


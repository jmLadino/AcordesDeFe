﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />No me importa lo que diga la gente<br /><br />no me importa lo que digan de mi<br /><br />soporta un poquito más que Jesucristo<br /><br />ya viene debes estar preparado<br /><br />porque el ha prometido volver y así lo hará<br /><br /><br /><br />CORO:<br /><br />&emsp;// Volverá, Volverá Jesús volverá<br /><br />&emsp;el vendrá otra vez por ti y por mi //<br /><br /><br /><br />Hambre dolor y pestilencias<br /><br />guerras y rumores de guerras<br /><br />se han levantado falsos profetas<br /><br />diciendo que son el cristo<br /><br />pero acabarán porque Él ha prometido<br /><br />volver y así lo hará<br /><br /><br /><br />CORO:<br /><br /><br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br />No me im<span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Do</span></span>ta lo que diga la <span class="syllable" style="text-decoration: underline;">gen<span class="note" data-notation="Latina">Lam</span></span>te<br /><br />no me im<span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Fa</span></span>ta lo que digan de <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sol</span></span><br /><br />so<span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Mim</span></span>ta un poquito <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Lam</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Fa</span></span> Jesucristo ya <span class="syllable" style="text-decoration: underline;">vie<span class="note" data-notation="Latina">Sol</span></span>ne<br /><br /><span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Mim</span></span>bes estar prepa<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">Lam</span></span>do<br /><br /><span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Fa</span></span>que el ha prome<span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Sol</span></span>do volver y así lo ha<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Do</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span><br /><br /><br /><br /><b>CORO</b>:<br /><br />&emsp;// Volve<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Fa</span></span>, Volve<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span> volve<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Lam</span></span><br /><br />&emsp;el ven<span class="syllable" style="text-decoration: underline;">drá<span class="note" data-notation="Latina">Rem</span></span> otra <span class="syllable" style="text-decoration: underline;">vez<span class="note" data-notation="Latina">G</span></span> por ti y por <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">C</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">C7</span></span>//<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Ham<span class="note" data-notation="Latina">Do</span></span>bre dolor y pesti<span class="syllable" style="text-decoration: underline;">len<span class="note" data-notation="Latina">Lam</span></span>cias<br /><br /><span class="syllable" style="text-decoration: underline;">gue<span class="note" data-notation="Latina">Fa</span></span>rras y rumores de <span class="syllable" style="text-decoration: underline;">gue<span class="note" data-notation="Latina">Sol</span></span>rras<br /><br />se han levan<span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Mim</span></span>do falsos pro<span class="syllable" style="text-decoration: underline;">fe<span class="note" data-notation="Latina">Lam</span></span>tasa<br /><br />Di<span class="syllable" style="text-decoration: underline;">cien<span class="note" data-notation="Latina">Fa</span></span>do que son el <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to<br /><br /><span class="syllable" style="text-decoration: underline;">pe<span class="note" data-notation="Latina">Mim</span></span>ro acaba<span class="syllable" style="text-decoration: underline;">rán<span class="note" data-notation="Latina">Lam</span></span> <span class="syllable" style="text-decoration: underline;">por<span class="note" data-notation="Latina">Fa</span></span>que el ha prome<span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Sol</span></span>do<br /><br />volver y así lo ha<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Do</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do7</span></span><br /><br /><br /><br /><b>CORO</b>:<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Volverá" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/un-palacio-tengo-alla.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">56. Un palacio tengo allá</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="El Señor es mi pastor"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">58. Salmo 23</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


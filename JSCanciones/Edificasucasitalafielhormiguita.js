﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>				<p><br />Edifica su casita la fiel hormiguita<br /><br />Edifica su casita con mucho amor<br /><br />Sube por los montes<br /><br />Baja por los valles<br /><br /><br /><br />// Tralalalalala lalala lala //<br /><br /><br /><br />Y si tú también trabajas por Cristo tu amigo,<br /><br />Sembrando la palabra con mucho amor<br /><br />Suben oraciones<br /><br />Bajan bendiciones<br /><br /><br /><br />// Tralalalalala lalala lala //<br /><br /><br /><br /></p>			</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>				<br />				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br /><br /><br />Edi<span class="syllable" style="text-decoration: underline;">fi<span class="note" data-notation="Latina">Re</span></span>ca su casita la <span class="syllable" style="text-decoration: underline;">fiel<span class="note" data-notation="Latina">La</span></span> hormi<span class="syllable" style="text-decoration: underline;">gui<span class="note" data-notation="Latina">Re</span></span>ta<br /><br />Edi<span class="syllable" style="text-decoration: underline;">fi<span class="note" data-notation="Latina">Re</span></span>ca su casita con <span class="syllable" style="text-decoration: underline;">mu<span class="note" data-notation="Latina">La</span></span>cho a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span><br /><br />Su<span class="syllable" style="text-decoration: underline;">be<span class="note" data-notation="Latina">La</span></span> por los <span class="syllable" style="text-decoration: underline;">mon<span class="note" data-notation="Latina">Re</span></span>tes<br /><br />Ba<span class="syllable" style="text-decoration: underline;">ja<span class="note" data-notation="Latina">La</span></span> por los <span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Re</span></span>lles<br /><br /><br /><br />// <span class="syllable" style="text-decoration: underline;">Tra<span class="note" data-notation="Latina">Re</span></span>lalalalala la<span class="syllable" style="text-decoration: underline;">lala<span class="note" data-notation="Latina">La</span></span> la<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span> //<br /><br /><br /><br />Y si <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Re</span></span> también trabajas por <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">La</span></span>to tu a<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span>go, <br /><br />Sem<span class="syllable" style="text-decoration: underline;">bran<span class="note" data-notation="Latina">Re</span></span>do la palabra con <span class="syllable" style="text-decoration: underline;">mu<span class="note" data-notation="Latina">La</span></span>cho a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span><br /><br />Su<span class="syllable" style="text-decoration: underline;">ben<span class="note" data-notation="Latina">La</span></span> ora<span class="syllable" style="text-decoration: underline;">cio<span class="note" data-notation="Latina">Re</span></span>nes<br /><br />Baj<span class="syllable" style="text-decoration: underline;">an<span class="note" data-notation="Latina">La</span></span> bendi<span class="syllable" style="text-decoration: underline;">cio<span class="note" data-notation="Latina">Re</span></span>nes<br /><br /><br /><br />// <span class="syllable" style="text-decoration: underline;">Tra<span class="note" data-notation="Latina">Re</span></span>lalalalala la<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span>la la<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Re</span></span> //<br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="Edifica su casita la fiel hormiguita" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


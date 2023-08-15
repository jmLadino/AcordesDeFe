﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>							</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>								<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br />Mi<span class="syllable" style="text-decoration: underline;">rad<span class="note" data-notation="Latina">ReSol</span></span>cual amor nos ha <br /><br />el Padre al ha<span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">Re</span></span>nos hijos de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span><br /><br />Mi<span class="syllable" style="text-decoration: underline;">rad<span class="note" data-notation="Latina">Re</span></span> cual amor nos ha <span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">Sol</span></span>do<br /><br />el Padre al ha<span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">Re</span></span>nos <span class="syllable" style="text-decoration: underline;">hi<span class="note" data-notation="Latina">La</span></span>jos de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">Pa<span class="note" data-notation="Latina">Re</span></span>-<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">Sol</span></span> ser lla<span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>dos hijos de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">Pa<span class="note" data-notation="Latina">Re</span></span>-<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">Sol</span></span> ser lla<span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>dos <span class="syllable" style="text-decoration: underline;">hi<span class="note" data-notation="Latina">La</span></span>jos de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span>.<br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="Mirad cual amor" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


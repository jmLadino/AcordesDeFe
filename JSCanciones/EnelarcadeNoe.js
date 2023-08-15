﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>							</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>								<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br />En el <span class="syllable" style="text-decoration: underline;">ar<span class="note" data-notation="Latina">Re</span></span>ca de Noé<br /><br />Todos <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">La</span></span>ben, todos <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>ben<br /><br />En el <span class="syllable" style="text-decoration: underline;">ar<span class="note" data-notation="Latina">Re</span></span>ca de Noé<br /><br />Todos <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">La</span></span>ben, y tú tam<span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Re</span></span>.<br /><br />Quieres saber, como hace el/la <span class="syllable" style="text-decoration: underline;">perri<span class="note" data-notation="Latina">La</span></span>-<span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Re</span></span> / gatito / patito<span class="syllable" style="text-decoration: underline;"><span class="note" data-notation="Latina"></span></span><br /><br />Quiere saber, el/la <span class="syllable" style="text-decoration: underline;">perrito<span class="note" data-notation="Latina">La</span></span> / gatito / patito<span class="syllable" style="text-decoration: underline;"><span class="note" data-notation="Latina"></span></span> hace <span class="syllable" style="text-decoration: underline;">así<span class="note" data-notation="Latina">Re</span></span>.<br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="En el arca de Noé" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


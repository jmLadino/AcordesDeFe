﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>							</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>								<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br />Con <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz<br /><br />Con Cristo en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span><br /><br />Con <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span>pi en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz<br /><br />Con papi en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span><br /><br />Con <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>mi en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz<br /><br />Con mami en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span><br /><br />Con mi her<span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>no en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz<br /><br />Con mi hermano en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span><br /><br />Con <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span> hogar feliz<br /><br />Con Cristo en la familia<br /><br />Que hogar feliz<br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">La</span></span> hogar fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="Con Cristo en la familia" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


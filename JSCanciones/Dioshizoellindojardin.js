﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>				<p><br />Dios hizo el lindo jardín, pin-pin<br /><br />Dios cuida los pajaritos, piu-piu<br /><br />Él cuida también las flooo-res<br /><br />Y todos los pecesitos<br /><br /><br /><br />Fue Dios quien hizo al gallo, co-co<br /><br />La gallina y los pollitos, piu-piu<br /><br />El buey también el cabaaa-llo<br /><br />Y mi bonito perrito, guau-guau<br /><br /><br /><br /></p>			</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>				<br />				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br /><br /><br />Dios <span class="syllable" style="text-decoration: underline;">hi<span class="note" data-notation="Latina">Re</span></span>zo el lindo jar<span class="syllable" style="text-decoration: underline;">dín<span class="note" data-notation="Latina">La</span></span>, pin-pin<br /><br />Dios cuida los paja<span class="syllable" style="text-decoration: underline;">ri<span class="note" data-notation="Latina">Re</span></span>tos, piu-piu<br /><br />Él cuida también las <span class="syllable" style="text-decoration: underline;">flo<span class="note" data-notation="Latina">Sol</span></span>-<span class="syllable" style="text-decoration: underline;">res<span class="note" data-notation="Latina">Re</span></span><br /><br />Y <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">La</span></span>dos los pece<span class="syllable" style="text-decoration: underline;">si<span class="note" data-notation="Latina">Re</span></span>tos<br /><br /><br /><br />Fue <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span> quien hizo al <span class="syllable" style="text-decoration: underline;">ga<span class="note" data-notation="Latina">La</span></span>llo, co-co<br /><br />La gallina y los po<span class="syllable" style="text-decoration: underline;">lli<span class="note" data-notation="Latina">Re</span></span>tos, piu-piu<br /><br />El buey también el ca<span class="syllable" style="text-decoration: underline;">ba<span class="note" data-notation="Latina">Sol</span></span>-<span class="syllable" style="text-decoration: underline;">llo<span class="note" data-notation="Latina">Re</span></span><br /><br />Y <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">La</span></span> bonito pe<span class="syllable" style="text-decoration: underline;">rri<span class="note" data-notation="Latina">Re</span></span>to, guau-guau<br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="Dios hizo el lindo jardín" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>							</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>								<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br /><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">Do</span></span>alegría está en el corazón<br /><br />de a<span class="syllable" style="text-decoration: underline;">quel<span class="note" data-notation="Latina">Fa</span></span> que conoce a Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br />La verdadera paz está en a<span class="syllable" style="text-decoration: underline;">quel<span class="note" data-notation="Latina">Lam</span></span><br /><br />que <span class="syllable" style="text-decoration: underline;">ya<span class="note" data-notation="Latina">Rem</span></span> conoce a Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Sol</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Do</span></span> sentimiento más pre<span class="syllable" style="text-decoration: underline;">cio<span class="note" data-notation="Latina">Do7</span></span>so<br /><br />que <span class="syllable" style="text-decoration: underline;">vie<span class="note" data-notation="Latina">Fa</span></span>ne de nuestro Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Do</span></span><br /><br />es el a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Do</span></span>, el a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span> de quien conoce a Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br />Ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Do</span></span>ya, ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Fa</span></span><span class="syllable" style="text-decoration: underline;">ya<span class="note" data-notation="Latina">Do</span></span>, ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Lam</span></span>ya, ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Rem</span></span><span class="syllable" style="text-decoration: underline;">ya<span class="note" data-notation="Latina">Sol</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Do</span></span> sentimiento más pre<span class="syllable" style="text-decoration: underline;">cio<span class="note" data-notation="Latina">Do7</span></span>so<br /><br />que <span class="syllable" style="text-decoration: underline;">vie<span class="note" data-notation="Latina">Fa</span></span>ne de nuestro Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Do</span></span><br /><br />es el a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Do</span></span>, el a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span> de quien conoce a Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br />es el a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Do</span></span>, el a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span> de quien conoce a Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="La alegría" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


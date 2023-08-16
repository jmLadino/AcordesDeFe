﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />Como las olas, del enorme mar<br /><br />el amor de Cristo, todo es para mí.<br /><br /><br /><br />En el gran mar, en el gran mar,<br /><br />Cristo, tú mi piloto se.<br /><br />En el gran mar, en el gran mar,<br /><br />el cristalino mar.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Co<span class="note" data-notation="Latina">Do</span></span>mo las <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Fa</span></span>las, <span class="syllable" style="text-decoration: underline;">del<span class="note" data-notation="Latina">Sol</span></span> enorme <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Do</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Do</span></span> amor de <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Fa</span></span>to, <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Sol</span></span>do es para <span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Do</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">En<span class="note" data-notation="Latina">Do</span></span> el gran mar, <span class="syllable" style="text-decoration: underline;">en<span class="note" data-notation="Latina">Fa</span></span>el gran mar,<br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to, tú mi pi<span class="syllable" style="text-decoration: underline;">lo<span class="note" data-notation="Latina">Do</span></span>to se.<br /><br /><span class="syllable" style="text-decoration: underline;">En<span class="note" data-notation="Latina">Do</span></span> el gran mar, <span class="syllable" style="text-decoration: underline;">en<span class="note" data-notation="Latina">Fa</span></span>el gran mar,<br /><br /><span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Sol</span></span> cristalino <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Do</span></span>.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="En el gran mar" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/el-hombre-que-anduvo-en-galilea.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">35. El hombre que anduvo en Galilea</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/fija-tus-ojos-en-cristo.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">37. Fija tus ojos en Cristo</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


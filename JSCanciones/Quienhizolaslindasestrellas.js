﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">¿Quién hizo las lindas estrellas?<br />Las lindas estrellas, las lindas estrellas<br />¿Quién hizo las lindas estrellas?<br />Cristo mi Jesús<br /></p><p class="InterlineadoLetra">¿Quién hizo el mar azul?<br />El mar azul, el mar azul<br />¿Quién hizo el mar azul?<br />Cristo mi Jesús<br /></p><p class="InterlineadoLetra">¿Quién hizo las aves que vuelan?<br />Las aves que vuelan, las aves que vuelan<br />¿Quién hizo las aves que vuelan?<br />Cristo mi Jesús<br /></p><p class="InterlineadoLetra">¿Quién nos hizo a ti y a mí?<br />A ti y a mí, a ti y a mí<br />¿Quién nos hizo a ti y a mí?<br />Cristo mi Jesús<br /></p><p class="InterlineadoLetra">¿Quién hizo las lindas estrellas?<br />El mar azul, las aves que vuelan<br />¿Quién nos hizo a ti y a mí?<br />Cristo mi Jesús<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <div id="DIV_Ribbon">                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                  <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                  <button id="btnAcordes" class="blue-button">Acordes</button>                </div>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> hizo las lindas estrellas?<br />Las <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Sol</span></span></span>das estrellas, las <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Fa</span></span></span>das es<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tre<span class="note" data-notation="Latina">Do</span></span></span>llas<br />¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> hizo las lindas estrellas?<br /><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span></span> Je<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></span><br /></p><p class="InterlineadoGuitarra">¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> hizo el mar azul?<br />El <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Sol</span></span></span> azul, el <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Fa</span></span></span> a<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zul<span class="note" data-notation="Latina">Do</span></span></span><br />¿ <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> hizo el mar azul?<br /><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span></span> Je<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></span><br /></p><p class="InterlineadoGuitarra">¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> hizo las aves que vuelan?<br />Las <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span></span>ves que vuelan, las <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Fa</span></span></span>ves que <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vue<span class="note" data-notation="Latina">Do</span></span></span>lan<br />¿ <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> hizo las aves que vuelan?<br /><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span></span> Je<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></span><br /></p><p class="InterlineadoGuitarra">¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> nos hizo a ti y a mí?<br />A <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Sol</span></span></span> y a mí, a <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Fa</span></span></span> y a <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Do</span></span></span><br />¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> nos hizo a ti y a mí?<br /><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span></span> Je<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></span><br /></p><p class="InterlineadoGuitarra">¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> hizo las lindas estrellas?<br />El <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Sol</span></span></span> azul, las <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Fa</span></span></span>ves que <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vue<span class="note" data-notation="Latina">Do</span></span></span>lan<br />¿<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span></span> nos hizo a ti y a mí?<br /><span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span></span> Je<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></span><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="¿Quién hizo las lindas estrellas?" frameborder="0" allowfullscreen></iframe>            </div>            <div id="DIV_Cursor" class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/quien-es-el-rey-de-la-selva.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">15. ¿Quién es el rey de la Selva?</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/sanson.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">17. Sansón</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />La vida es dura, lo sé bien.<br /><br />Los problemas nublan tu fe,<br /><br />Mas hay una opción<br /><br />para estar bien<br /><br />Escucha lo que te diré:<br /><br />Cristo es luz para tu caminar<br /><br />Está dispuesto<br /><br />a atender tu ansiedad<br /><br />Te da amor, te da paz<br /><br />y te da fuerzas al luchar.<br /><br /><br /><br />Es puerto seguro<br /><br />para descansar,<br /><br />es el buen pastor<br /><br />que da seguridad.<br /><br />Oh Oh Oh<br /><br /><br /><br />CORO:<br /><br />&emsp;Siempre es tu amigo fiel,<br /><br />&emsp;es manantial para tu sed<br /><br />&emsp;no hay nada que temer<br /><br />&emsp;si vas al lado de Jesús.<br /><br /><br /><br />&emsp;El cambiará tu actitud,<br /><br />&emsp;Él es vida es la luz<br /><br />&emsp;Mira siempre hacia la cruz,<br /><br />&emsp;camina al lado de Jesús<br /><br /><br /><br />Laralala  Laralala  La La<br /><br /><br /><br />Es la solución para tu malestar,<br /><br />Es el remedio que puede sanar,<br /><br />El bello tesoro<br /><br />que puedes hallar<br /><br />camina al lado de Jesús.<br /><br /><br /><br />Le da sabor a tu amargo vivir<br /><br />es la razón de poder sonreír.<br /><br />Con el tú puedes ser feliz<br /><br />camina al lado de Jesús.<br /><br /><br /><br />Es puerto seguro<br /><br />para descansar,<br /><br />es el buen pastor que da seguridad<br /><br />Oh Oh Oh<br /><br /><br /><br />CORO X2<br /><br /><br /><br />Laralala  Laralala  La La  Laralala<br /><br />camina al lado de Jesús.<br /><br /><br /><br />Laralala  Laralala  La La  Laralala<br /><br />camina al lado de Jesús.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br />INTRO: <br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Lam</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">Do</span></span> vida es dura, lo sé <span class="syllable" style="text-decoration: underline;">bien<span class="note" data-notation="Latina">Sol</span></span>. <br /><br />Los problemas nublan tu <span class="syllable" style="text-decoration: underline;">fe<span class="note" data-notation="Latina">Lam</span></span>, <br /><br />Mas hay una op<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Fa</span></span> para estar <span class="syllable" style="text-decoration: underline;">bien<span class="note" data-notation="Latina">Do</span></span><br /><br />Escucha <span class="syllable" style="text-decoration: underline;">lo<span class="note" data-notation="Latina">Fa</span></span> que <span class="syllable" style="text-decoration: underline;">te<span class="note" data-notation="Latina">Sol</span></span> di<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Do</span></span>: <br /><br /><br /><br />Cristo es luz para tu cami<span class="syllable" style="text-decoration: underline;">nar<span class="note" data-notation="Latina">Sol</span></span><br /><br />Está dispuesto a atender tu ansie<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Lam</span></span> <br /><br />Te da <span class="syllable" style="text-decoration: underline;">amor<span class="note" data-notation="Latina">Fa</span></span>, te da <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Do</span></span> <br /><br />y te da <span class="syllable" style="text-decoration: underline;">fuer<span class="note" data-notation="Latina">Fa</span></span>zas <span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Sol</span></span> lu<span class="syllable" style="text-decoration: underline;">char<span class="note" data-notation="Latina">Lam</span></span>. <br /><br /><br /><br />Es puerto se<span class="syllable" style="text-decoration: underline;">gu<span class="note" data-notation="Latina">Fa</span></span>ro para descan<span class="syllable" style="text-decoration: underline;">sar<span class="note" data-notation="Latina">Do</span></span>, <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Lam</span></span> es el buen pas<span class="syllable" style="text-decoration: underline;">tor<span class="note" data-notation="Latina">Fa</span></span> que da se<span class="syllable" style="text-decoration: underline;">gu<span class="note" data-notation="Latina">Do</span></span>ri<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Sol</span></span>.  Oh Oh Oh<br /><br /><br /><br /><b>CORO</b>: <br /><br />&emsp;<span class="syllable" style="text-decoration: underline;">Siem<span class="note" data-notation="Latina">Do</span></span>pre es tu amigo <span class="syllable" style="text-decoration: underline;">fiel<span class="note" data-notation="Latina">Sol</span></span>, es manantial para tu <span class="syllable" style="text-decoration: underline;">sed<span class="note" data-notation="Latina">Lam</span></span> <br /><br />&emsp;no hay <span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Fa</span></span>da que te<span class="syllable" style="text-decoration: underline;">mer<span class="note" data-notation="Latina">Do</span></span> si vas al <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Fa</span></span>do <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span>. <br /><br />    <br /><br />&emsp;El cambiará tu acti<span class="syllable" style="text-decoration: underline;">tud<span class="note" data-notation="Latina">Sol</span></span>, él es vida es la <span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Lam</span></span><br /><br />&emsp;Mira <span class="syllable" style="text-decoration: underline;">siem<span class="note" data-notation="Latina">Fa</span></span>pre hacia la <span class="syllable" style="text-decoration: underline;">cruz<span class="note" data-notation="Latina">Do</span></span>, <br /><br />&emsp;camina al <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Fa</span></span>do <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span> <br /><br /><br /><br />Larala<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Sol</span></span>  Lara<span class="syllable" style="text-decoration: underline;">lala<span class="note" data-notation="Latina">Lam</span></span>  La La <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span><br /><br /><br /><br />Es la solu<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Do</span></span> para tu males<span class="syllable" style="text-decoration: underline;">tar<span class="note" data-notation="Latina">Sol</span></span>, <br /><br />Es el remedio que puede sa<span class="syllable" style="text-decoration: underline;">nar<span class="note" data-notation="Latina">Lam</span></span>, <br /><br />El bello te<span class="syllable" style="text-decoration: underline;">so<span class="note" data-notation="Latina">Fa</span></span>ro que puedes ha<span class="syllable" style="text-decoration: underline;">llar<span class="note" data-notation="Latina">Do</span></span> <br /><br />camina al <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Fa</span></span>do <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span>. <br /><br />Le da sabor a tu amargo vi<span class="syllable" style="text-decoration: underline;">vir<span class="note" data-notation="Latina">Sol</span></span> <br /><br />es la razón de poder sonre<span class="syllable" style="text-decoration: underline;">ír<span class="note" data-notation="Latina">Lam</span></span>. <br /><br />Con el tú <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Fa</span></span>des ser fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Do</span></span> <br /><br />camina al <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Fa</span></span>do <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Lam</span></span>. <br /><br /><br /><br />Es puerto se<span class="syllable" style="text-decoration: underline;">gu<span class="note" data-notation="Latina">Fa</span></span>ro para descan<span class="syllable" style="text-decoration: underline;">sar<span class="note" data-notation="Latina">Do</span></span>, <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Lam</span></span> es el buen pas<span class="syllable" style="text-decoration: underline;">tor<span class="note" data-notation="Latina">Fa</span></span> que da se<span class="syllable" style="text-decoration: underline;">gu<span class="note" data-notation="Latina">Do</span></span>ri<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Sol</span></span>.  Oh Oh Oh<br /><br /> <br /><br /><b>CORO</b> X2<br /><br /><br /><br />Larala<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Sol</span></span>  Lara<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Lam</span></span>la  La La  <span class="syllable" style="text-decoration: underline;">Lara<span class="note" data-notation="Latina">Fa</span></span>La<span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">Do</span></span><br /><br />camina al <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Fa</span></span>do <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span>. <br /><br /><br /><br />Larala<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Sol</span></span>  Lara<span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Lam</span></span>la  La La  <span class="syllable" style="text-decoration: underline;">Lara<span class="note" data-notation="Latina">Fa</span></span>La<span class="syllable" style="text-decoration: underline;">La<span class="note" data-notation="Latina">Do</span></span><br /><br />camina al <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Fa</span></span>do <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sol</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span>. <br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Al lado de Jesús" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/alelu-alelu-aleluya.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">21. Alelu, alelu, aleluya</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/alto-escuchame.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">23. Alto escúchame</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


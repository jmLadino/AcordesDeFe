﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">Andaba yo en un barco<br />Sin puerto al cual llegar<br />De repente vino una tempestad<br />E iba ha naufragar<br /></p><p class="InterlineadoLetra">Los vientos arreciaban<br />Cada vez más y más<br />Mi alma se angustiaba<br />En medio de la tempestad<br /></p><p class="InterlineadoLetra">Hice todos los esfuerzos<br />Que un humano puede hacer<br />Pensé que con mis fuerzas<br />La paz podría tener<br /></p><p class="InterlineadoLetra">Y luché y luché y me afané<br />Pero no pude vencer<br />De repente oí una voz<br />Que habló a mi corazón<br /></p><p class="InterlineadoLetra">Y dijo: No temas,<br />Porque yo soy Jesús, tu salvador<br /></p><p class="InterlineadoLetra">// Jesús mi capitán<br />Jesús es mi capitán<br />Yo sé que no voy a naufragar<br />Porque Jesús es mi capitán //<br /></p><p class="InterlineadoLetra">El barco del cual les hablo<br />Es este mundo de dolor<br />Y muchos son los que en él están<br />Sin rumbo y dirección<br /></p><p class="InterlineadoLetra">Marchemos pues con Jesús<br />Quién es nuestro salvador<br />Murió por ti, murió por mí<br />Y yo sé que muy pronto lo veré<br /></p><p class="InterlineadoLetra">/// Jesús mi capitán<br />Jesús es mi capitán<br />Yo sé que no voy a naufragar<br />Porque Jesús es mi capitán ///<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <div id="DIV_Ribbon">                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                  <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                  <button id="btnAcordes" class="blue-button">Acordes</button>                </div>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra">INTRO:<br /><span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa#m</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br /><span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa#m</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br /></p><p class="InterlineadoGuitarra">An<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">La</span></span></span>ba yo en un <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bar<span class="note" data-notation="Latina">Re</span></span></span>co<br />Sin puerto al cual lle<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">La</span></span></span><br />De repente vino una <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tem<span class="note" data-notation="Latina">Fa#m</span></span></span>pestad<br />E <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">iba<span class="note" data-notation="Latina">Sim</span></span></span> ha naufra<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Mi</span></span></span><br /></p><p class="InterlineadoGuitarra">Los <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vien<span class="note" data-notation="Latina">La</span></span></span>tos arre<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cia<span class="note" data-notation="Latina">Re</span></span></span>ban<br />Cada <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vez<span class="note" data-notation="Latina">La</span></span></span> más y <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Mi</span></span></span><br />Mi <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span></span>ma se angus<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tia<span class="note" data-notation="Latina">Re</span></span></span>ba<br />En medio <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sim</span></span></span> la <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tem<span class="note" data-notation="Latina">Mi</span></span></span>pes<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tad<span class="note" data-notation="Latina">La</span></span></span><br /></p><p class="InterlineadoGuitarra">Hice <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">La</span></span></span>dos los es<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">fuer<span class="note" data-notation="Latina">Re</span></span></span>zos<br />Que un humano puede ha<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">La</span></span></span><br />Pensé que con mis <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">fuer<span class="note" data-notation="Latina">Fa#m</span></span></span>zas<br />La <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Sim</span></span></span> podría te<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ner<span class="note" data-notation="Latina">La</span></span></span><br /></p><p class="InterlineadoGuitarra">Y lu<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ché<span class="note" data-notation="Latina">La</span></span></span> y luché y me <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Re</span></span></span>fané<br />Pero <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">La</span></span></span> pude ven<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">Mi</span></span></span><br />De re<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pen<span class="note" data-notation="Latina">La</span></span></span>te oí una <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voz<span class="note" data-notation="Latina">Re</span></span></span><br />Que ha<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bló<span class="note" data-notation="Latina">La</span></span></span> a mi cora<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Mi</span></span></span><br />Y <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Re</span></span></span>jo: No <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">te<span class="note" data-notation="Latina">La</span></span></span>mas,<br />Porque <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Sim</span></span></span> soy Je<span class="chord" data-tabsaurus="Mi7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi7.png' alt="Mi7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi7</span></span></span>, tu salva<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">La</span></span></span><br /></p><p class="InterlineadoGuitarra"><b>CORO</b>:<br />&emsp;// Je<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">La</span></span></span> mi capi<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tán<span class="note" data-notation="Latina">Re</span></span></span><br />&emsp;Je<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">La</span></span></span> es mi capi<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tán<span class="note" data-notation="Latina">Mi</span></span></span><br /></p><p class="InterlineadoGuitarra">&emsp;Yo sé que <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">La</span></span></span> voy a naufra<span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Fa#m</span></span></span><br />&emsp;Porque Je<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span></span> es mi <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Mi</span></span></span>pi<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tán<span class="note" data-notation="Latina">La</span></span></span>//<br /></p><p class="InterlineadoGuitarra">El <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bar<span class="note" data-notation="Latina">La</span></span></span>co del cual les <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">Re</span></span></span>blo<br />Es este mundo de do<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">La</span></span></span><br />Y muchos son los que en <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Fa#m</span></span></span> están<br />Sin <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rum<span class="note" data-notation="Latina">Sim</span></span></span>bo y direc<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">La</span></span></span><br /></p><p class="InterlineadoGuitarra">Mar<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">che<span class="note" data-notation="Latina">La</span></span></span>mos pues con Je<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span></span><br />Quién es <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nues<span class="note" data-notation="Latina">La</span></span></span>tro salva<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Mi</span></span></span><br />Mu<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rió<span class="note" data-notation="Latina">Re</span></span></span> por ti, mu<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rió<span class="note" data-notation="Latina">La</span></span></span> por mí<br />Y yo <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sé<span class="note" data-notation="Latina">Sim</span></span></span> que muy <span class="chord" data-tabsaurus="Mi7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/Mi7.png' alt="Mi7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pron<span class="note" data-notation="Latina">Mi7</span></span></span>to le ve<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AcordesDeAlabanza/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span></span><br /></p><p class="InterlineadoGuitarra"><b>CORO</b><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Jesús mi capitán" frameborder="0" allowfullscreen></iframe>            </div>            <div id="DIV_Cursor" class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/fija-tus-ojos-en-cristo.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">38. Fija tus ojos en Cristo</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/la-alegria.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">40. La alegría</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;


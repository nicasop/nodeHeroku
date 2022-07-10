var section = document.querySelector("#titulo");
section.innerHTML =`<video id="sonido" src='musica/index.mp4' autoplay loop ></video> <h1 class='title'> AC / DC </h1>`;

var navegacion = document.querySelector("#navegacion");
navegacion.innerHTML=`<a href="index.html">Inicio</a><a href="miembros.html">Miembros</a><a href="musica.html">Música</a><a href="documental.html?dc=1">Documental</a>`;


var disco = ["disco1.jpg","disco2.png","disco3.png","disco4.jpg","disco5.png"];
var musicaD = ["high.mp4","shoot.mp4","tunder.mp4","hell.mp4","back.mp4"];

var artistas =["Brian Johnson","Angus Young","Stevie Young","Cliff Williams","Phil Rudd","Dave Evans","Bon Scott","Malcom Young"];

var artis_img = ["brian.jpg","angus.jpeg","stevi.jpg","clif.JPG","phil.JPG","dave.jpg","bon.jpg","malcom.jpg"];
var texto1 =["Es un cantante británico conocido por ser el vocalista de AC/DC. Fue elegido para reemplazar a Bon Scott, tras su muerte en 1980. Su primer álbum como vocalista de AC/DC fue Back In Black.",
"Angus McKinnon Young (Glasgow, Escocia, 31 de marzo de 1955) es un músico británico nacionalizado australiano, conocido por ser uno de los miembros fundadores y el principal guitarrista del grupo AC/DC, aparte de ser el único miembro que ha permanecido en la banda desde su inicio. ",
"Stevie Young (Glasgow, Escocia, 11 de diciembre de 1956) es un músico británico conocido por ser miembro de la banda AC/DC hijo de Steven Young y sobrino de Angus Young y Malcolm Young de AC/DC y de los también músicos George Young y Alex Young. Su instrumento es la guitarra rítmica.",
"Clifford Williams (Romford, Inglaterra; 14 de diciembre de 1949) es un músico británico, más conocido por ser el bajista de la banda de hard rock AC/DC. Es el padre de Erin Williams, actriz y modelo, más conocida como Erin Lucas.",
"Phil Rudd (Melbourne, 19 de mayo de 1954) es un baterista australiano de hard rock. Conocido por ser el baterista de AC/DC, es considerado el baterista original de la banda; junto con Cliff Williams y los hermanos Young conforma la formación clásica del grupo. Su etapa en AC/DC comprende desde 1975 a 1983, posteriormente desde 1994 hasta 2014 y Desde octubre de 2020 a día de hoy.",
"Dave Evans (nacido el 20 de julio de 1953 en Carmarthen, Gales) es un cantante de origen galés criado en North Queensland, Australia. Cuando cumplió los 17 años se trasladó a Sídney, donde conoció a los hermanos Malcolm y Angus Young, Colin Burgess y Larry Van Kriedt, con los que formó AC/DC, que con el tiempo ha llegado a ser considerada como una de las bandas de Hard rock más grandes de todos los tiempos y de la cual Evans fue el primer vocalista.",
"Ronald Belford «Bon» Scott Mitchell (Forfar, Angus, Escocia, 9 de julio de 1946 – Londres, 19 de febrero de 1980) fue un cantante de rock australiano nacido en Escocia. Scott es célebre por haber sido el segundo vocalista de la banda de hard rock AC/DC desde 1974 hasta su muerte en el año 1980, sustituyendo a Dave Evans, quien solo participó en dos sencillos de la banda, por lo que muchos consideran a Bon como el cantante original.",
"Malcolm Young (Glasgow, Escocia; 6 de enero de 1953-Elizabeth Bay, Sídney, Australia; 18 de noviembre de 2017) fue un guitarrista, compositor y productor discográfico de rock y blues británico, conocido por ser fundador, guitarrista rítmico, corista y miembro letrista de la popular banda australiana AC/DC."];
var texto2 = ["Está situado en el puesto número 39 en la lista de los 100 mejores vocalistas de metal de todos los tiempos de la revista Hit Parader.En 2016, tras diagnosticársele problemas auditivos, se vio obligado a abandonar su carrera como vocalista hasta 2020, siendo sustituido en ese tiempo por Axl Rose como vocalista de AC/DC para la gira Rock or Bust.",
"Fue introducido en el Salón de la fama del Rock and Roll junto a los miembros actuales de la banda en el 2003. Es conocido por sus salvajes y enérgicos movimientos en el escenario, y su peculiar uniforme de colegial. Además, en el año 2014 se situó entre los mejores guitarristas de todos los tiempos, concedido por la revista Rolling Stone.",
"Su carrera musical empezó a finales de los 70 con las bandas 'The Stabbers', 'Prowler' y 'Tantrum', formadas en la ciudad de Hawick al sur de Escocia. En 1980 fundó 'Starfighters', su banda más conocida, la cual adquirió cierta notoriedad a los pocos meses de su formación debido a que fueron escogidos por AC/DC para telonear su gira británica de presentación de Back In Black en octubre/noviembre de 1980.",
"Su primer disco con AC/DC fue Powerage. En una entrevista a la revista Bass Frontiers asegura que este es su álbum favorito. El álbum fue producido por Harry Vanda y George Young. Pasaron 3 semanas en el estudio para grabar lo que sería el nuevo disco. Su primer tour fue con Aerosmith, de banda telonera, y su primer tour oficial fue en 1979 con el lanzamiento del recordado Highway To Hell.",
"Desde la salida del grupo por parte de Mark Evans, se convirtió en el único integrante australiano del grupo. Junto con los hermanos Young, Cliff Williams y Brian Johnson, ingresó al Rock and Roll Hall of Fame, en 2003.",
"El primer concierto de AC/DC fue en el Cheequers Nightclub de Sídney en el día de Nochevieja de 1973, donde la banda presentó en vivo su primer sencillo 'Can I Sit Next To You Girl / Rocking in The Parlour'. Poco después, diversos enfados con los hermanos Young llevaron a Dave a abandonar la banda. Fue sustituido por Bon Scott, a quién Malcolm y Angus.",
"Además Bon se encuentra en el quinto lugar en la lista de Los 100 mejores vocalistas del metal de todos los tiempos según Hit Parader.",
"Pese a estar siempre a la sombra de su hermano menor, Angus Young, fue el responsable de la amplia extensión del sonido, el desarrollo de los riffs de guitarras, la composición de la mayoría de las letras y la producción del material discográfico del grupo."];

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var cod = urlParams.get('cod');

const valore = window.location.search;
const urlParam = new URLSearchParams(valore);
var mb = urlParam.get('mb');

const valor = window.location.search;
const urlPara = new URLSearchParams(valor);
var dc = urlPara.get('dc');

if( cod != null){
   var sonido = document.querySelector("#sonido");
   sonido.muted = true;
   var contenedor = document.querySelector("#descrip_musica");
   contenedor.style.visibility= "visible";
   contenedor.style.width= "100%";
   contenedor.style.height = "30vw";
   var texto = "../imagenes/disco1.jpg";
  
   var imagen = document.querySelector("#imagen_grande");
   imagen.poster="imagenes/"+disco[cod-1];
   imagen.src="musica/"+musicaD[cod-1];
  
}
if( mb != null){
    var cantante = document.querySelector("#cantante");
    cantante.innerHTML = artistas[mb-1];
    var cantante_img = document.querySelector("#tamanio_img");
    cantante_img.src="imagenes/"+artis_img[mb-1];
    var texto1_v = document.querySelector("#texto1");
    texto1_v.innerHTML = texto1[mb-1];
    var texto2_v = document.querySelector("#texto2");
    texto2_v.innerHTML = texto2[mb-1];
 }
 if( dc != null){
	var sonido = document.querySelector("#sonido");
	sonido.muted = true;
 }
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

var footer = document.querySelector("footer");
footer.innerHTML='<div><h3>Elaborado por: Patricio Cadena - Freddy Camacho - Nicolas Villavicencio</h3><div><a target="_blank" href="https://www.facebook.com/kevin.cadena.1612/"><i class="bi bi-facebook"></i></a><a target="_blank" href="https://github.com/Spatriciopk"><i class="bi bi-github"></i></a><a><i class="bi bi-envelope"></i></a></div></div>';
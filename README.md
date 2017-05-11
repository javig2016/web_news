# web_news
Tarea para el módulo LMSGI 07

Desarrollo del proyecto denominado [web_news](https://github.com/javig2016/web_news/). Este proyecto pertenece a la unidad 7 del módulo LMSGI y ha consistido en la creación de una página web de noticias para un cliente, con unas condiciones especificadas por el cliente.
Dicha página web de noticias cumple con las especificaciones indicadas, creando 3 noticias en html en la página principal y luego cargándose, mediante "scroll" o mediante la pulsación de un botón, 3 noticias más, utilizando JSon y JQuery. Tras esta primera carga si se vuelve a pulsar dicho botón o se vuelve a deslizar el "scroll" hacia abajo se vuelve a cargar una segunda tanda de 3 noticias más que provienen de otro archivo json, llegando al final de la web.
Se ha implementado la mayoría de css y html mediante bootsrap, que ha ayudado a la visualización correcta de la web, para ello se han implementado las correspondientes líneas de las librerías de **_Bootstrap_** en los archivos html correspondientes.
A su vez también se ha empleado **_JQuery_** en lugar de Javascript que se había empleado en anteriores ocasiones, dicho JQuery también se ha cargado mediante las librerías indicadas en el html.
Se ha insertado también el distribuidor de contenidos **_RSS_** (Really Simple Syndication) , herramienta muy usada para ver todos los contenidos de noticias de una web, ayudando a saber las noticias más recientes o viendo todas las noticias de las que dispone la web, sin necesidad de acceder directamente a toda la web. La implementación ha supuesto la creación de un archivo XML, con el correspondiente orden y características de un RSS. Este archivo rss.xml se ha creado siguiendo las anotaciones de la tarea indicada en la unidad 6 del módulo.
Otra característica empleada en la web ha sido el uso de metadatos, mediante **_OGP_** (Open Graph Protocol), que consiste en convertir la página web en un objeto descriptivo para otras aplicaciones, dando datos sobre la web y sus contenidos. Se ha probado su uso en la web de desarrolladores de Facebook: https://developers.facebook.com/tools/debug/
Se han seguido usando la combinación de: HTML, CSS, XML, y añadiendo lo indicado anteriormente Bootstrap, JQuery, JSon, RSS y OPG para metadatos.


##Fases del proyecto:
1. Inicialmente se ha pensado el tema de la web y localizado información para realizar la web y sus noticias correspondientes. Tras esta tarea se ha iniciado el diseño y bocetos de la web con papel y bolígrafo para ir viendo como se desarrollaría la web, también se ha escrito pseudocódigo y se han indicado los archivos y elementos a usar. Estos documentos en papel se han escaneado y se encuentran en la carpeta [bocetos](https://github.com/javig2016/web_news/tree/master/bocetos) de github.
2. Se inicia el proceso de trasladar los bocetos a la web, creando los archivos y obteniendo enlaces a vídeos e imágenes solicitados para las noticias.
3. Se crean los archivos json específicos para cada grupo de noticias con sus etiquetas pertinentes.
4. A continuación se prepara el archivo JQuery para su implementación con todas las características solicitadas. Revisando a continuación su correcto funcionamiento con los archivos JSon y con la implementación en la web.
5. Después se realizan las adaptaciones de publicidad indicadas para versión normal de la web y para la versión móvil.
6. Se comprueba el correcto funcionamiento de la web en los diferentes tipos de dispositivos a visualizar.
7. Ahora se procede a realizar la revisión de los documentos creados, tanto páginas html como css y rss, mediante las herramientas de validación de W3C.

A continuación se pasan a indicar características especiales a reseñar de la práctica:
### Carrusel de imágenes:
Revisando las posibilidades de Bootsrap se ha encontrado la posibilidad de implementar un carrsuel de imágenes en la web de inicio para dar dar un aspecto visual más enriquecido a la web.

### * RSS:
Se han seguido los pasos indicados en [**_w3schools_**](https://www.w3schools.com) sobre la creación de un archivo rss y se ha implementado en la web.

### * Imágenes y vídeos responsive:
Las imágenes y vídeos de la web han sido configurados para su correcta visualización de forma "responsive". Las imágenes a su vez han sido optimizadas mediante la propia herramienta de dibujo [GIMP](https://www.gimp.org/) y el programa PNGGauntlet.

### * Versión dispositivos móviles:
Se ha verificado la adaptación al proyecto para la visualización de la web en dispositivos móviles, de esa manera se observa el correcto funcionamiento y la posibilidad de ver todo correctamente.
La configuración ha sido trasladada a todos los documentos html del proyecto.
Para ello se han usado 2 archivos css, uno denominado *__d.css__*, que se usará para la página web normal, en navegadores de ordenadores con unas resoluciones normales, y otro archivo denominado *__m.css__*, que se usará cuando el navegador tenga una resolución para dispositivos móviles.

### * Versión JQuery:
El proyecto usa bastante dichas librerías en varios elementos de la web, a parte de la creación del archivo correspondiente para poder implementar la información de los archivos JSon en la página web.

### * Boostrap:
Mediante estas librerías se ha conseguido un aspecto visual muy logrado sin implementar mucho código de css, lo que lleva un ahorro de lenguaje en ese aspecto y de tiempo de implementación.

### * Metadatos:
La web también se ha implementado con metadatos para convertirla en un objeto con unos datos que puedan utilizarse por otras herramientas. Se ha utilizado Open Graph Protocol (OGP), una serie de datos sobre la web, que aparecen implementados en los html. Para revisar su implementación se ha usado la herramienta de facebook para desarrolladores: [facebook developers](https://developers.facebook.com/tools/debug/).

### * Versión identada:
La versión identada se corresponde con la master, por lo que no se ha creado ninguna rama para la indicada. Para realizar esta versión del html, se han revisado todos los elementos de la página web y se han colocado de la manera correcta para su mejor visualización. 

### * Versión reducida (_minify_):
Esta otra versión se ha realizado con la ayuda de la siguiente web [HTML Minifier](http://www.willpeavy.com/minifier/), que ha permitido minimizar al máximo el espacio de cada uno de los documentos de la web y que funcione correctamente de cara a su uso. Esta versión se podrá ver en la rama identificada como minify.
Hay que tener en cuenta que los archivos de JQuery (news.js) y rss.xml, no se han reducido, debido a que provocaban problemas a la hora de verificar su correcto funcionamiento. Por lo que no se han usado.



***
##Fuentes de ayuda:
Para realizar dicha actividad se han usado los apuntes, enlaces y foros de la asignatura. En gran medida la web: https://www.w3schools.com/

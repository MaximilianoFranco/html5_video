# UltralordMedia Videoplayer

## ¿Qué es?
  Es un mediaplayer. Es practico porque la página de inicio 
  cuenta con una sección que tiene varios videos principales 
  colocados verticalmente, cuenta con un scroll vertical para 
  poder acceder a los videos que se encuentran más abajo, 
  cuenta con una sección lateral a la derecha, aquí se 
  encuentran algunos videos más con su respectiva imagen 
  de ejemplo y descripción, se reproducen automaticamente 
  al hacer click sobre de ellos, esta sección también cuenta 
  con su scroll vertical para acceder más fácil a los videos. 
  Pasado el tiempo se agregó una caracteristica para poder hacer
  drag 'n drop de los videos desde la pc del usuario, así que logra
  que aparte de los videos que existen por default, la página 
  pueda fungir como un reproductor de video funcional.

## ¿Cómo funciona?
  La página funciona con HTML, para ser más especificos con 
  HTML5, este se conjunta con una hoja de estilos (CSS) para
  poder darle formato, y gracias a las caracteristicas del
  HTML5 se pudo utilizar también javaScript para facilitar
  algunas caracteristicas del reproductor de video.
  
  Pasado el tiempo se agregaron caracteristicas gracias a 
  el framework de bootstrap, entre ellas la responsividad, y
  la facilidad de adherir videos por medio de drag 'n drop
  desde la pc.

## ¿qué y cómo funciona bootstrap?
Bootstrap es un framework que utiliza estilos css y funciones de javascript(manejado con jquerry) con el cual los usuarios pueden crear interfaces web 
adaptables al entorno en el que se estan visualizando(responsivas).

La maquetación de la página se hace por medio de un grid el cual trabaja con doce columnas las cuales se adaptan dependiendo del tamaño de la pantalla del
dispositivo con el que se este trabajando. Para trabajar con el grid se declara un div el cual sea de clase "row" lo cual denotará que a continuación se
hará una división por columnas. Las columnas que existen son xs,sm,md,lg con xs como el tipo de columna pas chico y lg como el tipo de columna mas grande.
Para especificar el tamaño que abarcara un elemento se usará la clase "col-[xs,ms,md,lg]-[1,2,3,4,5,6,7,8,9,10,11,12]" donde se especifica la columna y 
el número de espacios que utilizará.

En un mismo elemento se pueden especificar que tamaño debe tomar el elemento para cada tamaño de columna por lo que dependiendo del tamaño de la pantalla del 
se tomará el diseño de la columna en función.

## Problemas conocidos
2. Puede ser poco ortodoxo en su manejo.
3. Podría contar con un diseño más responsivo.

## Mejoras futuras
sin mejoras planeadas por el momento.

[El poder de Angularjs](https://angularjs.org/)
=
 - Creado por Misko Hevery en el 2009
 - Es un framework open source, mantenido por Google
 - Tiene una excelente documentación
 - Una gran comunidad de usuario que comparten conocimientos y aún sigue creciendo

La idea
-
El paradigma básico de angular es extender el [DOM](https://es.wikipedia.org/wiki/Document_Object_Model), para que nosotros dejemos de preocuparnos por el; y así, enfocarnos en la lógica de la aplicación.
Además Angular te permite disociar enteramente el front-end del back-end, permitiendo el trabajo en paralelo y un proyecto escalable.
Angular también nos da muchas facilidades al momento de crear un  [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)

> **Off Topic** - De aquí en adelante es probable que comiences a ver términos que quizás no conozcas, pero no temaís, que los conocerás...

Las 3 Ds (en inglés)
-
- **Data-Binding:** Se refiere a la sincronización automática entre el modelo y la vista. La vista es una proyección del modelo, si el modelo cambio, la vista cambia; y viceversa.
- **Dependency Injection:** La inyección de dependencias es una manera de mantener nuestro código con una estructura modular, por la cual angular apostó. Para entenderlo de la forma sencilla, imagina que creas una fábrica, un modulo, un controlador o cualquier otro componente de angular, solo debes de indicarle que dependencias necesita y serás feliz.
- **Directives:** Las directivas son la manera en la que extendemos los elementos del DOM (como atributo, clase o como un mismo elemento en sí).

Su centro
-
- [**Backbone:**](http://backbonejs.org/) Es un framework MVC que entre sus principales funciones nos permite una sincronización RESTful con un CRUD backend.
- [**Underscore:**]() Es una librería que te permite manipular la data de muchas formas interesantes para luego llegar a un template que puede ser renderizado y reutilizado.
- [**jQuery:**](https://jquery.com/) Facilidad para manipular el DOM, implementa una manera sencilla y compatible de hacer peticiones AJAX. Angular cuenta con [jqLite](https://docs.angularjs.org/api/ng/function/angular.element), algo como un mini-jQuery.
- [**AMD:**](https://es.wikipedia.org/wiki/Asynchronous_module_definition) La carga asíncrona de modulos, es un concepto muy interesante en js, no sería absurdo pensar que [Requirejs](http://requirejs.org/) es el más usado. La [inyección de dependencias](https://docs.angularjs.org/guide/di) es una funcionalidad que Angular toma muy en serio.
- [**Handlebars:**](http://handlebarsjs.com/) Es una librería para template, derivada de [Mustache](http://mustache.github.io/) y es de mucha ayuda para tener estructuras de código definidas y reusables. [Angular Templates](https://docs.angularjs.org/guide/templates) tiene una estructura muy similar y amigable.

Y como funciona el Data-binding?
-
La explicaciones más sencilla es entendiendo 3 de las principales funciones de Angular.
- **\$watch()** La función $watch es un Listener que espera algún cambio en algún componente de Angular.
- **\$digest()** La función $digest es el Manager de la lista de watchers.
- **\$apply():** La función $apply llama al Manager y define el alcance que tendrá en ese momento.

Hasta ahora...
-
...hemos visto lo siguiente:
> - [ng](https://docs.angularjs.org/api/ng)
> - [ng-app](https://docs.angularjs.org/api/ng/directive/ngApp)
> - [ng-controller](https://docs.angularjs.org/api/ng/directive/ngController)
> - [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel)
> - [ng-show](https://docs.angularjs.org/api/ng/directive/ngShow)
> - [ng-hide](https://docs.angularjs.org/api/ng/directive/ngHide)
> - [ng-bind](https://docs.angularjs.org/api/ng/directive/ngBind)
> - [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
> - [ng-submit](https://docs.angularjs.org/api/ng/directive/ngSubmit)
> - [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick)
> - \$scope
> - \$scope.\$watch()
> - \$scope.\$digest() 
> - \$scope.\$apply()
> - [Angular Expressions](https://docs.angularjs.org/guide/expression)
> - [\$http](https://docs.angularjs.org/api/ng/service/$http)
> - filter
> - orderBy
> - [ng-src](https://docs.angularjs.org/api/ng/directive/ngSrc)
> - [ng-href](https://docs.angularjs.org/api/ng/directive/ngHref)
> - ngRoute
> - ngResources
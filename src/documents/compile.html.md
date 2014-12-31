---
layout: base
title: "Compile"
pageOrder: 6
description: "Compile preprocessors code to CSS online, from GUI, through command line, or with Grunt"
---

Compiling preprocessor code to CSS can be done with [GUI programs](#gui), [online compilers](#online), through the [command line interface](#cli), or with the task runner [Grunt](#grunt).

<h2 id="gui">Installable preprocessor compilers with a user interface</h2>

<table class="table-content">
  <caption>Local GUI compilers (Less, Sass, or Stylus code to CSS)</caption>
  <thead>
    <tr>
      <th></th>
      <th>Less</th>
      <th>Sass</th>
      <th>Stylus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3">Windows, Mac, and Linux</th>
      <td colspan="3"><a href="https://prepros.io/" target="_blank">Prepros (trial or $)</a></td>
    </tr>
    <tr>
      <td colspan="2"><a href="http://koala-app.com/" target="_blank">Koala (free)</a></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://compass.kkbox.com/" target="_blank">Compass.app ($)</a></td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="3">Windows, and Mac</th>
      <td colspan="3"><a href="http://mixture.io/" target="_blank">Mixture (free)</a></td>
    </tr>
    <tr>
      <td colspan="3"><a href="http://livereload.com/" target="_blank">LiveReload (free or $)</a></td>
    </tr>
    <tr>
      <td><a href="http://crunchapp.net/" target="_blank">Crunch (free)</a></td>
      <td><a href="http://mhs.github.io/scout-app/" target="_blank">Scout (free)</a></td>
      <td></td>
    </tr>
    <tr>
      <th>Windows only</th>
      <td><a href="http://winless.org/" target="_blank">WinLESS (free)</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2">Mac only</th>
      <td colspan="3"><a href="http://incident57.com/codekit/index.html" target="_blank">Codekit (trial or $)</a></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://hammerformac.com/" target="_blank">Hammer (trial or $)</a></td>
      <td></td>
    </tr>
  </tbody>
</table>


<h2 id="online">Online preprocessor compilers</h2>

<table class="table-content">
  <caption>Online compilers (Less, Sass, or Stylus code to CSS)</caption>
  <thead>
    <tr>
      <th rowspan="2">Less</th>
      <th colspan="2">Sass</th>
      <th rowspan="2">Stylus</th>
    </tr>
    <tr>
      <th>SCSS syntax</th>
      <th>Sass syntax</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"><a href="http://codepen.io/pen" target="_blank">CodePen.io</a></td>
    </tr>
    <tr>
      <td colspan="4"><a href="http://jsbin.com/" target="_blank">JSbin</a></td>
    </tr>
    <tr>
      <td colspan="4"><a href="http://cssdeck.com/labs" target="_blank">CSS Deck</a></td>
    </tr>
    <tr>
      <td><a href="http://fiddlesalad.com/less/" target="_blank">Fiddle Salad</a></td>
      <td><a href="http://fiddlesalad.com/scss/" target="_blank">Fiddle Salad</a></td>
      <td><a href="http://fiddlesalad.com/sass/" target="_blank">Fiddle Salad</a></td>
      <td><a href="http://fiddlesalad.com/stylus/" target="_blank">Fiddle Salad</a></td>
    </tr>
    <tr>
      <td><a href="http://lesstester.com/" target="_blank">LessTester</a></td>
      <td colspan="2"><a href="http://sassmeister.com/" target="_blank">SassMeister</a></td>
      <td><a href="http://learnboost.github.io/stylus/try.html" target="_blank">Try Stylus</a></td>
    </tr>
    <tr>
      <td><a href="http://winless.org/online-less-compiler" target="_blank">Online Less Compiler</a></td>
      <td colspan="2"><a href="http://sasstocss.appspot.com/" target="_blank">Sass to CSS</a></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://precess.co/#less" target="_blank">precess.co</a></td>
      <td><a href="http://precess.co/#scss" target="_blank">precess.co</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://less2css.org/" target="_blank">less2css.org</a></td>
      <td><a href="http://jsfiddle.net/" target="_blank">JSFiddle</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://www.dopefly.com/LESS-Converter/less-converter.html" target="_blank">dopefly LESS Converter</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://lesscssismore.com/" target="_blank">LessCSSisMore</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://leafo.net/lessphp/editor.html" target="_blank">Leafo.net (lessphp)</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://lessphp.gpeasy.com/Demo" target="_blank">Less.php 2 CSS</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


<h2 id="cli">Command-line preprocessor compilers</h2>

All preprocessors allow for CLI compilation, see the how-to for [Less](http://lesscss.org/#command-line-with-rhino), [Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass), and [Stylus](http://learnboost.github.io/stylus/docs/executable.html#compiling-files-example).

<h2 id="grunt">Grunt compilation</h2>

If you are using Grunt as a build tool you can easily integrate preprocessor compilation as a task [Less](https://github.com/gruntjs/grunt-contrib-less), [Sass](https://github.com/gruntjs/grunt-contrib-sass), and [Stylus](https://github.com/gruntjs/grunt-contrib-stylus).

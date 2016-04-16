---
layout: base
title: "Compile"
pageOrder: 6
description: "Compile preprocessors code to CSS online, from GUI, through command line, or with Grunt"
---

Compiling preprocessor code to CSS can be done with [GUI programs](#gui), [online compilers](#online), through the [command line interface](#cli), or with the task runners [Gulp](#gulp) and [Grunt](#grunt).

<h2 id="gui">Convert Less/Sass/Stylus to CSS locally</h2>
<input type="checkbox" checked="true" id="win" /> <label for="win">Windows</label>&emsp;&emsp;<input type="checkbox" checked="true" id="mac" /> <label for="mac">Mac</label>&emsp;&emsp;<input type="checkbox" checked="true" id="linux" /> <label for="linux">Linux</label>
<table class="table-content table-links table-filters">
  <caption>Installable GUI preprocessor compilers</caption>
  <thead>
    <tr>
      <th>Less</th>
      <th>Sass</th>
      <th>Stylus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://prepros.io/" class="win mac linux" target="_blank">Prepros (trial or $29)</a>
        <a href="http://getcrunch.co/" class="win mac linux" target="_blank">Crunch 2 ($19.95)</a>
        <a href="http://www.vanamco.com/ghostlab/" class="win mac" target="_blank">Ghostlab (trial or $49)</a>
        <a href="http://livereload.com/" class="win linux" target="_blank">LiveReload Alpha (free)</a>
        <a href="http://livereload.com/" class="mac" target="_blank">LiveReload ($10)</a>
        <a href="http://incident57.com/codekit/index.html" class="mac" target="_blank">Codekit (trial or $32)</a>
        <a href="http://koala-app.com/" class="win mac linux" target="_blank">Koala (free)</a>
        <a href="https://netbeans.org/" class="win mac linux" target="_blank">Netbeans (free)</a>
        <a href="http://getcrunch.co/" class="win mac linux" target="_blank">Crunch 2 (free)</a>
        <a href="http://winless.org/" class="win" target="_blank">WinLESS (free)</a>
      </td>
      <td>
        <a href="https://prepros.io/" class="win mac linux" target="_blank">Prepros (trial or $29)</a>
        <a href="http://getcrunch.co/" class="win mac linux" target="_blank">Crunch 2 ($19.95)</a>
        <a href="http://www.vanamco.com/ghostlab/" class="win mac" target="_blank">Ghostlab (trial or $49)</a>
        <a href="http://livereload.com/" class="win linux" target="_blank">LiveReload Alpha (free)</a>
        <a href="http://livereload.com/" class="mac" target="_blank">LiveReload ($10)</a>
        <a href="http://incident57.com/codekit/index.html" class="mac" target="_blank">Codekit (trial or $32)</a>
        <a href="http://koala-app.com/" class="win mac linux" target="_blank">Koala (free)</a>
        <a href="https://netbeans.org/" class="win mac linux" target="_blank">Netbeans (free)</a>
        <a href="http://mhs.github.io/scout-app/" class="win mac" target="_blank">Scout (free)</a>
        <a href="http://compass.kkbox.com/" class="win mac linux" target="_blank">Compass.app (free)</a>
        <a href="http://hammerformac.com/" class="mac" target="_blank">Hammer (trial or $20)</a>
        <a href="http://sassquatch.thoughtbot.com/" class="mac" target="_blank">Sassquatch (trial or $4)</a>
      </td>
      <td>
        <a href="https://prepros.io/" class="win mac linux" target="_blank">Prepros (trial or $29)</a>
        <a href="http://getcrunch.co/" class="win mac linux" target="_blank">Crunch 2 ($19.95)</a>
        <a href="http://www.vanamco.com/ghostlab/" class="win mac" target="_blank">Ghostlab (trial or $49)</a>
        <a href="http://livereload.com/" class="win linux" target="_blank">LiveReload Alpha (free)</a>
        <a href="http://livereload.com/" class="mac" target="_blank">LiveReload ($10)</a>
        <a href="http://incident57.com/codekit/index.html" class="mac" target="_blank">Codekit (trial or $32)</a>
      </td>
    </tr>
  </tbody>
</table>


<h2 id="online">Convert Less/Sass/Stylus to CSS online</h2>

<table class="table-content table-links">
  <caption>Online preprocessor compilers</caption>
  <thead>
    <tr>
      <th rowspan="2">Less</th>
      <th colspan="2">Sass</th>
      <th rowspan="2">Stylus</th>
      <th rowspan="2">PostCSS</th>
    </tr>
    <tr>
      <th>SCSS syntax</th>
      <th>Sass syntax</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="http://codepen.io/pen" target="_blank">CodePen.io</a>
        <a href="http://jsbin.com/" target="_blank">JSbin</a>
        <a href="http://cssdeck.com/labs" target="_blank">CSS Deck</a>
        <a href="http://fiddlesalad.com/less/" target="_blank">Fiddle Salad</a>
        <a href="http://beautifytools.com/less-compiler.php" target="_blank">BeautifyTools</a>
        <a href="http://devotter.com/less-compiler" target="_blank">LESS Compiler</a>
        <a href="http://lesstester.com/" target="_blank">LessTester</a>
        <a href="http://winless.org/online-less-compiler" target="_blank">Online Less Compiler</a>
        <a href="http://less2css.org/" target="_blank">less2css.org</a>
        <a href="http://www.dopefly.com/LESS-Converter/less-converter.html" target="_blank">dopefly LESS Converter</a>
        <a href="http://lesscssismore.com/" target="_blank">LessCSSisMore</a>
        <a href="http://leafo.net/lessphp/editor.html" target="_blank">Leafo.net (lessphp)</a>
        <a href="http://lessphp.gpeasy.com/Demo" target="_blank">Less.php 2 CSS</a>
      </td>
      <td>
        <a href="http://codepen.io/pen" target="_blank">CodePen.io</a>
        <a href="http://jsbin.com/" target="_blank">JSbin</a>
        <a href="http://cssdeck.com/labs" target="_blank">CSS Deck</a>
        <a href="http://fiddlesalad.com/scss/" target="_blank">Fiddle Salad</a>
        <a href="http://beautifytools.com/scss-compiler.php" target="_blank">BeautifyTools</a>
        <a href="http://devotter.com/sass-compiler" target="_blank">Sass Compiler</a>
        <a href="http://sassmeister.com/" target="_blank">SassMeister</a>
        <a href="http://rendera.herokuapp.com/" target="_blank">Rendera</a>
        <a href="http://jsfiddle.net/" target="_blank">JSFiddle</a>
      </td>
      <td>
        <a href="http://codepen.io/pen" target="_blank">CodePen.io</a>
        <a href="http://jsbin.com/" target="_blank">JSbin</a>
        <a href="http://cssdeck.com/labs" target="_blank">CSS Deck</a>
        <a href="http://fiddlesalad.com/sass/" target="_blank">Fiddle Salad</a>
        <a href="http://beautifytools.com/sass-compiler.php" target="_blank">BeautifyTools</a>
        <a href="http://devotter.com/sass-compiler" target="_blank">Sass Compiler</a>
        <a href="http://sassmeister.com/" target="_blank">SassMeister</a>
        <a href="http://rendera.herokuapp.com/" target="_blank">Rendera</a>
      </td>
      <td>
        <a href="http://codepen.io/pen" target="_blank">CodePen.io</a>
        <a href="http://jsbin.com/" target="_blank">JSbin</a>
        <a href="http://cssdeck.com/labs" target="_blank">CSS Deck</a>
        <a href="http://fiddlesalad.com/stylus/" target="_blank">Fiddle Salad</a>
        <a href="http://beautifytools.com/stylus-compiler.php" target="_blank">BeautifyTools</a>
        <a href="http://stylus-lang.com/try.html" target="_blank">Try Stylus</a>
        <a href="http://stylcompile.herokuapp.com/" target="_blank">StylCompile</a>
      </td>
      <td>
        <a href="http://codepen.io/pen" target="_blank">CodePen.io</a>
        <a href="https://jonathantneal.github.io/precss/" target="_blank">PreCSS</a>
      </td>
    </tr>
  </tbody>
</table>


<h2 id="cli">Command-line preprocessor compilers</h2>

All preprocessors allow for CLI compilation, see the how-to for:
  - [Less](http://lesscss.org/#command-line-with-rhino)
  - [Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass)
  - [Stylus](http://stylus-lang.com/docs/executable.html#compiling-files-example).
  - [PostCSS](https://github.com/postcss/postcss-cli).


<h2 id="gulp">Gulp compilation</h2>

Integrate a preprocessor's compilation as a task in Gulp:
  - [Less](https://github.com/plus3network/gulp-less)
  - [Sass](https://github.com/dlmanning/gulp-sass)
  - [Stylus](https://github.com/stevelacy/gulp-stylus)
  - [PostCSS](https://github.com/postcss/gulp-postcss)


<h2 id="grunt">Grunt compilation</h2>

Integrate a preprocessor's compilation as a task in Grunt:
  - [Less](https://github.com/gruntjs/grunt-contrib-less)
  - [Sass](https://github.com/gruntjs/grunt-contrib-sass)
  - [Stylus](https://github.com/gruntjs/grunt-contrib-stylus)
  - [PostCSS](https://github.com/nDmitry/grunt-postcss)

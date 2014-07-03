---
layout: "post"
title: "Comments"
date: 2014-07-01
description: "When to use single-line comments and when block comments, comment quirks you should be aware of"
---

Commenting your CSS is important, it is even more important for preprocessors, where you may write some weird-looking things to achieve a specific output or to workaround a preprocessor bug.

It is therefore important to know well the types of comments that are allowed in the different preprocessors.

Additionally, if you decide to use a living style guide you can build one with comments in your preprocessor files. Some good tools to achieve this are [Kalei Style Guide](http://kaleistyleguide.com/), [StyleDocco](http://jacobrask.github.io/styledocco/), and [Knyle Style Sheets](http://hughsk.io/kss-node/).




## Types of comments

<div class="col-12">
  <table class="table-content">
    <caption>Comments appearing in the compiled CSS?</caption>
    <thead>
      <tr>
        <th rowspan="2"></th>
        <th rowspan="2">Less</th>
        <th colspan="3">Sass</th>
        <th colspan="2">Stylus</th>
      </tr>
      <tr>
        <th>expanded, nested</th>
        <th>compact</th>
        <th>compressed</th>
        <th>expanded</th>
        <th>compressed</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          Single-line comments<br>
          <code>// foo</code>
        </th>
        <td>No</td>
        <td colspan="3">No</td>
        <td colspan="2">No</td>
      </tr>
      <tr>
        <th>
          Block comments<br>
          <code>/\*<br>&nbsp;\* foo<br>&nbsp;\*/</code>
        </th>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes, (output is on a single line)</td>
        <td>No</td>
        <td>Yes (except if declared in imported .styl file\*)</td>
        <td>No</td>
      </tr>
      <tr>
        <th>
          Block comments - alternative<br>
          <code>/\* foo<br>&nbsp;bar<br>&nbsp;baz \*/</code>
        </th>
        <td>Yes</td>
        <td>Yes, (output has star on every line)</td>
        <td>Yes, (output is on a single line)</td>
        <td>No</td>
        <td>Yes (except if declared in imported .styl file\*)</td>
        <td>No</td>
      </tr>
      <tr>
        <th>
          Loud block comments<br>
          <code>/\*!<br>&nbsp;\* foo<br>&nbsp;\* /</code>
        </th>
        <td>Yes</td>
        <td colspan="3">Yes (output keeps the <b>!</b>)</td>
        <td colspan="2">Yes</td>
      </tr>
    </tbody>
  </table>
</div>

\* You can [read more](https://github.com/LearnBoost/stylus/issues/1389) about this [behavior of Stylus](https://github.com/LearnBoost/stylus/pull/935).

(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{429:function(n,s,a){"use strict";a.r(s),s.default='<p><em>Context</em> refers to a <a href="/guides/dependency-management/#require-with-expression">require with an expression</a> such as <code>require(\'./locale/\' + name + \'.json\')</code>.</p>\n<p>The <code>ContextExclusionPlugin</code> allows you to exclude context. Provide RegExp as an argument when initializing the Plugin to exclude all context that matches it.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextExclusionPlugin</span><span class="token punctuation">(</span><span class="token regex">/dont/</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);
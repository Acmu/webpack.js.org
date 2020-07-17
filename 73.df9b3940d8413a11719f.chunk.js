(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{367:function(n,s,a){"use strict";a.r(s),s.default='<blockquote>\n<p>es6 modules</p>\n<p>commonjs</p>\n<p>amd</p>\n</blockquote>\n<h2>带表达式的 require 语句</h2>\n<p>如果你的 request 含有表达式(expressions)，就会创建一个上下文(context)，因为在编译时(compile time)并不清楚 <strong>具体</strong> 导入哪个模块。</p>\n<p>示例，考虑到我们有包含 <code>.esj</code> 文件的如下目录结构：</p>\n<pre><code class="hljs language-bash">example_directory\n│\n└───template\n│   │   table.ejs\n│   │   table-row.ejs\n│   │\n│   └───directory\n│       │   another.ejs</code></pre>\n<p>当台下的 <code>require()</code> 调用被评估解析：</p>\n<pre><code class="hljs language-javascript"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./template/\'</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">\'.ejs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>webpack 解析 <code>require()</code> 调用，然后提取出如下一些信息：</p>\n<pre><code class="hljs language-code">Directory: ./template\nRegular expression: /^.*\\.ejs$/\n</code></pre>\n<p><strong>context module</strong></p>\n<p>会生成一个 context module(上下文模块)。会生成一个 context module(上下文模块)。它包含 <strong>目录下的所有模块</strong> 的引用，如果一个 request 符合正则表达式，就能 require 进来。该context module包含一个map（映射）对象，会把requests翻译成对应的模块id。（译者注：request参考<a href="https://webpack.docschina.org/glossary/">概念术语</a> ）</p>\n<p>示例map（映射）:</p>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"./table.ejs"</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n  <span class="token property">"./table-row.ejs"</span><span class="token operator">:</span> <span class="token number">43</span><span class="token punctuation">,</span>\n  <span class="token property">"./directory/another.ejs"</span><span class="token operator">:</span> <span class="token number">44</span>\n<span class="token punctuation">}</span></code></pre>\n<p>此 context module 还包含一些访问这个 map 对象的 runtime 逻辑。</p>\n<p>这意味着 webpack 能够支持动态地 require，但会导致所有可能用到的模块都包含在 bundle 中。</p>\n<h2><code>require.context</code></h2>\n<p>你还可以通过 <code>require.context()</code> 函数来创建自己的 context。</p>\n<p>可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录，\n以及一个匹配文件的正则表达式。</p>\n<p>webpack 会在构建中解析代码中的 <code>require.context()</code> 。</p>\n<p>语法如下：</p>\n<pre><code class="hljs language-javascript">require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span>directory<span class="token punctuation">,</span> useSubdirectories <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> regExp <span class="token operator">=</span> <span class="token regex">/^\\.\\/.*$/</span><span class="token punctuation">,</span> mode <span class="token operator">=</span> <span class="token string">\'sync\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>示例：</p>\n<pre><code class="hljs language-javascript">require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">\'./test\'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex">/\\.test\\.js$/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//（创建出）一个 context，其中文件来自 test 目录，request 以 `.test.js` 结尾。</span></code></pre>\n<pre><code class="hljs language-javascript">require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">\'../\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex">/\\.stories\\.js$/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// （创建出）一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `.stories.js` 结尾。</span></code></pre>\n<blockquote class="warning">\n<p>传递给 <code>require.context</code> 的参数必须是字面量(literal)！</p>\n</blockquote>\n<h3>context module API</h3>\n<p>一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。</p>\n<p>此导出函数有三个属性：<code>resolve</code>, <code>keys</code>, <code>id</code>。</p>\n<ul>\n<li><code>resolve</code> 是一个函数，它返回 request 被解析后得到的模块 id。</li>\n<li><code>keys</code> 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求（译者注：参考下面第二段代码中的 key）组成。</li>\n</ul>\n<p>如果想引入一个文件夹下面的所有文件，或者引入能匹配一个正则表达式的所有文件，这个功能就会很有帮助，例如：</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">function</span> <span class="token function">importAll</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  r<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">importAll</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">\'../components/\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">importAll</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  r<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>key <span class="token operator">=></span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">r</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">importAll</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">\'../components/\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 在构建时(build-time)，所有被 require 的模块都会被填充到 cache 对象中。</span></code></pre>\n<ul>\n<li><code>id</code> 是 context module 的模块 id. 它可能在你使用 <code>module.hot.accept</code> 时会用到。</li>\n</ul>\n'}}]);
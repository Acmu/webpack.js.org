(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{415:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/url-loader"><img src="https://img.shields.io/npm/v/url-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/url-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/url-loader"><img src="https://david-dm.org/webpack-contrib/url-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/url-loader/actions"><img src="https://github.com/webpack-contrib/url-loader/workflows/url-loader/badge.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=url-loader"><img src="https://packagephobia.now.sh/badge?p=url-loader" alt="size"></a></p>\n<p>A loader for webpack which transforms files into base64 URIs.</p>\n<h2>Getting Started</h2>\n<p>To begin, you\'ll need to install <code>url-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install url-loader --save-dev\n</code></pre>\n<p><code>url-loader</code> works like\n<a href="/loaders/file-loader/"><code>file-loader</code></a>, but can return\na DataURL if the file is smaller than a byte limit.</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> img <span class="token keyword">from</span> <span class="token string">\'./image.png\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              limit<span class="token punctuation">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2>Options</h2>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Type</th>\n<th align="center">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#limit"><code>limit</code></a></strong><p class="description mobile"><code>{Boolean\\|Number\\|String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean\\|Number\\|String}</code></td>\n<td align="center"><code>true</code></td>\n<td align="left">Specifying the maximum size of a file in bytes.</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#mimetype"><code>mimetype</code></a></strong><p class="description mobile"><code>{Boolean\\|String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean\\|String}</code></td>\n<td align="center">based from \n<a href="https://github.com/jshttp/mime-types">mime-types</a></td>\n<td align="left">Sets the MIME type for the file to be transformed.</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#encoding"><code>encoding</code></a></strong><p class="description mobile"><code>{Boolean\\|String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean\\|String}</code></td>\n<td align="center"><code>base64</code></td>\n<td align="left">Specify the encoding which the file will be inlined with.</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#generator"><code>generator</code></a></strong><p class="description mobile"><code>{Function}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Function}</code></td>\n<td align="center"><code>() => type/subtype;encoding,base64_data</code></td>\n<td align="left">You can create you own custom implementation for encoding data.</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#fallback"><code>fallback</code></a></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="center"><code>file-loader</code></td>\n<td align="left">Specifies an alternative loader to use when a target file\'s size exceeds the limit.</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#esmodule"><code>esModule</code></a></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>true</code></td>\n<td align="left">Use ES modules syntax.</td>\n</tr>\n</tbody>\n</table>\n<h3><code>limit</code></h3>\n<p>Type: <code>Boolean|Number|String</code>\nDefault: <code>undefined</code></p>\n<p>The limit can be specified via loader options and defaults to no limit.</p>\n<h4><code>Boolean</code></h4>\n<p>Enable or disable transform files into base64.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              limit<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4><code>Number|String</code></h4>\n<p>A <code>Number</code> or <code>String</code> specifying the maximum size of a file in bytes.\nIf the file size is <strong>equal</strong> or <strong>greater</strong> than the limit <a href="/loaders/file-loader/"><code>file-loader</code></a> will be used (by default) and all query parameters are passed to it.</p>\n<p>Using an alternative to <code>file-loader</code> is enabled via the <code>fallback</code> option.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              limit<span class="token punctuation">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3><code>mimetype</code></h3>\n<p>Type: <code>Boolean|String</code>\nDefault: based from <a href="https://github.com/jshttp/mime-types">mime-types</a></p>\n<p>Specify the <code>mimetype</code> which the file will be inlined with.\nIf unspecified the <code>mimetype</code> value will be used from <a href="https://github.com/jshttp/mime-types">mime-types</a>.</p>\n<h4><code>Boolean</code></h4>\n<p>The <code>true</code> value allows to generation the <code>mimetype</code> part from <a href="https://github.com/jshttp/mime-types">mime-types</a>.\nThe <code>false</code> value removes the <code>mediatype</code> part from a Data URL (if omitted, defaults to <code>text/plain;charset=US-ASCII</code>).</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              mimetype<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4><code>String</code></h4>\n<p>Sets the MIME type for the file to be transformed.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              mimetype<span class="token punctuation">:</span> <span class="token string">\'image/png\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3><code>encoding</code></h3>\n<p>Type: <code>Boolean|String</code>\nDefault: <code>base64</code></p>\n<p>Specify the <code>encoding</code> which the file will be inlined with.\nIf unspecified the <code>encoding</code> will be <code>base64</code>.</p>\n<h4><code>Boolean</code></h4>\n<p>If you don\'t want to use any encoding you can set <code>encoding</code> to <code>false</code> however if you set it to <code>true</code> it will use the default encoding <code>base64</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.svg$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              encoding<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4><code>String</code></h4>\n<p>It supports <a href="https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings">Node.js Buffers and Character Encodings</a> which are <code>["utf8","utf16le","latin1","base64","hex","ascii","binary","ucs2"]</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.svg$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              encoding<span class="token punctuation">:</span> <span class="token string">\'utf8\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3><code>generator</code></h3>\n<p>Type: <code>Function</code>\nDefault: <code>(mimetype, encoding, content, resourcePath) => mimetype;encoding,base64_content</code></p>\n<p>You can create you own custom implementation for encoding data.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|html)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              <span class="token comment">// The `mimetype` and `encoding` arguments will be obtained from your options</span>\n              <span class="token comment">// The `resourcePath` argument is path to file.</span>\n              generator<span class="token punctuation">:</span> <span class="token punctuation">(</span>content<span class="token punctuation">,</span> mimetype<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex">/\\.html$/i</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>resourcePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`data:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mimetype<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>content<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n\n                <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`data:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mimetype<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">${\n                  encoding ? `</span></span><span class="token punctuation">;</span>$<span class="token punctuation">{</span>encoding<span class="token punctuation">}</span><span class="token template-string"><span class="token string">` : \'\'\n                },</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>content<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>encoding<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3><code>fallback</code></h3>\n<p>Type: <code>String</code>\nDefault: <code>\'file-loader\'</code></p>\n<p>Specifies an alternative loader to use when a target file\'s size exceeds the limit set in the <code>limit</code> option.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              fallback<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'responsive-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>The fallback loader will receive the same configuration options as url-loader.</p>\n<p>For example, to set the quality option of a responsive-loader above use:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              fallback<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'responsive-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              quality<span class="token punctuation">:</span> <span class="token number">85</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3><code>esModule</code></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>true</code></p>\n<p>By default, <code>file-loader</code> generates JS modules that use the ES modules syntax.\nThere are some cases in which using ES modules is beneficial, like in the case of <a href="/plugins/module-concatenation-plugin/">module concatenation</a> and <a href="/guides/tree-shaking/">tree shaking</a>.</p>\n<p>You can enable a CommonJS module syntax using:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              esModule<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2>Examples</h2>\n<h3>SVG</h3>\n<p>SVG can be compressed into a more compact output, avoiding <code>base64</code>.\nYou can read about it more <a href="https://css-tricks.com/probably-dont-base64-svg/">here</a>.\nYou can do it using <a href="https://github.com/tigt/mini-svg-data-uri">mini-svg-data-uri</a> package.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> svgToMiniDataURI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mini-svg-data-uri\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.svg$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              generator<span class="token punctuation">:</span> <span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">svgToMiniDataURI</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2>Contributing</h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/url-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2>License</h2>\n<p><a href="https://github.com/webpack-contrib/url-loader/blob/master/LICENSE">MIT</a></p>\n<pre><code></code></pre>\n'}}]);
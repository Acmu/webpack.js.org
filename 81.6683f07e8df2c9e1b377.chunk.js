(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{375:function(n,a,s){"use strict";s.r(a),a.default='<p>本指南介绍了安装 webpack 的各种方法。</p>\n<h2>前提条件</h2>\n<p>在开始之前，请确保安装了 <a href="https://nodejs.org/en/">Node.js</a> 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)，是理想的起步。\n使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能，\n或者缺少相关 package。</p>\n<h2>本地安装</h2>\n<p>最新的 webpack 正式版本是：</p>\n<p><a href="https://github.com/webpack/webpack/releases"><img src="https://img.shields.io/npm/v/webpack.svg?label=webpack&#x26;style=flat-square&#x26;maxAge=3600" alt="GitHub release"></a></p>\n<p>要安装最新版本或特定版本，请运行以下命令之一：</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack\n<span class="token comment"># 或指定版本</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack@<span class="token operator">&#x3C;</span>version<span class="token operator">></span></code></pre>\n<blockquote class="tip">\n<p>是否使用 <code>--save-dev</code> 取决于你的应用场景。假设你仅使用 webpack 进行构建操作，那么建议你在安装时使用 <code>--save-dev</code> 选项，因为可能你不需要在生产环境上使用 webpack。如果需要应用于生产环境，请忽略 <code>--save-dev</code> 选项。</p>\n</blockquote>\n<p>如果你使用 webpack v4+ 版本，你还需要安装 <a href="/api/cli/">CLI</a>。</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-cli</code></pre>\n<p>对于大多数项目，我们建议本地安装。这可以在引入重大更新(breaking change)版本时，更容易分别升级项目。\n通常会通过运行一个或多个 <a href="https://docs.npmjs.com/misc/scripts">npm scripts</a> 以在本地 <code>node_modules</code> 目录中查找安装的 webpack，\n来运行 webpack：</p>\n<pre><code class="hljs language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t<span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.config.js"</span>\n<span class="token punctuation">}</span></code></pre>\n<blockquote class="tip">\n<p>想要运行本地安装的 webpack，你可以通过 <code>node_modules/.bin/webpack</code> 来访问它的二进制版本。另外，如果你使用的是 npm v5.2.0 或更高版本，则可以运行 \'npx webpack\' 来执行。</p>\n</blockquote>\n<h2>全局安装</h2>\n<p>通过以下 NPM 安装方式，可以使 <code>webpack</code> 在全局环境下可用：</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --global webpack</code></pre>\n<blockquote class="warning">\n<p><strong>不推荐</strong> 全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，\n可能会导致构建失败。</p>\n</blockquote>\n<h2>最新体验版本</h2>\n<p>如果你热衷于使用最新版本的 webpack，你可以使用以下命令安装 beta 版本，\n或者直接从 webpack 的仓库中安装：</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack@next\n<span class="token comment"># 或指定的 tag/分支</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack/webpack<span class="token comment">#&#x3C;tagname/branchname></span></code></pre>\n<blockquote class="warning">\n<p>安装这些最新体验版本时要小心！它们可能仍然包含 bug，因此不应该用于生产环境。</p>\n</blockquote>\n'}}]);
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,jpg,png}', {
  useHash: true,
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});
/*fis语法

fis.match('文件',{
	使用什么样的插件，和对插件的配置
})

*/
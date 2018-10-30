module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/',
  devServer: {
  	// https: true,
   	proxy: {
   		'/api': {
   			target: 'https://news-at.zhihu.com/api',
   			changeOrigin: true,
   			ws: true,
   			pathRewrite: {
   				'^/api': ''
   			}
   		}
   	}
	}
}

var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/page2/index","pages/page3/page3"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"ph-helloWorld","navigationBarBackgroundColor":"#f8f8f8","backgroundColor":"#aaa","backgroundTextStyle":"dark","onReachBottomDistance":20,"backgroundColorTop":"#000","transparentTitle":"auto","titleNView":false},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","fontSize":"5px","list":[{"pagePath":"pages/index/index","iconPath":"static/logo.png","selectedIconPath":"static/logo.png","text":"视图容器"},{"pagePath":"pages/page2/index","iconPath":"static/logo.png","selectedIconPath":"static/logo.png","text":"基础内容"},{"pagePath":"pages/page3/page3","iconPath":"static/logo.png","selectedIconPath":"static/logo.png","text":"表单组件"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"hello","compilerVersion":"2.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true,"backgroundTextStyle":"dark","titleNView":true}},{"path":"/pages/page2/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"第二页"}},{"path":"/pages/page3/page3","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"第三页"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});

# 移动端

- rem适配html跟元素字体大小，
  使用media媒体查询来设置html font-size
  @media (mid-device-width: 375px) and (max-device-width: 667px): (-webkit-min-device-pixel-ratio: 2) {
    html{
      font-size: 37.5px;
    }
  }
  利用js来动态设置
  document.getElementByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
- dpr设备像素比
  由于设计稿是按照iphone6来设计的，且dpr为2，所以一般设计稿给的尺寸是屏幕的双倍大小
  一般手机为dpr为1，
  在拿到dpr动态设置meta
  meta.setAttaibute('content', 'initial-scale=' + 1/dpr+', maximum-scale='+1/dpr+', minimum-scale=' + 1/dpr+', user-scalable=no');
  普通屏幕css 1像素为1个物理像素
  retina屏幕css 1像素为4个物理像素

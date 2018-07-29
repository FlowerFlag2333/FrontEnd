import {injectGlobal} from 'styled-components';
injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1532687373013'); /* IE9*/
    src: url('./iconfont.eot?t=1532687373013#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1532687373013') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1532687373013#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-Aa:before { content: "\\e636"; }

  .icon-fangdajing:before { content: "\\e6dd"; }

  .icon-icon-checkin:before { content: "\\e615"; }
`;



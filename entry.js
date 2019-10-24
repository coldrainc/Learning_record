import "./entry.less";
import JSB from "../../lib/share";
require("lib/lib-zepto/1.0.0/zepto.min");
require("lib/scrollload");
import { domain } from "../../utils/getDomain";
import { dataLog } from "../../utils/dataLog";
/*eslint-disable */
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// let vConsole = new VConsole() // 初始化
window.userId = 0;

//ly-监听事件滑动倒计时开始 不滑动倒计时停止事件
var showTrue = function() {
  template.showTime(template.times, true);
};
var showFalse = function() {
  template.showTime(template.times, false);
};
//ly- 声明监听事件绑定对象 之前用的时window对象
var template2 = document.getElementById("template");


var template = {
  native: false,
  domain: domain,
  // domain: "//172.16.18.51:17801",
  // domain: "//172.16.18.112:9425",
  id: "",
  currentItem: $(".item").length || 0,
  pageNo: 1,
  systemType: window.navigator.userAgent.toLowerCase().indexOf("iphone") !== -1 ? 1 : 0, //1是ios 0是安卓
  init() {
    this.checkApp();
    this.getData();
    this.checkJoin(); //检查进入口是否为任务中心，如果是专场30秒倒计时的金币奖励
    this.id = this.getParams("id");
    // this.times = this.getParams("times");
    this.times = 2;
    dataLog({
      page: 8,
      pageId: this.id,
      token: window.token,
      deviceId: window.deviceId
    });
    $(window).bind("scroll", () => {
      if ($(window).scrollTop() > 600) {
        $(".back").show();
      } else {
        $(".back").hide();
      }
    });
    $(".back").on("click", function() {
      // template.dataLog(3, null);
      template.goTo();
    });
    $("#top").on("click", function() {
      dataLog({
        page: 8,
        pageId: template.id,
        slot: 2,
        slotId: 0,
        clickType: "click",
        deviceId: window.deviceId,
        token: window.token
      });
      if ($("#top").data("href")) {
        window.location.href = $("#top").data("href");
      }
    });
    $("#bottom").on("click", function() {
      if ($("#bottom").data("href")) {
        // template.dataLog(2, "");
        window.location.href = $("#bottom").data("href");
      }
    });
  },
  getMoreItems: function() {
    if (window.reflesh) {
      return;
    }
    window.reflesh = true;
    $("#list").append(`
		  <div class="loadbox">
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="loadText">正在加载中，请稍等...</div>
        </div>
      </div>`);
    $.ajax({
      url: template.domain + "/specialField/selectPlacingGoodsAll",
      type: "get",
      data: {
        id: template.getParams("id"),
        pageSize: 20,
        pageNo: template.pageNo,
        userId: window.userId || 0
      },
      success: function(res) {
        $(".loadbox").remove();
        if (res.data.result.data.length) {
          window.reflesh = false;
        } else {
          window.reflesh = true;
        }

        if (res.data) {
          template.render(res.data.result.data);
        }
        // window.scrollLoad.scrollLoadImg.init();
      }
    });
    template.pageNo++;
  },
  checkApp() {
    if (window.navigator.userAgent.indexOf("taoxiaocheng") == -1) {
      template.native = false;
    } else {
      template.native = true;
    }
  },
  goTo() {
    var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
    var target = $("#top").offset().top;
    if (scrollT > target) {
      var timer = setInterval(function() {
        var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
        var step = Math.floor(-scrollT / 30);
        document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
        if (scrollT <= target) {
          document.body.scrollTop = document.documentElement.scrollTop = target;
          clearTimeout(timer);
        }
      }, 10);
    } else if (scrollT == 0) {
      let timer = setInterval(function() {
        var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
        var step = Math.floor((300 / 3) * 0.7);
        document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
        // console.log(scrollT)
        if (scrollT >= target) {
          document.body.scrollTop = document.documentElement.scrollTop = target;
          clearTimeout(timer);
        }
      }, 10);
    } else if (scrollT < target) {
      let timer = setInterval(function() {
        var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
        var step = Math.floor(scrollT / 30);
        document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
        if (scrollT >= target) {
          document.body.scrollTop = document.documentElement.scrollTop = target;
          clearTimeout(timer);
        }
      }, 10);
    } else if (target == scrollT) {
      return false;
    }
  },
  getParams: function(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(location.href);

    if (results === null) return "";
    else return results[1];
  },
  getData() {
    $.ajax({
      url: template.domain + "/specialField/selectPlacingGoodsAll",
      type: "get",
      data: {
        id: this.getParams("id"),
        pageSize: 20,
        pageNo: 1,
        userId: window.userId || 0
      },
      success: function(res) {
        $(".loadbox").remove();
        if (res.data) {
          if (res.data.bottomBannerSkipStatus) {
            $("#bottom").attr("data-href", res.data.bottomBannerSkipUrl);
          }
          if (res.data.topBannerSkipStatus) {
            $("#top").attr("data-href", res.data.topBannerSkipUrl);
          }
          res.data.topBannerUrl ? $("#top").append(`<img src="${res.data.topBannerUrl}">`) : "";
          res.data.bottomBannerUrl ? $("#bottom").append(`<img src="${res.data.bottomBannerUrl}">`) : "", $("title").text(`${res.data.name}`);
          // $('body').attr('data-extensionActivities', res.data.extensionActivities);
          template.render(res.data.result.data);
        }
        window.scrollLoad.scrollLoadPage.init({
          getMoreItems: template.getMoreItems,
          bottom: 20
        });
        window.scrollLoad.scrollLoadImg.init();
      }
    });
    template.pageNo++;
  },
  // dataLog(type, goodsId) {
  //   $.ajax({
  //     type: "post",
  //     url: template.domain + "/specialField/insertSpecialLog",
  //     data: {
  //       userId: window.userId || "",
  //       goodsId: goodsId || "",
  //       specialFieldId: template.getParams("id"),
  //       type: type
  //     }
  //   });
  // },
  render(data) {
    if (!data) {
      return false;
    }
    data.forEach(function(item) {
      let itemDiscount = ((item.discountPrice * 100 - (item.amoyPrice || 0)) / 100 / item.price).toFixed(2) || 0; //券后价减去淘礼金除以原价
      let itemDom = `      
			<div class="item ${item.ifInvalid ? "unable" : "able"}" data-type="${item.goodType}" data-urls="${item.sendUrl}" data-id="${item.numIid}" data-title="${item.dtitle}">
			  <div class="cover"></div>
        <div class="t_pic ${item.goodType === 1 && template.native ? "tGift" : ""}" data-url="${item.img}">
					<div class="t_discount">
							<span class="d1">${template.native ? parseInt(itemDiscount * 10) : parseInt(item.discounts * 10)}</span>
							<span class="d2">.${template.native ? parseInt(itemDiscount * 100) % 10 : parseInt(item.discounts * 100) % 10}</span>
							<span class="d3">折</span>
					</div>
          ${item.goodType === 1 && template.native ? `<div class="t_bouns">淘礼金${item.amoyPrice / 100}元</div>` : ""}
        </div>
        <div class="t_title"> <span class="t_icon ic${item.shopType}"></span>${item.dtitle}</div>
        <div class="t_coupon">
          ${item.commissionRate && template.native && item.goodType !== 1 ? `<span class="info1">返${item.rateMoney}元</span>` : ""}
          ${item.couponPrice ? `<span class="info2">${item.couponPrice}元券</span>` : ""}
        </div>
        <div class="t_price"><span class="t_rmb">￥</span>${
          item.amoyPrice ? (item.discountPrice - item.amoyPrice / 100).toFixed(1) : item.discountPrice.toFixed(1)
        }<span class="t_origin">￥${item.price ? item.price.toFixed(1) : 0}</span></div>
        <div class="t_saleNum">已售${item.volume && item.volume > 99999 ? parseInt(item.volume / 10000) + "万+" : item.volume}件</div>
			</div>`;
      $("#list").append(itemDom);
    });
    $(".item.able")
      .off("click")
      .on("click", function() {
        let itemDom = this;
        dataLog({
          page: 8,
          pageId: template.id,
          slot: 17,
          slotId: $(itemDom).data("id"),
          clickType: "click",
          deviceId: window.deviceId,
          token: window.token
        });
        // template.dataLog("", $(itemDom).data("id"));
        if ($(itemDom).data("type") == 1 && !!$(itemDom).data("urls")) {
          if (template.native) {
            JSB.getTCoupon({
              coupon: $(itemDom).data("urls")
            });
          } else {
            window.location.href = $(itemDom).data("urls");
          }
        } else if (template.native) {
          JSB.showCommodityDetail({
            numIid: $(itemDom).data("id"),
            title: $(itemDom).data("title"),
            adzoneId: template.getParams("name")
          });
        } else {
          $.ajax({
            url: template.domain + "/specialField/selectGoodsUrl",
            data: {
              pid: template.getParams("name"),
              goodsId: $(itemDom).data("id"),
              userId: window.userId || 0
            },
            success: function(res) {
              window.location.href = res.data;
            }
          });
        }
      });
  },

  //ly-
  /**
   * 检查入口是否为任务中心
   */
  checkJoin() {
    $.ajax({
      url: template.domain + "/taskCenter/browse/begin",
      type: "get",
      data: {
        token: window.token || "885aa6b7e976f700ba2c7d1a8aa2eac7",
        version: window.version || 0,
        systemOpt: template.systemType
      },
      // dataType: "json",
      success: function(res) {
        if (res.data) {
          let _dom = `    
              <div class="coin"></div><span>逛街赚钱中，<span class="time-text"></span> 秒后领取金币</span>
            `;
          $("#top-time").append(_dom);
          if (template.times && template.times >= 0) {
            $("#top-time").show();
            $("#top").addClass("mgtop");
          } else {
            $("#top-time").hide();
            $("#top").removeClass("mgtop"); 
          }
          template.showTime(template.times, false); 
          
          //移动端滑动
          // $("#template").bind("touchstart", function() {
          //   template.showTime(template.times, true);
          // });
          // $("#template").bind("touchend", function() {
          //   template.showTime(template.times, false);
          // });

          //pc端鼠标移动 用来测试
          template2.addEventListener("mousemove", showTrue);
          template2.addEventListener("mouseend", showFalse);
        }
      }
    });
  },
  /**
   * 
   * @param {*} timedown 
   * @param {*} scroll 
   */
  showTime(timedown, scroll) {
    let seconds = parseInt(timedown);

    template.times = seconds;

    seconds = seconds >= 10 ? seconds : "0" + seconds;

    $(".time-text").text(seconds);
    if (timedown == 0 || timedown == "0") {
       window.timer && clearTimeout(window.timer); //如果定时器存在清除定时器 但是我发现好像不止一个定时器
      template2.removeEventListener("mousemove", showTrue);
      template2.removeEventListener("mouseend", showFalse);
      // $("#template").bind("touchcancel", function() {// }); 

      //我现在想要达到的效果就是当倒计时停止，移除鼠标mouse的所有事件，去请求一次接口然后桃明就可以让原生去弹出金币。
      $.ajax({
        url: template.domain + "/taskCenter/browse/end",
        type: "get",
        data: {
          token: window.token || "885aa6b7e976f700ba2c7d1a8aa2eac7",
          version: window.version || 0,
          systemOpt: template.systemType
        },
        success: function() {
          //
        }
      });

      $("#top-time").remove();
      $("#top").removeClass("mgtop");
      return;
      
    }
    timedown = timedown - 1;
    if (scroll && !window.timer) {
      console.log(window.timer);
      window.timer = setTimeout(() => { //该方法好像会持续添加定时器
        template.showTime(timedown);
      }, 1000);
    }
  }
};
window.setUserId = params => {
  const { userId, token, deviceId } = params;
  window.userId = userId;
  window.token = token;
  window.deviceId = deviceId;
  template.init();
};
window.navigator.userAgent.toLowerCase().indexOf("taoxiaocheng") !== -1 ? JSB.getUserId({}, "setUserId") : template.init();

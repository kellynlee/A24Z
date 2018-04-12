// pages/appointments/show-detail.js
const app = getApp();
const util = require("../../utils/util.js");

Page({
  data: {
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    detailType: "",
    appointmentTabs: [
      "OVERVIEW",
      "FEED",
      "RELATED ITEMS",
      "CHANGES",
      "DOCUMENT FLOW"
    ],
    opportunityTabs: [
      "OVERVIEW",
      "PRODUCTS",
      "REVENUE SPLITS",
      "FEED",
      "SALES ACTIVITIES",
      "COMPETITORS",
      "SALES TEAM",
      "CONTACTS"
    ]
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  switchNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      });
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: 300
      });
    } else {
      this.setData({
        scrollLeft: 0
      });
    }
  },
  onLoad: function(options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc);
        that.setData({
          winHeight: calc,
          detailType: options.entity
        });
        console.log(that.data.detailType);
      }
    });
  },

  footerTap: app.footerTap
});

/**
 * 组件的方法列表
 */

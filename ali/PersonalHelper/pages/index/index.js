Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  handleSubmit(e) {
    if (!this.verificationForm(e)) {
      return;
    }
  },

  // 表单验证
  verificationForm(e) {
    let data = e.detail.value;
    if (Number(data.preTaxAmount)<=0) {
      my.showToast({
        type: 'fail',
        content: '请检查税前金额',
      });
      return false;
    }
    if (Number(data.welfareAmount)<=0) {
      my.showToast({
        type: 'fail',
        content: '请检查五险一金',
      });
      return false;
    }
  },










  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'index',
      desc: 'index description',
      path: 'pages/index/index',
    };
  },
});

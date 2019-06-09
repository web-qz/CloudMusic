const API = require('../../API/api');
const app = getApp();


Page({

  data: {
    newest: [], //最新专辑
  },


  onLoad: function (options) {
    this.getNewEst();
  },

  getNewEst: function () {
    API.getNewEst({}).then(res => {
      if (res.code === 200) {
        this.setData({
          newest: res.albums
        })
      }
    })
  },
    // 获取到歌曲ID
    handlePlayAudio: function (event) {
      const audioId = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: `../../play/play?id=${audioId}`
      })
      console.log(audioId);
      console.log(event)
    }


 
})
const app = new Vue({
  el: '#app',
  data: {
    url: '',
    streams: [],
  },
  methods: {
    add() {
      if (!this.url) return;
      const src = this.url.replace(/https?:\/\/(www\.)?youtube\.com\/watch\?v=(.+)/, 'https://www.youtube.com/embed/$2?autoplay=1');
      this.streams.push({
        url: src,
      });
      this.url = '';
    },
    remove(index) {
      this.streams.splice(index, 1);
    },
  },
});
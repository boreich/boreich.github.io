const app = new Vue({
  el: '#app',
  data: {
    url: '',
    streams: [],
  },
  computed: {
    inRow() {
      const count = this.streams.length;
      if (count <= 4) {
        return 2;
      } else if (count<= 6) {
        return 3;
      } else if (count <= 8) {
        return 4;
      } else {
        return 5;
      }
    }
  },
  methods: {
    add() {
      if (!this.url) return;
      const src = this.url.replace(/https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)(.+)/, 'https://www.youtube.com/embed/$3?autoplay=1');
      this.streams.push({
        url: src,
      });
      this.url = '';
      localStorage.setItem('streams', JSON.stringify(this.streams));
    },
    remove(index) {
      this.streams.splice(index, 1);
      localStorage.setItem('streams', JSON.stringify(this.streams));
    },
  },
  created() {
    const streams = localStorage.getItem('streams');
    this.streams = streams ? JSON.parse(streams) : [];
  },
});

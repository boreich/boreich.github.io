const app = new Vue({
  el: '#app',
  data: {
    url: '',
    streams: [],
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
    itemClassMod(index) {
      const count = this.streams.length;
      if (count < 2) {
        return 1;
      }
      if (count < 4) {
        return 2;
      }
      if (count === 5) {
        if (index <= 2) {
          return 3;
        } else {
          return 2;
        }
      }
      if (count === 6) {
        return 3;
      }
      if (count >= 7 && count <=10 ) {
        if (index <= 3) {
          return 4;
        }  else {
          return 3;
        }
      }
      if (count === 11) {
        if (index <= 7) {
          return 4;
        }  else {
          return 3;
        }
      }
      if (count === 12) {
        return 4;
      }
      if (count === 13) {
        if (index <= 4) {
          return 5;
        } else {
          return 4;
        }
      }
      if (count >= 14 && count <= 18) {
        if (index <= 9) {
          return 5;
        } else {
          return 4;
        }
      }

      return 5;
      
    },
  },
  created() {
    const streams = localStorage.getItem('streams');
    this.streams = streams ? JSON.parse(streams) : [];
  },
});

const { createApp } = Vue;

createApp({
  data() {
    return {
      key: null,
      code: null,
      keyboard: null,
      isVisibleNotify: false,
    };
  },
  mounted() {
    window.addEventListener("keydown", (event) => {
      this.key = event.which;
      this.code = event.code;
      this.keyboard = event.key;
    });
  },
  methods: {
    async copText(txt) {
      if (!txt) return;
      await navigator.clipboard.writeText(txt);
      this.isVisibleNotify = true;

      setTimeout(() => {
        this.isVisibleNotify = false;
      }, 1000);
    },
  },
}).mount("#app");

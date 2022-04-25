<template>
  <div class="container">
    <div class="wrap"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="buttons">
      <span class="on" @click="clickDot($event)">1</span>
      <span v-for="n in dotList" :key="n" @click="clickDot($event)">
        {{n}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      index: 0,
      timer: null,
      scrolling: true,
      startPos: null,
      currentPos: null,
      distance: null,
      dotList: null,
      transform: 0,
      transitionTime: 600,
      swiperTime: 4500,
      totalWidth: 0,
      imgWidth: 0,
      slideCount: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.autoPlay();
      this.initDots();
    }, 100);
  },
  unmounted() {
    this.stopTimer();
  },
  methods: {
    handleDom() {
      let containerEl = document.getElementsByClassName("container")[0];
      let slideEls = document.getElementsByClassName("slide");

      this.slideCount = slideEls.length;

      if (this.slideCount > 1) {
        let firstSlide = slideEls[0].cloneNode(true);
        let lastSlide = slideEls[this.slideCount-1].cloneNode(true);
        this.wrap.insertBefore(lastSlide, slideEls[0]);
        this.wrap.appendChild(firstSlide);
      }

      this.imgWidth = containerEl.offsetWidth;
      for (const el of slideEls) {
        el.style.width = this.imgWidth + "px";
      }

      this.wrap.style.left = -this.imgWidth + "px";
    },
    initDots() {
      if (this.slideCount > 1) {
        this.dotList = [];
        for (let i = 1; i < this.slideCount; i++) {
          this.dotList.push(i+1);
        }
      }
    },
    animate(transform) {
      this.scrolling = true;
      this.transform = transform;
      const trans = this.transform + "px";
      this.wrap.style.transition = "transform " + this.transitionTime + "ms";
      this.wrap.style.transform = "translate(" + trans + ", 0)";
      this.scrolling = false;
    },
    correct_pos(transform) {
      this.transform = transform;
      const trans = this.transform + "px";
      setTimeout(() => {
        this.wrap.style.transition = "transform 0ms";
        this.wrap.style.transform = "translate(" + trans + ", 0)";
      }, this.transitionTime);

    },
    next_pic() {
      let transform = this.transform - this.imgWidth;
      this.animate(transform);

      this.index++;
      if (this.index > this.slideCount-1) {
        this.index = 0;
        this.correct_pos(0);
      }

      this.showCurrentDot();
    },
    prev_pic() {
      var newLeft;
      let left = parseInt(this.wrap.style.left);
      if (left >= 0) {
        this.wrap.style.left = "-3000px";
        newLeft = -2400;
      } else {
        newLeft = -this.imgWidth * this.index;
      }
      let offset = newLeft - parseInt(this.wrap.style.left);
      this.animate(newLeft, offset);

      this.index--;
      if (this.index < 0) {
        this.index = 4;
      }

      this.showCurrentDot();
    },
    showCurrentDot() {
      for (var i = 0, len = this.dots.length; i < len; i++) {
        this.dots[i].className = "";
      }
      this.dots[this.index].className = "on";
    },
    autoPlay() {
      this.timer = setInterval(() => {
        this.next_pic();
      }, this.swiperTime);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.autoPlay();
    },
    clickDot(event) {
      let el = event.currentTarget;
      let index = parseInt(el.innerHTML) - 1;

      const transform = -index * this.imgWidth;

      this.stopTimer();

      this.animate(transform);
      this.index = index;
      this.showCurrentDot();

      this.startTimer();
    },
    touchStart(event) {
      if (this.scrolling) {
        return;
      }
      this.stopTimer();
      this.startPos = event.touches[0].pageX;
    },
    touchMove(event) {
      this.currentPos = event.touches[0].pageX;
      this.distance = this.currentPos - this.startPos;
      const pos = -this.index * this.imgWidth;
      this.animate(pos + this.distance);
    },
    touchEnd() {
      const offset = this.transform;
      const pos = -this.index * this.imgWidth;
      const move = offset - pos;
      if (this.distance > 0 && move > this.imgWidth * 0.3) {
        this.index--;
      }
      if (this.distance < 0 && move < this.imgWidth * 0.3) {
        this.index++;
      }

      const transform = -this.index * this.imgWidth;
      this.animate(transform);

      if (this.index > this.slideCount-1) {
        this.index = 0;
        this.correct_pos(0);
      } else if (this.index < 0) {
        this.index = this.slideCount-1;
        this.correct_pos(-this.imgWidth*(this.slideCount-1));
      }

      this.showCurrentDot();

      this.startTimer();
    },
  },
  computed: {
    wrap() {
      return document.getElementsByClassName("wrap")[0]
    },
    next() {
      return document.getElementsByClassName("arrow_right")[0]
    },
    prev() {
      return document.getElementsByClassName("arrow_left")[0]
    },
    dots() {
      return document.getElementsByTagName("span");
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    /* width: 600px;
    height: 400px; */
    /* margin: 100px auto 0 auto; */
    overflow: hidden;
    /* box-shadow: 5px 5px 8px rgb(185, 184, 184); */
  }
  .wrap {
    position: absolute;
    z-index: 1;
    transform: translateX(0);
    display: flex;
  }
  .container .wrap img {
    float: left;
  }
  .container .buttons {
    position: absolute;
    margin: auto;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
  }
  .container .buttons span {
    margin-left: 5px;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    font-size: 0;
    border-radius: 50%;
    background-color: black;
  }
  .container .buttons span.on{
    background-color: rgb(203, 216, 218);
  }
</style>

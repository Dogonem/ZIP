<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap");
* {
  font-family: "Noto Sans KR", sans-serif;
}
.btn-save4 {
  min-width: 100px;
  height: 26px;
  width: 15px;
  background-color: #30c0a3;
  border-radius: 0;
  padding: 0 15px;
  line-height: 25px;
  color: #fff;
  font-size: 15px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  border: none;
}
.card {
  height: 350px;
  width: 250px;
}
</style>

<template>
  <!-- 배너 넣고 싶으면 여기에 추가 -->

  <!-- ***** Editor Pick Area End ***** -->
  <div>
    <section>
      <div class="container">
        <br /><br /><br /><br /><br />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" :key="i" v-for="(main, i) in mainList">
            <div class="card">
              <img
                :src="`/download/${main.ACCO_ID}/${main.ACCO_IMAGE}`"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{{ main.ACCO_NAME }}</h5>
                <button class="btn-save4" @click="goToDetail(main.ACCO_ID)">
                  상세보기
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="col">
            <div class="card">
              <img
                src="https://image.goodchoice.kr/resize_490x348/affiliate/2021/03/31/6063ceed4d9b5.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <RouterLink to="/acco_detail"
                  ><button class="btn-save4">상세보기</button></RouterLink
                >
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://image.goodchoice.kr/resize_490x348/affiliate/2021/03/31/6063ceed4d9b5.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <RouterLink to="/acco_detail"
                  ><button class="btn-save4">상세보기</button></RouterLink
                >
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://image.goodchoice.kr/resize_490x348/affiliate/2021/03/31/6063ceed4d9b5.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <RouterLink to="/acco_detail"
                  ><button class="btn-save4">상세보기</button></RouterLink
                >
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <section class="dorne-catagory-area">
      <div class="container">
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div class="row">
          <div class="col-12">
            <div class="all-catagories">
              <div class="row">
                <!-- Single Catagory Area -->
                <div class="col-12 col-sm-6 col-md">
                  <div
                    class="single-catagory-area wow fadeInUpBig"
                    data-wow-delay="0.2s"
                  >
                    <div class="catagory-content">
                      <img src="img/core-img/icon-1.png" alt="" />
                      <a href @click="goTohotel(ho.ACCO_TYPE)">
                        <h6>Hotels</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- Single Catagory Area -->
                <div class="col-12 col-sm-6 col-md">
                  <div
                    class="single-catagory-area wow fadeInUpBig"
                    data-wow-delay="0.4s"
                  >
                    <div class="catagory-content">
                      <img src="img/core-img/icon-2.png" alt="" />
                      <a href="#">
                        <h6>Restaurants</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- Single Catagory Area -->
                <div class="col-12 col-sm-6 col-md">
                  <div
                    class="single-catagory-area wow fadeInUpBig"
                    data-wow-delay="0.6s"
                  >
                    <div class="catagory-content">
                      <img src="img/core-img/icon-3.png" alt="" />
                      <a href="#">
                        <h6>Shopping</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      mainList: [],
    };
  },
  beforeCreate() {},
  created() {
    this.getMainList();
  },
  beforMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    async getMainList() {
      this.mainList = await this.$api("/api/main_sql", {});
      this.ho = await this.$api("/api/SearchAccoho", {})
      console.log(this.mainList);
    },
    goToDetail(ACCO_ID) {
      this.$router.push({ path: "/acco_detail", query: { ACCO_ID: ACCO_ID } });
    },
    goTohotel(ACCO_TYPE){
      this.$router.push({ path: "/search_list", query:{ ACCO_TYPE: ACCO_TYPE}})
    }
  },
};
</script>

<style>
.catagory-content {
  text-align: center;
}
.card-body {
  text-align: center;
}
h6 {
  text-align: center;
}
</style>

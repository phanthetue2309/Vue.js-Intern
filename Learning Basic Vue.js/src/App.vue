<template>
  <div id="app">
    <div>
      <center><img alt="Vue logo" src="./assets/logo.png" /></center>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>

    <h3>Cách Binding dữ liệu 2 chiều</h3>
    <input type="text" v-model="name" />
    <div>{{ name }}</div>
    <h3>Kiểu dữ liệu ứng của vue.js</h3>
    <div>
      <input type="checkbox" v-model="accept" /> Tôi đồng ý với điều khoản
      <br />
      <input type="radio" v-model="choice" /> Another Option
    </div>
    <h3>Cách thức hoạt động của button @click</h3>
    <div v-show="isShow">
      <h1>Lập trình viên Phan Thế Tuệ</h1>
    </div>
    <button @click="isShow = !isShow">Ẩn / Hiện</button>

    <h3>Bind id full</h3>
    <h2 v-bind:id_name_f="id_name_f">What is your name ?</h2>
    <input type="text" :disabled="inputDisabled" />
    <button @click="inputDisabled = !inputDisabled">Mở / Khóa</button>
    <h3>Bind id shortcut</h3>
    <h2 :id_name_s="id_name_s">What is your name ?</h2>
    <div>
      <h3>Binding with CSS/Style</h3>
      <h4 :class="{ dachon: selected, new_chon: selected2 }">
        what is your choice CSS/Style
      </h4>
    </div>
    <button @click="selected = !selected">Click to change</button>

    <div>
      <h3>Linking with V-mode (V : views)</h3>
      <input type="text" v-model="channelName[1]" />
    </div>

    <div>
      <input type="text" v-model="new_channel.name" />
    </div>

    <h3>Event Handling</h3>
    <div>
      <input type="text" v-model="new_channel.name" />
      <button v-on:click="new_channel.name = 'Lap trinh vien Do Ly Nhan'">
        Click to Change
      </button>
    </div>

    <div>
      <input type="text" v-model="new_channel.name" />
      <button v-on:mouseover="new_channel.name = 'Lap trinh vien Tue Dep Trai'">
        Click to Change
      </button>
    </div>

    <form action="/abc">
      <p>
        Chưa bị prevent
        <input type="text" v-model="new_channel.name" />
        <button
          type="submit"
          @click="
            new_channel.name =
              'Click vào thì trang bị reload và trả về lại giá trị gốc'
          "
        >
          Click then Page will be reload
        </button>
      </p>
      <p>
        prevent
        <button
          type="submit"
          @click.prevent="
            new_channel.name =
              'Click vào thì trang bị không bị reload và thay đổi giá trị'
          "
        >
          Click then Page will not be reload
        </button>
      </p>
    </form>

    <div v-if="isShow">Lap Trinh Vien TV</div>
    <button @click="isShow = !isShow">
      <span v-show="isShow">Hide</span>
      <span v-show="!isShow">Show</span>
    </button>

    <br />

    <div v-if="isShow2">Lap Trinh Vien TV if else</div>
    <button @click="isShow2 = !isShow2">
      <span v-if="isShow2">Hide</span>
      <span v-else>Show</span>
    </button>
    <h3>v-for</h3>
    <div v-for="(task, index) in tasks" :key="index">
      {{ task }}
    </div>
    <h3>Add new Task</h3>
    <input type="text" v-model="newTask" />
    <button @click="tasks2.push({ content: newTask, done: false })">
      Add New
    </button>
    <br />
    <button @click="addTask()">
      Add New Task using method in Scripts
    </button>
    <h3>v-for like class</h3>
    <div v-for="(task, index) in tasks2" :key="index">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ done: task.done }"> {{ task.content }} </span>
    </div>
    <hr />
    <h3>How to Using Props and another component</h3>
    <Task v-for="(task, index) in tasks2" :key="index" :taskData="task" />
    <!-- :taskData='tên div class trong Task.vue' -->
    <!-- :taskData với taskData là biến ở bên Task.vue ==> ta truyền taskData = task2 -->
    <hr />
    <h3>Multiple Tag Selector</h3>
    <TagSelector />

    <h2>How to Using Filter or Computed</h2>
    <div>
      {{ Dau_cham_phan_tach }}
      <button @click="tong_tien += 20000">Thêm 20k</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Task from "./components/Task.vue";
import TagSelector from "./components/TagSelector.vue";

export default {
  name: "App",
  data() {
    // hàm trả về dữ liệu cho web
    return {
      name: "Phan Thế Tuệ",
      accept: true,
      choice: true,
      isShow: true,
      isShow2: true,
      id_name_f: "Đỗ Lý Nhân",
      id_name_s: "Tuệ Phan Thế",
      inputDisabled: true,
      selected: true,
      selected2: true,
      channelName: ["My name is Phan The Tue", "My name is Do Ly Nhan"],
      new_channel: {
        name: "Lap trinh vien Phan The Tue",
      },
      tasks: ["Cooking", "Walking", "Sleeping", "Coding"],
      newTask: "",
      tasks2: [
        { content: "Cooking", done: false },
        { content: "Walking", done: false },
        { content: "Sleeping", done: false },
        { content: "Coding", done: false },
      ],
      tong_tien: 1000000,
    };
  },
  computed: {
    Dau_cham_phan_tach() {
      return this.tong_tien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
  methods: {
    addTask() {
      this.tasks2.push({
        content: this.newTask,
        done: false,
      });
    },
  },
  watch: {
    newTask(newValue, oldValue) {
      console.log("new Task changed");
      console.log(oldValue);
      console.log(newValue);
    },
  },
  mounted() {
    // hàm có tác dụng vừa gắn lên cái là gọi
    // gọi API
  },
  components: {
    // nếu khai báo mà không sử dụng sẽ báo lỗi unused
    HelloWorld,
    Task,
    TagSelector,
  },
};
</script>

<style scoped>
.dachon {
  color: red;
}
.done {
  text-decoration: line-through;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

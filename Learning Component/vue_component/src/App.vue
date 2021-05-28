<template>
  <div>
    <!-- Props -->
    <h1>Greet Component</h1>
    <Greet></Greet>
    <!-- Truyền tham số vào Greet và show lại ở bên kia -->
    <Greet :name="name" :hero-name="channel" />
    <!-- Truyền dữ liệu thay thế trực tiếp không thông qua biến dưới data -->
    <Greet name="Bruce" hero-name="Batman" />
    <Greet name="Clark" hero-name="Superman" />
    <Greet name="Diana" hero-name="Wonder Woman" />
    <hr />

    <h1>Article Component</h1>
    <Article id="my-article" :likes="50" :isPublished="true" />
    <!-- truyền vào kiểu dữ liệu  -->
    <!-- Provide/ Inject -->

    <hr />
    <h1>Non Prop Attributes - App component {{ name }}</h1>
    <ComponentC />
    <!-- Non Prop Attributes -->
    <!-- Name will be sent from C => E => F using provide in data -->

    <h1>Event through component</h1>
    <!-- Events -->
    <button @click="showPopup = true">Show Popup</button>
    <Popup v-show="showPopup" @close="closePopup" />
    <Input v-model="username" />

    <hr />
    <h1>Slot</h1>
    <!-- Slots -->
    <h2>Slot default</h2>
    <Card></Card>
    <h2>Slot with Attributes</h2>
    <Card>Card Content</Card>
    <h2>Slot with image</h2>
    <Card><img src="https://picsum.photos/200"/></Card>
    <h2>Slot with Full</h2>
    <Card>
      <template v-slot:header>
        <h3>Header</h3>
      </template>
      <template v-slot:default>
        <img src="https://picsum.photos/200" />
      </template>
      <template v-slot:footer>
        <button>View Details</button>
      </template>
    </Card>

    <hr />
    <h1>Name Slot Props</h1>
    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }} {{ slotProps.lastName }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.lastName }}, {{ slotProps.firstName }}
      </template>
    </NameList>

    <hr />
    <h1>App component Text</h1>
    <ChildStyles>
      <h4>ChildStyles component Text</h4>
    </ChildStyles>

    <!-- Dynamic Components -->
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>

    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>

    <!-- Teleport Component -->
    <teleport to="#portal-root">
      <Portal />
    </teleport>
  </div>
</template>

<script>
import Article from "./components/Article.vue";
import Greet from "./components/Greet.vue";
import ComponentC from "./components/ComponentC.vue";
import Popup from "./components/Popup.vue";
import Input from "./components/Input.vue";
import Card from "./components/Card.vue";
import NameList from "./components/NameList.vue";
import ChildStyles from "./components/ChildStyles.vue";
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";
import Portal from "./components/Portal.vue";

export default {
  name: "App",
  components: {
    Greet,
    Article,
    ComponentC,
    Popup,
    Input,
    Card,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    Portal,
  },
  data() {
    return {
      name: "Tuệ Đẹp Trai",
      channel: "Codevolution",
      showPopup: false,
      username: "",
      friends: ["Chandler", "Joey", "Monica"],
      activeTab: "TabA",
    };
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log("name", name);
    },
  },
  // This function provide help to send data through component
  // just parent - child component can use it
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>

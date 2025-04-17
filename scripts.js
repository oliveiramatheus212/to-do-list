const toDoList = {
  data() {
    return {
      tasks: [],
      newTask: { description: "", active: false },
    };
  },
  methods: {
    addTask() {
      if (this.newTask.description) {
        this.tasks.push({ ...this.newTask });
        this.newTask = { description: "", active: false };
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      } else {
        alert("Describe your new task before adding..");
      }
    },
    clearTasks() {
      this.tasks = [];
      localStorage.removeItem("tasks");
    },
  },
  mounted() {
    console.log("✅ mounted foi chamado!");
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  },
  updated() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
};

Vue.createApp(toDoList).mount("#app");

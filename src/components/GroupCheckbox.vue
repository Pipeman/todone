<template>
  <section>
    <b-checkbox
      v-for="task in tasks"
      v-model="checkedTask"
      :key="task.id"
    >{{ task.description }}</b-checkbox>
    <b-checkbox v-model="newTask.done">
      <b-input v-model="newTask.description"></b-input>
      <button
        class="button is-medium is-primary"
        @click="addNewTask"  
      >Add</button>
    </b-checkbox>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { Checkbox } from 'buefy/dist/components/checkbox';
import { Input } from 'buefy/dist/components/input';

export default {
  name: 'ToDo',
  components: {
    'b-checkbox': Checkbox,
    'b-input': Input,
  },
  props: {
    tasks: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data () {
    return {
      checkedTasks: [],
      newTask: {
        done: false,
        description: '',
      },
    };
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    addNewTask () {
      this.addTask(this.newTask)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

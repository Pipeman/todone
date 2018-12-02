<template>
  <section>
    <b-checkbox
      v-for="task in tasks"
      v-model="checkedTask"
      :key="task.id"
    >{{ task.description }}</b-checkbox>
  </section>
</template>

<script>
export default {
  name: 'ToDo',
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
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

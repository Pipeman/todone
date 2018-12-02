<template>
  <section>
    <group-checkbox :tasks="tasks"></group-checkbox>
  </section>
</template>

<script>
import GroupCheckbox from '@/components/GroupCheckbox';

export default {
  name: 'ToDo',
  components: {
    GroupCheckbox,
  },
  data () {
    return {
      tasks: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

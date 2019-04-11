<template>
  <reminder :items="items"></reminder>
</template>

<script>
const STATUS = {
  IN_PROGRESS: "inprogress",
  DONE: "done",
  TODO: "todo"
};
import HelloWorld from "../components/HelloWorld";
import Reminder from "../components/reminder/Reminder";
export default {
  data() {
    return {
      items: [
        { header: "Today" },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.IN_PROGRESS
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.TODO
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.TODO
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.DONE
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.TODO
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.DONE
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.TODO
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.DONE
        },
        { divider: true, inset: true },

        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.TODO
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.DONE
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.TODO
        },
        { divider: true, inset: true },
        {
          title: "Walk the dog",
          message: "Buy some food also",
          beginDate: Date.now(),
          endDate: Date.now() + Math.random() * 3600 * 24 * 365,
          status: STATUS.DONE
        },
        { divider: true, inset: true }
      ]
    };
  },
  components: {
    HelloWorld,
    Reminder
  }
};
</script>

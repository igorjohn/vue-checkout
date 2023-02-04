
<script>
import AccordionItem from "./AccordionItem";

export default {
    components: {
        AccordionItem,
    },
    props: {
        questions: Array,
    },
};
</script>
  
<template>
    <section class="info">
        <AccordionItem
            v-for="question in questions"
            :key="question.id"
            :title="question.title"
            :info="question.info" />
    </section>
</template>

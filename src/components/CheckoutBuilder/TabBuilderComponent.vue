<script type="text/javascript">
export default {
    props: {
        title: String
    }
};
</script>
  
<template>
    <div class="w-full flex flex-col gap-2 mx-auto">
        <span class="text-base text-slate-700 font-bold mb-3 tracking-tight">
            {{ title }}
        </span>
        <slot />
    </div>
</template>
<template>
    <li class="list-group-item">
        <div class="btn btn-primary">{{ item.name }}</div>
    </li>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'park',
  props: ['item']

}
</script>

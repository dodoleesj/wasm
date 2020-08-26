<template>
<div class="page">
    <header class="header">
        <n-link to="#"><h1 class="website-title">WASM-선거</h1></n-link>
    </header>
    <ul class="menu">
        <li class="menu-item">
            <n-link to="setting" class="menu-link">설정</n-link>
        </li>
        <li class="menu-item">
            <n-link to="registration" class="menu-link">후보자 등록</n-link>
        </li>
        <li class="menu-item">
            <!-- <n-link to="vote" class="menu-link">투표</n-link> -->
            <n-link to="vote" class="menu-link">투표</n-link>
        </li>
        <li class="menu-item">
            <n-link to="counting" class="menu-link">개표</n-link>
        </li>
        <li class="menu-item">
            <n-link to="#" class="menu-link">당선</n-link>
        </li>
    </ul>
    <nuxt />
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>
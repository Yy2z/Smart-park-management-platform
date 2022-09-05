<!--
 * @Author: Palank 754803053@qq.com
 * @Date: 2022-09-04 16:01:49
 * @LastEditors: Palank 754803053@qq.com
 * @LastEditTime: 2022-09-04 16:26:37
 * @FilePath: \Smart-park-management-platform-1\src\components\itemPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
  <div class="item">
   <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .item{
        width: 22%;
        height: 250px;
        border: 1px solid blue;
        margin: auto;
        background-color: rgba(8, 26n, 60, 0.7);
    }

</style>
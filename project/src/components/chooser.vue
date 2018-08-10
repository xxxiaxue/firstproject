<template>
  <div class="chooser-component">
  	<ul class="chooser-list">
  	  <li v-for="(item, index) in selections"
  	      @click="toggleSelection(index)"
  	      :title="item.label"
  	      :class="{active: checkActive(index)}">{{ item.label }}
  	  </li>
  	</ul>
  </div>
</template>

<script>
  import _ form 'lodash' 
  export default {
  	props: {
  	  selections: {
  	  	type: Array,
  	  }
  	},
  	data () {
  		
  	}
  }
</script>
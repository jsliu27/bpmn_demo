<template>
  <section class="bpmn_base">
    <h3>BPMN引入</h3>
    <section>
      <div class="canvas" id="js-canvas"></div>
    </section>
  </section>
</template>
<script>
import BpmnModeler from 'bpmn-js/lib/Modeler';
import diagramXML from '../resources/newDiagram.bpmn';
import { onMounted, reactive } from 'vue';
export default {
  setup(context, props) {
    const state = reactive({
      bpmnModeler: null,
    })
    // 打开画布
    async function openDiagram(xml) {
      try {
        console.log('state.bpmnModeler======>', state.bpmnModeler)
        console.log('xml========>', xml)
        await state.bpmnModeler.importXML(xml);
      } catch (err) {
        console.error(err);
      }
    }
    // bpmn初始化
    function init() {
      // 获取dom元素
      const canvas = document.querySelector('#js-canvas');
      // bpmn构造函数实例化
      state.bpmnModeler = new BpmnModeler({
        container: canvas,
      });
    }

    onMounted(() => {
      console.log('context=======>', context)
      console.log('state========>',state)
      init();
      openDiagram(diagramXML)
    })
  }
}
</script>
<style>
  .canvas {
    height: 400px;
  }
</style>

<template>
  <section class="post-write-wrap">
    <div class="category-select-wrap">
      <select class="category-select">
        <option value="">Java</option>
        <option value="">Spring 프레임워크</option>
        <option value="">JavaScript</option>
        <option value="">Vuejs</option>
        <option value="">Tomcat</option>
      </select>
    </div>
    <div class="title-input-wrap">
      <input type="text" class="title-input">
    </div>
    <editor
        v-model="editorText"
        :options="editorOptions"
        height="500px"
        mode="wysiwyg"
    />
    <div class="btn-wrap">
      <button class="write-btn">등록</button>
    </div>
  </section>
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/vue-editor'

export default {
  name: "Write",
  components: { Editor },
  data () {
    return {
      editorText: 'This is initialValue.',
      editorOptions: {
      }
    }
  }
}
</script>

<style scoped>
.post-write-wrap {
  width: 820px;
  margin: 0 auto;
}
.category-select-wrap {
  margin: 10px 0;
  height: 30px;
}
.category-select {
  width: 160px;
  height: 100%;
}
.title-input-wrap {
  margin: 10px 0;
  height: 30px;
}
.title-input {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: 14px;
}
.btn-wrap {
  margin: 40px 0;
  text-align: center;
}
.write-btn {
  width: 100px;
  height: 30px;
  font-size: 16px;
}
</style>

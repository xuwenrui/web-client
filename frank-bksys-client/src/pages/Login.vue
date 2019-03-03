<template>
  <row>
    <column class="col-md-3"/>
    <column class="col-md-5">
      <va-box title="登录" theme="box-info" :isBorder="true" widgetType>
        <div slot="content">
          <form class="form-horizontal">
            <va-input
              :isHorizontal="true"
              title="用户名"
              placeholder="用户名"
              type="text"
              vaId="horizontal-email"
            ></va-input>

            <va-input
              :isHorizontal="true"
              title="密码"
              placeholder="密码"
              type="password"
              vaId="horizontal-email"
            ></va-input>

            <va-checkbox :isHorizontal="true" text="Check me out..."></va-checkbox>
          </form>
        </div>

        <div slot="footer">
          <va-button :isBlock="false" align="left" @fclick="login" theme="info" @click="myevent" name="登录" ></va-button>
          <va-button :isBlock="false" theme="info" align="right" name="注册"></va-button>
        </div>
      </va-box>
    </column>
  </row>
</template>
<script>
import VABox from "../widgets/VABox.vue";
import VACheckBox from "../components/VACheckBox.vue";
import VAInput from "../components/VAInput.vue";
import VAButton from "../components/VAButton.vue";

export default {
  name: "general-elements",
  data() {
    return {
      selectList: ["option1", "option2", "option3", "option4", "option5"]
    };
  },
  created() {},
  methods:{
    login:function() {
        this.$router.push('/home')
    }
  },
  components: {
    "va-box": VABox,
    "va-checkbox": VACheckBox,
    "va-input": VAInput,
    "va-button": VAButton
  }
};
</script>

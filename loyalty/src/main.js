import { createApp } from 'vue'
import App from './App.vue'

const mount = (el, props) => {
    const userProfile = props.isLogin
    createApp(App, {userProfile}).mount(el);
  };

 const fakeProps =  {
    isLogin:{
        email: 'fake@email.com'
    }
}

if (process.env.NODE_ENV === "development") {
    const rootNode = document.querySelector("#app");
    if (rootNode) {
        mount(rootNode, fakeProps);
    }
}

export {mount};

import { ClosureComponent, Component } from "mithril";
import { m } from "./components";

export const component: ClosureComponent = (): Component => {
  return {
    view: function(vnode) {
      document.title = "Error! - GenieACS";
      return m("p.error", vnode.attrs["error"]);
    }
  };
};

import Vue from 'vue';
import UnnicInput from './Input/Input.vue';
import UnnicButton from './Button/Button.vue';
import UnnicSidebar from './Sidebar/Sidebar.vue';
import UnnicSidebarItem from './Sidebar/SidebarItem.vue';
import UnnicSidebarMenu from './Sidebar/SidebarMenu.vue';
import UnnicDropdown from './Dropdown/Dropdown.vue';
import UnnicDropdownItem from './Dropdown/DropdownItem.vue';
import UnnicIcon from './Icon.vue';

const components = {
  UnnicInput,
  UnnicButton,
  UnnicSidebar,
  UnnicSidebarItem,
  UnnicSidebarMenu,
  UnnicIcon,
  UnnicDropdown,
  UnnicDropdownItem,
};

Object.keys(components).forEach((name) => {
  Vue.component(name, components[name]);
});

export default components;

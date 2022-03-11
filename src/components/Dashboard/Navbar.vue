<template>
  <div id="Navbar">
    <BootstrapSidebar
      :initial-show="initialShow"
      :links="links"
      :header="header"
      :fa="true"
      @sidebarChanged="onSidebarChanged"
    >
      <template v-slot:navbar>
        <b-navbar
          id="mainNavbar"
          toggleable="lg"
          type="light"
          variant="light"
          fixed="top"
        >
          <b-navbar-nav>
            <b-nav-item> Dashboard </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </template>

      <template v-slot:content>
        <b-container style="margin-top: 56px">
          <router-view />
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
</template>

<style lang="scss">
/* @import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss"; */
@import "vue-bootstrap-sidebar/src/scss/default-theme";
</style>

<style>
body {
  padding: 1rem;
}
</style>

<script>
import BootstrapSidebar from "vue-bootstrap-sidebar";
export default {
  components: {
    BootstrapSidebar,
  },
  data() {
    return {
      initialShow: true,
      header: "<h3>HelpDesk</h3>",
      links: [
        {
          name: "Dashboard",
          href: { name: "dashboard" },
          faIcon: ["fas", "dashboard"],
        },
        {
          name: "Ticket",
          faIcon: ["fas", "tint"],
          children: [
            {
              name: "Ticket List",
              href: {
                name: "Ticket-list",
              },
              faIcon: ["fas", "ticket"],
            },
            {
              name: "TicketReport",
              href: {
                name: "Tiket-report",
              },
              faIcon: ["fas", "ticket"],
            },
          ],
        },
        {
          name: "Conversation",
          href: { name: "conversation" },
          faIcon: "users",
        },
        { name: "Contact", href: { name: "contact" }, faIcon: "phone" },
      ],
    };
  },
  methods: {
    onSidebarChanged() {},
  },
};
</script>

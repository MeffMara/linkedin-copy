<template lang="pug">
  header.header
    nav
      .navbar
        .logo
          include ../assets/img/icon/icon-logo.svg
        ul.navbar__list
          li.navbar__item
            router-link(to="/feed") feed
            |
            img(src='../assets/img/icon/icon-feed.svg')
          li.navbar__item
            a network
            |
            include ../assets/img/icon/icon-network.svg
          li.navbar__item
            a jobs
            |
            include ../assets/img/icon/icon-jobs.svg
          li.navbar__item
            a chat
            |
            include ../assets/img/icon/icon-chat.svg
          li.navbar__item
            a notices
            |
            include ../assets/img/icon/icon-notice.svg
        .searchbar
          include ../assets/img/icon/icon-find.svg
          input(
            type="text"
            placeholder="Search"
            )
        .navbar__item
          a other
          |
          include ../assets/img/icon/icon-dots.svg
        .burger
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
        links: ["feed", "network", "jobs", "chat", "notices"],
        itemsPath: '/img/icon/icon-'
      
    };
  },
};
</script>

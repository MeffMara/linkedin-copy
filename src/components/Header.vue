<template lang="pug">
  header.header
    nav
      .navbar
        .logo
          include ../assets/img/icon/icon-logo.svg
        ul.navbar__list
          li.navbar__item
            a feed
            |
            include ../assets/img/icon/icon-feed.svg
          li.navbar__item
            a Network
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
        .button-menu
          a other
            |
            include ../assets/img/icon/icon-dots.svg
    router-link(to="/") Home
    router-link(to="/dashboard") Dashboard
    router-link(to="/drink-list") Drink List
    h1 Page Nmae
</template>
<script>
export default {
  name: 'Header'
}
</script>
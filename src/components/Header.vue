<template lang="pug">
  header.header
    nav
      .navbar
        .logo
          include ../assets/img/icon/icon-logo.svg
        ul
          li
            a feed
            |
            include ../assets/img/icon/icon-feed.svg
          li
            a Network
            |
            include ../assets/img/icon/icon-network.svg
          li
            a jobs
            |
            include ../assets/img/icon/icon-jobs.svg
          li
            a chat
            |
            include ../assets/img/icon/icon-chat.svg
          li
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
    h1 Page Nmae
</template>
<script>
export default {
  name: 'Header'
}
</script>
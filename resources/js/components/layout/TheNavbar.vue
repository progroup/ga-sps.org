<template>
  <div style="border-bottom: 1px solid #98002e;">
    <div class="container">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <div style>
              <span style="font-family: 'Audiowide', cursive;font-size: 2.5rem;word-wrap:nowrap">
                Ga
                <span style="color: #980e0e">SPS</span>
              </span>
            </div>
          </router-link>

          <div class="navbar-burger burger" data-target="navMenuIndex">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" id="navMenuIndex">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown" :class="[aboutMenuOpen ? 'is-active' : '']">
              <a @click="aboutMenuOpen = !aboutMenuOpen" class="navbar-link">About</a>
              <div id="aboutDropdown" class="navbar-dropdown">
                <router-link class="navbar-item" to="/about">About Us</router-link>
                <router-link class="navbar-item" to="/contact">Contact Information</router-link>
                <router-link class="navbar-item" to="/georgia-seow">Georgia SEOW</router-link>
              </div>
            </div>
            <div class="navbar-item has-dropdown" :class="[eccoMenuOpen ? 'is-active' : '']">
              <a @click="eccoMenuOpen = !eccoMenuOpen" class="navbar-link">New to Ecco</a>
              <div id="eccoDropdown" class="navbar-dropdown">
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/content/resources/welcome-to-ecco/welcome-to-ecco.pdf"
                >Welcome to ECCO</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/content/resources/spf-intro/spf-intro.mp4"
                >Introduction to SPF</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/content/resources/ecco-manual/ecco-manual.pdf"
                >Users Manual w/ Progress Reporting</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/resources/briefcase-dashboard/briefcase-dashboard.mp4"
                >Briefcase Dashboard</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/content/resources/pulling-reports/pulling-reports.mp4"
                >Pulling Reports</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/resources/help-dashboard/help-dashboard.mp4"
                >Help Dashboard</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/resources/ecco-overview-ta-entry-and-updates"
                >TA Entry and Updates</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/content/resources/entering-process-data/entering_process_data.mp4"
                >Entering Process Level Data</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/content/resources/creating-an-intervention-profile/creating_an_intervention_profile.mp4"
                >Adding an Intervention Profile</a>
                <a
                  class="navbar-item"
                  href="http://resources.ga-sps.org/resources/ecco-mds-data-entry-guidance-document"
                >ECCO MDS Data Entry Guidance Document</a>
              </div>
            </div>
            <router-link class="navbar-item" to="/spf-overview">SPF Overview</router-link>
            <router-link class="navbar-item" to="/search">Resources</router-link>
            <router-link class="navbar-item" to="/media">Media</router-link>
            <router-link class="navbar-item" to="/training">Training</router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <a
                class="button is-link"
                href="https://www.georgiamds.uga.edu/PublicHome/Index"
                target="new"
              >MDS</a>
              <a class="button is-link" href="http://gaspsdata.net/" target="new">GA Data Warehouse</a>
            </div>
            <div class="navbar-item">
              <a
                href="http://ecco.gapip.pro-sps.com/index.php"
                target="_new"
                class="button is-info is-ecco"
              >ECCO PIPP</a>
            </div>
            <div class="navbar-item" style="padding-left: 0px;">
              <a
                href="http://ecco.ga-sps.org/login.php"
                target="_new"
                class="button is-info is-ecco"
              >ECCO Archived</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    aboutMenuOpen: false,
    eccoMenuOpen: false
  }),
}
</script>

<script>
  import "../../static/style.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Moon from "./icons/moon.svelte";
  import Sun from "./icons/sun.svelte";

  const navs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Ad",
      href: "/ad",
    }
  ];

  let currentTheme = "";

  onMount(() => {
    const userPrefDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const hasUserSetDarkMode = document.documentElement.dataset.theme == "dark";

    const hasUserSetLightMode =
      document.documentElement.dataset.theme == "light";

    if (!hasUserSetDarkMode && !hasUserSetLightMode) {
      setTheme(userPrefDark ? "dark" : "light");
    }
  });

  // @ts-ignore
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.cookie = `siteTheme=${theme}; max-age=31536000; path="/"`;
    currentTheme = theme;
  };

  $: routeId = $page.route.id;
</script>

<nav>
  <div class="container">
    <h1>TSGS</h1>

    <ul>
      {#each navs as { title, href }}
        <li>
          <a {href} class:active={routeId == href} {title}>{title}</a>
        </li>
      {/each}
      <li>
        {#if currentTheme == "light"}
          <a class="moon" href={"#"} on:click={() => setTheme("dark")}>
            <Moon />
          </a>
        {:else}
          <a class="sun" href={"#"} on:click={() => setTheme("light")}>
            <Sun />
          </a>
        {/if}
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    padding: 0.5em;
    font-family: lucia;
    color: white;
    background-color: rgb(220, 20, 60);
  }
  .container {
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    margin: 0;
    margin-left: auto;
    list-style: none;
  }
  li {
    margin-right: 20px;
  }
  h1 {
    margin: 0;
    font-size: 1.5em;
    font-weight: normal;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .active {
    color: yellow;
  }
</style>

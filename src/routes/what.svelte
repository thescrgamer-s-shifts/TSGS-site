<script>
    import Button from "$lib/button.svelte";
</script>

<div class="container grid">
    <div class="what">
        <h3>What we do</h3>
        <p>
            We offer you shifts for every roblox game. You can also book shifts if you have a private server for a game
            and you want to play with some friends from the Community. We also have a nice staff team and we're open to
            everyone who needs help or also wants to become a member of the staff team. If you want to get a short
            overview you can use the button below to see our ad to the server.
        </p>
        <Button size = "medium">
            <a href = "/ad">Go to the ad</a>
        </Button>
        <Button size = "medium">
            <a href = "/active">View our active members</a>
        </Button>
        <Button size = "medium">
            <a href = "/about">About us</a>
        </Button>
    </div>
    <div class="contact">
        <h3>Contact Us</h3>
        <p><strong>TSGS</strong></p>
        <p>via <a class="con" href="https://discord.gg/W9wrutfmWg">Discord</a></p>
    </div>
</div>


<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2em;
    }
    .what {
        grid-column: span 8;
    }
    .contact {
        grid-column: span 4;
    }
    h3 {
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: 500;
        border-bottom: 1px solid #ddd;
    }
    .con {
        text-decoration: none;
        color: var(--color);
    }
    .con:hover {
        text-decoration: underline;
    }
    a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1em;
    }
</style>
<script>
    import Button from "$lib/button.svelte"
</script>

<div class="container">
<h1>Our Staff Team</h1>
</div>

<div class="container">
<h2>A server needs moderators and staff, right? Well, here's a list of our amazing staff members!
They all make sure the server runs smoothly!</h2>
</div>

<div class="ourstaff">
<h1>Filter staff members by role</h1>
<Button size = "medium">
            <a href = "/jrmod">Junior Moderators</a>
        </Button>
<Button size = "medium">
            <a href = "/mod">Moderators</a>
        </Button>
<Button size = "medium">
            <a href = "/srmod">Senior Moderators</a>
        </Button>
<Button size = "medium">
            <a href = "/admin">Administrators</a>
        </Button>
<Button size = "medium">
            <a href = "/manager">Managers</a>
        </Button>
<Button size = "medium">
            <a href = "/bod">Directors</a>
        </Button>
</div>

<style>
    .ourstaff {
        display: ourstaff;
        grid-template-columns: repeat(12, 1fr);
        gap: 2em;
    }
    h1 {
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: 500;
        border-bottom: 1px solid #ddd;
    }
    h2 {
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
        font-size: 1.2em;
        font-weight: 500;
        border-bottom: 1px solid #ddd;
    }
</style>
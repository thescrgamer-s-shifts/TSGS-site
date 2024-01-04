<script>
    import Button from "$lib/button.svelte"
</script>

<div class="container">
<h1> Become a Staff Member - tutorial </h1>
</div>

<div class="container">
<h2> To become a Staff member, you will have to apply for the role in our applications channel in our
Discord server. When applications are open, make sure you are able to follow the quota in the 
application so that you can start your Staff journey in a good way! </h2>
</div>

<div class="container">
<h1> How to get promoted? </h1>

<h2> We get this question asked very often. To get promoted, you should be active, should be helpful to others, claim tickets
and just be active overall. You are not allowed to ask for promotions but you can ask for tips on how you can 
get promoted. </h2>

</div>

<div class="appspage">
<Button size = "medium">
            <a href = "/apps">Applications</a>
        </Button>
</div>

<style>
    .appspage {
        display: appspage;
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
<script>
    // import the textlayout from the lib folder
    import Layout from "$lib/TextLayout.svelte";
</script>

<Layout>
    <p>Enter your email</p>
    <p>
        (as long as you agree to my <a href="privacy-policy">Privacy Policy</a>)
    </p>

    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
        <form
            action="https://pedestriantactics.us16.list-manage.com/subscribe/post?u=0d4bd01c1e2ab0bb1c2afe3bf&amp;id=3e04051302&amp;f_id=00d37ee0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_self"
        >
            <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                    <input
                        type="email"
                        value=""
                        name="EMAIL"
                        class="required email"
                        id="mce-EMAIL"
                        required
                    />
                    <span id="mce-EMAIL-HELPERTEXT" class="helper_text" />
                </div>
                <div id="mce-responses" class="clear foot">
                    <div
                        class="response"
                        id="mce-error-response"
                        style="display:none"
                    />
                    <div
                        class="response"
                        id="mce-success-response"
                        style="display:none"
                    />
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->

                <div
                    style="position: absolute; left: -5000px;"
                    aria-hidden="true"
                >
                    <input
                        type="text"
                        name="b_0d4bd01c1e2ab0bb1c2afe3bf_3e04051302"
                        tabindex="-1"
                        value=""
                    />
                </div>
                <div class="optionalParent">
                    <div class="clear foot">
                        <input
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button"
                        />
                        <p class="brandingLogo">
                            <a
                                href="http://eepurl.com/hPQgW1"
                                title="Mailchimp - email marketing made easy and fun"
                                ><img
                                    src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                                /></a
                            >
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>
</Layout>

<style type="text/css">
    #mc_embed_signup {
        background: #fff;
        clear: left;
        width: 100%;
        max-width: 600px;
    }

    #mc_embed_signup form {
        margin: 0;
    }

    /* the email input */
    .mc-field-group input {
        width: 100%;
        margin-bottom: var(--spacer);
        /* make it a white box with a black outline no rounding */
        border: 1px solid var(--color-fg);
        background-color: var(--color-bg);
        border-radius: 0;
        color: var(--color-fg);
    }

    .mc-field-group input, #mc-embedded-subscribe {
    font-size: 1rem;
    font-family: "Hyperwalk Body", sans-serif;
    font-weight: normal;
    }

    #mc-embedded-subscribe {
        margin-bottom: var(--outer-margin);
        background-color: var(--color-fg);
        color: var(--color-bg);
        border-radius: 0;
        padding: 0.5rem;
        /* remove the button styling */
        border: none;
    }

    .brandingLogo {
        max-width: 200px;
        padding: 0;
    }

    .brandingLogo a {
        border-bottom: none !important;
    }

    /* prevent clear foot from having a background collor */
    .clear.foot, .mc-field-group {
        background-color: var(--color-bg);
    }

    /* the submit button */
    /* #mc-embedded-subscribe, #mc-embedded-subscribe:hover, #mc-embedded-subscribe:focus  {
        background-color: var(--color-fg);
        border-radius: 0;
    } */

    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>

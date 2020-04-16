more = await document.getElementsByClassName('ml2 pv-s-profile-actions__overflow-toggle artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view');
await more[0].click();
report_and_block = await document.getElementsByClassName('pv-s-profile-actions pv-s-profile-actions--report pv-s-profile-actions__overflow-button full-width text-align-left ember-view');
await report_and_block[0].click();

setTimeout(
    async () => {
        block_user = await document.getElementsByClassName('ember-semaphore__button ember-semaphore__button--menuitem artdeco-button--tertiary artdeco-button--muted artdeco-button--1');
        await block_user[0].click();
        console.log("testy, after block_user");

        block = await document.getElementsByClassName('ember-semaphore__button ember-semaphore__submit-radio artdeco-button artdeco-button--3 artdeco-button--primary ember-view');
        await block[0].click();
        console.log("testy, after block");

        await setTimeout(
            async () => {
                console.log("testy, in nested timeout block");
                e = await document.URL
                console.log("testy, after url",e === "https://www.linkedin.com/feed/");
                if(e === "https://www.linkedin.com/feed/")
                {
                    console.log("testy, in Url");
                    window.close();
                }
            }
            ,1000
        );
    }
    , 1000);

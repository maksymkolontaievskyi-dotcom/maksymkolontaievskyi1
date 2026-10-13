```javascript

// 1. CALLBACK

function runCallback() {
    const win = window.open("", "_blank", "width=300,height=300");

    if (!win) {
        console.log("Window was blocked by the browser");
        return;
    }

    setTimeout(() => {
        win.resizeTo(500, 500);

        setTimeout(() => {
            win.moveTo(200, 200);

            setTimeout(() => {
                win.close();
            }, 2000);

        }, 2000);

    }, 2000);
}


// 2. PROMISES (.then())


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function runPromises() {
    const win = window.open("", "_blank", "width=300,height=300");

    if (!win) {
        console.log("Window was blocked by the browser");
        return;
    }

    delay(2000)
        .then(() => {
            win.resizeTo(500, 500);
            return delay(2000);
        })
        .then(() => {
            win.moveTo(200, 200);
            return delay(2000);
        })
        .then(() => {
            win.close();
        })
        .catch(error => console.error(error));
}



// 3. ASYNC / AWAIT


async function runAsyncAwait() {
    const win = window.open("", "_blank", "width=300,height=300");

    if (!win) {
        console.log("Window was blocked by the browser");
        return;
    }

    await delay(2000);
    win.resizeTo(500, 500);

    await delay(2000);
    win.moveTo(200, 200);

    await delay(2000);
    win.close();
}


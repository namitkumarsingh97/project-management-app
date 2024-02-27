const bucket = new Bucket(stack, "public");

const site = new NextjsSite(stack, "site", {
    + bind: [bucket],
    });
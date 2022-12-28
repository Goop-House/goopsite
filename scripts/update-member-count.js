const fs = require('fs');

async function main() {
    const r = await fetch("https://discord.com/api/v9/invites/goophouse?with_counts=true&with_expiration=true");
    const v = await r.json();
    console.log(v.approximate_member_count);

    fs.writeFile(`./public/member-count.json`, JSON.stringify({
        member_count: v.approximate_member_count,
    }), () => {});
}
main();

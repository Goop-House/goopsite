async function main() {
    const r = await fetch('/public/member-count.json');
    const v = await r.json();

    console.log(v);
    document.getElementById('gooper-count').innerHTML = `${v.member_count} goopers worldwide`;
}
main();

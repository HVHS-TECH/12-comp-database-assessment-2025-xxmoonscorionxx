import { fb_read_sorted, fb_initialise }
    from "../fb_io.mjs";
    window.onload = sortedRead()

function sortedRead() {
    fb_initialise()
    console.log("working")
    fb_read_sorted();
}
const url = location.href;
const title = document.title;
function tweetnews(){
    const tweeturl = "https://twitter.com/intent/tweet?text=" + title + "\n" + url;
    const encodedtweeturl = encodeURI(tweeturl);
    window.open(encodedtweeturl , '_blank')
}
function tootnews(){
    const tooturl = "https://mastodon.social/share?text=" + title + "\n" + url;
    const encodedtooturl = encodeURI(tooturl);
    window.open(encodedtooturl , '_blank');
}
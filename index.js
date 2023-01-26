document.getElementById('getDetail').addEventListener('click', getApi);
function getApi() {
    var AnimeName = document.getElementById('animeName').value;
console.log(AnimeName)
const url=`https://api.waifu.pics/sfw/${AnimeName.toLowerCase()}
console.log(url);
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let output = `
        <img width="100%" height="50%" src="${data.url}" alt="" srcset="">`;
        console.log('printing data', data);
        document.getElementById('output').innerHTML = output;
    }).catch((err) => console.log(err))
}

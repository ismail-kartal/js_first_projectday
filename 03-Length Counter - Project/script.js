const calculateCharacter = () => {
    // Write your codes here
    let tweet = prompt("tweetinizi giriniz");
    let tweetCount = (tweet.length);
    console.log(tweetCount);
    let tweetLeft = 150 - tweetCount;
    if (tweetLeft < 0) {
        alert("hata tweet çok uzun");
        calculateCharacter();
    } else {
        alert(`${tweetCount} karakter yazdınız, ${tweetLeft} karakteriniz kaldı.`);
    }
}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
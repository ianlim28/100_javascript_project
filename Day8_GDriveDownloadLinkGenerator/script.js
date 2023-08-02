const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');


const generateLink = (e) => {
    e.preventDefault();
    const gLinkValue = gLink.value;
    const confirmLink = gLinkValue.includes("https://docs.google.com/document/d/");
    // 'https://docs.google.com/document/d/1jCDHh2kqknHWoyCItJVxzPcoqdszWD8kMRD5S_0x2x0/edit?usp=sharing'
    if(confirmLink) {
        const getDownloadLink = gLink.value
        .replace("https://docs.google.com/document/d/","https://drive.google.com/us?export=download&id=")
        .replace("/edit?usp=sharing","");
        
        downloadLink.value = getDownloadLink;

        function copyText(target){
            if(target.value == ""){
                alert('Please generate a download link')
            } else {
                target.select()
                navigator.clipboard.writeText(target.value)
                .then(() => {
                    alert('Value copied to clipboard');
                })
                .catch(err => {
                    alert('Failed to copy value to clipboard');
                })
            }
        }

        const copy = document.querySelector('.copy')
        copy.addEventListener('click', () => {
            return copyText(downloadLink)
        })

        // EMBED AUDIO FUNCTION
        const audio1 = "<audio width='300' height='32' controls='controls' src='";
        const audio2 = "' type='audio/mp3'></audio>";
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
        // console.log(embedAudio);

        //COPY AUDIO EMBED CODE
        const copyAudio = document.querySelector('.copy-audio');
        copyAudio.addEventListener('click', () => {
            return copyText(embedAudio)
        });
    } else {
        alert("Please enter a google drive file link");
    }

    // EMBED VIDEO
    const getVideoLink = gLink.value
    .replace("/edit?usp=sharing","")
    const video1 = '<iframe src="';
    const video2 = '/preview" width="560" height="315"></iframe>';

    const embedVideo = document.getElementById("embed-video");
    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    //COPY VIDEO EMBED CODE
    const copyVideo = document.querySelector('.copy-video');
    copyVideo.addEventListener('click', () => {
        return copyText(embedVideo)
    });

}

btn.addEventListener('click', generateLink);
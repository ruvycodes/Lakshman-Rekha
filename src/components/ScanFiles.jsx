
const ScanFiles = ({ inputUrl }) => {


    console.log(inputUrl);
    let filePath = 'C:/Users/acer/Desktop/Web-Dev/react 2/Virustotal/virustotal/mingw-get-setup.exe';
    let id;
    let status;
    let md5;

    let firebaseurl = 'https://firebasestorage.googleapis.com/v0/b/virus-d442a.appspot.com/o/uploads%2FLecture%20Planner%20_%20Chemistry%20__%20CAPF%20Rakshak%202024.pdf?alt=media&token=ae6850fd-35aa-4e52-af91-0c2423d4d454'

    const file = new File([firebaseurl], 'filename.pdf', { type: 'application/pdf' })

    const form = new FormData();

    form.append('file', file)

    const POST = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'x-apikey': '8910724209b3c2d91bc82c30a5ee81aafa24eecda39c5859d3952feb805335f1'
        }
    };

    POST.body = form;
    
        let checkkaro = "https://www.virustotal.com/_ah/upload/AMmfu6b27F7SEV76bRbkqmA9n6MCRJ4OgOwP3ZnuKHXE4ycROIc4N8UUi4-YGOXRMyJJefT4aqnGnVkiBAhyrevglGTn3Ubtjl4_zdWaCrm6CMypmc2Ti4wOeH1_iMi0iH3SyhQ1fOeRfgtw30-rtrc0sGmeSk0ZVIklkfflbqgVvQJ0mHDJ26e_asrkYzmf3Prq79GvTzudG7ms8Z6JaX5H4JKYiaXC2g0V8tcdMdvh2dlYzupG1FYb7u_ZnzJtDrWHh7fWbvfHH1bBzdAeNFB629Aie2JyOJ-608oUYFpZzdWYuN-PyXd_-pnF8ZWCIrG1igDnq-SczAAhZscVdPu0_B9be1-jNRZoRlNukTtM2-DNZP1WlV8OMffWFLAR6-Mz_CAqeo8tcNJ4rzE2Zx6tdJsi32iQ_UnDgMPvqyyOcL2ll3-sfTqeAkllqTYgCEvPRIG7NSrRe4pPnqgfA8YgKrKd1uucQQd_21E5Gr9vFCxYSdCb7AfwX1uTi11kRYFTgaZ2--n-HpZUTvS8S0-XhCB3m10lkP2nVvuLzBFeWZ73DU8t7F_CWOcL2oQh10b7ViMd4bjvr2cGI5k2kSnumdcsfxDKCdG8XctQ5jJXsgQAP8pMR7UUGOwUWDPUZMDt2al4Q4lZZQ2Tc2V0A-QqirqwuBt7Sgr8pbbHOHq_XAvgX_IhnvVumRi7w3VuPzXwbMioKWovpKiEUPzZ4rGfXV26SCy3VkRKbi8vHT9U8TPQBAzzZSfHwYALCmGFFfyaGBjxIp53ntspImnSLQLZ--SEU4sS-BSPyIuXjX4CDluzsgPtTXqUJdfjS7M4xJNWPaLDFu_n_GQWDTUnEoULuZlG--axU2DoTzaYI7_vMPMDDo8UuppNEIe_N9dgKxQQ-KmBZkCauhHVhpKpFaQUURR7i-rE3H3NDp0FGujMiTL6quyTUQiv1tfWQggDc7ZGg60TSNMxVIGzJs_HIdfoQgIf5HT124F6191QOgnWQlozuu_Po2zJdRMeabJGuHyVpEfmdKMr_RXyp9koknznYJ3j1vHZrhzx-WtsQGehIOlSLarvDyK_s1JxcJgPH-ksclpUwWn17o8zIc5zqXBDSbwWXQmPLN-DLVpcOnOs5mgdvff8jAAPcSvfA17PX2tJKk_6RD2Zp18hvM3xR06-Tmgx4dTDlgsT68vrR3py3TAd9LMxZRrQwd6BDaZpa-ThoYeRIyjbCnNgTa6ReO77Wmajeq5wSw/ALBNUaYAAAAAZeCs0h-Z9NP0bXDX31c2H0ep-XI8l14P/"
            

    //asddddddddddddddddddd
    const GET = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-apikey': '8910724209b3c2d91bc82c30a5ee81aafa24eecda39c5859d3952feb805335f1'
        }
    };

    const POST_URL = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
            'x-apikey': '8910724209b3c2d91bc82c30a5ee81aafa24eecda39c5859d3952feb805335f1'
        },
        body: new URLSearchParams({ url: inputUrl })
    };



    async function checkFile() {
        let raw = await fetch(checkkaro, POST)
        let data = await raw.json()
        id = data.data.id
        console.log(id);
        getFileAnalysis()

    }

    async function getFileAnalysis() {
        let raw = await fetch(`https://www.virustotal.com/api/v3/analyses/${id}`, GET)
        let data = await raw.json()
        md5 = data.meta.file_info.md5
        status = data.data.attributes.status
        if(status == "completed") {
        getVotes()
        getComments()
        }
        console.log(data);

       
    }

    async function getVotes() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/files/${md5}/votes?limit=10`, GET)
        let data = await raw.json()
        console.log(data);

    }

    async function getComments() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/files/${md5}/comments?limit=10`, GET)
        let data = await raw.json()
        console.log(data);

    }

    async function checkUrl() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/urls`, POST_URL)
        let data = await raw.json()
        id = data.data.id
        console.log(data);
        getUrlAnalysis()

    }

    async function getUrlAnalysis() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/analyses/${id}`, GET)
        let data = await raw.json()
        md5 = data.meta.url_info.id
        status = data.data.attributes.status
        console.log(data);
        getUrlComments()
        getUrlVotes()

    }

    async function getUrlComments() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/urls/${md5}/comments?limit=10`, GET)
        let data = await raw.json()
        console.log(data);

    }

    async function getUrlVotes() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/urls/${md5}/votes?limit=10`, GET)
        let data = await raw.json()
        console.log(data);

    }

    const handleCheckFiles = () => {

        const checkInterval = () => {
            checkFile()
                .then(() => {
                    if (status !== "completed") {
                        setTimeout(checkInterval, 20000);
                    }
                })
                .catch(error => {
                    console.error("Error checking file:", error);
                });
        };
        checkInterval();

        // const id = setInterval(checkFile, 20000);
        // setIntervalId(id);
        // console.log("Interval ID:", id);
        // checkFile()
    }

    const handleCheckUrls = () => {

        const checkInterval = () => {
            checkUrl()
                .then(() => {
                    if (status !== "completed") {
                        setTimeout(checkInterval, 15000);
                    }
                })
                .catch(error => {
                    console.error("Error checking file:", error);
                });
        };
        checkInterval();


    }

    return (
        <div className="flex">
            <img className="w-14 h-14 mr-2" src="antivirus.gif" alt="" />
            <button className="mr-28 btn rounded-md p-2 m-2 border border-blue-400" onClick={handleCheckFiles}>check files</button>
            <img className="mt-2 ml-2 w-10 h-10" src="hacker.png" alt="" />
            <button className="btn rounded-md p-2 m-2 border border-blue-400" onClick={handleCheckUrls}>check urls</button>
        </div>
    )
}

export default ScanFiles
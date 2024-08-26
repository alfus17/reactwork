import axios from 'axios';

function getGitJsonData(){

    let getData = null
 
    return    async () => {
        const response = await axios.get('https://raw.githubusercontent.com/professorjiwon/data/main/data2.json');
       
        return response.data;
    }


}

export default getGitJsonData;
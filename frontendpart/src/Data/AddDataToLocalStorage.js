import axios from "axios";

export const AddDataToLocalStorage = async () => {

        try{
            const {data} = await axios.get('https://api.github.com/repos/pallets/click/issues?state=all&per_page=300');
           return data;
        }catch(error) {
            throw error;
        }
   
}

// export default AddDataToLocalStorage;
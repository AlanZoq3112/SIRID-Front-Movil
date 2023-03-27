import AxiosClient from "../config/axios";

export default {
	goGet(endPoint) {
		return AxiosClient.get(endPoint);
	},
	doPost(endPoint, payLoad) {
		return AxiosClient.post(endPoint, payLoad);
	},
	doPut(endPoint, payLoad) {
		return AxiosClient.put(endPoint, payLoad);
	},
	doDelete(endPoint) {
		return AxiosClient.delete(endPoint);
	},

	/*doPostblob(endPoint, payLoad) {
        return AxiosClient.post(endPoint, payLoad, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }*/
};

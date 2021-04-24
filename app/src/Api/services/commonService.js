class CommonRequest {

    constructor(instance){
        this.instance=instance;
    }

    getResource = (url) => new Promise((res, rej) => {
        this.instance.get(url)
            .then(result => res(result.data))
            .catch(e => rej(e));
    })

    addResource = (url, body) => new Promise((res, rej) => {
        this.instance.post(url, body)
            .then(result => res(result))
            .catch(e => rej(e));
    })

    updateResource = (url, body) => new Promise((res, rej) => {
        this.instance.patch(url, body)
            .then(result => res(result))
            .catch(e => rej(e));
    })

    deleteResource = (url) => new Promise((res, rej) => {
        this.instance.delete(url)
            .then(result => res(result))
            .catch(e => rej(e));
    })
}

export default CommonRequest;
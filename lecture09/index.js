const promisify = function (fn){
    return function(){
        return new Promise((resolve,reject) => {
            fn(...arguments,(err,result) =>{
                if(err)
                    return reject(err)
                resolve(result)
            })
        })
    }
}

function download (url,callback) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("New Error")
        }, 1000)
    })
    return promise
}

const downloadPromise =promisify(download)
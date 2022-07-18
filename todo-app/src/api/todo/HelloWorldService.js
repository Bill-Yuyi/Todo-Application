import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        //console.log('hello!!')
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        //console.log('hello!!')
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathService(name) {
        //console.log('hello!!')
        //let username = 'user'
        //let password = 'password'
        //let basicAuthHeader = 'Basic' + window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
    }
}

export default new HelloWorldService()
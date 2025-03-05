const regester = (username) => {
    if(username === 'mohamadalijavadi'){
        return true
    }
    return false
}

const getMe = () => {
    return {
        explain: 'i am mohamad ali',
        name: 'mohamd ali',
        familyName: 'javadi',
        username:'mohamdalijavadi'
    }
}


const login = (username2) => {
    if (username2 === 'mohamadalijavadi2') {
        return false
    }
    return 'false'
}


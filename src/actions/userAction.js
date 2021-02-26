import axios from 'axios'

export const startRegister = (formData, redirect) => {
    return () => {
        axios.post('/users/register', formData)
            .then(response => {
                if(response.data.hasOwnProperty('error')) {
                    alert(response.data.message)
                } else {
                    redirect()
                }
            })
    }
}
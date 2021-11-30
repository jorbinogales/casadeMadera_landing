const localhost = 'https://api.servidiesel.com.ve';

const enviar = (e) => {
    e.preventDefault();
    const fisrt_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const btn_success =$('#btn-sucess');
    console.log(e);
    axios.post(localhost +'/people', {
           fisrt_name,
           last_name,
           email,
           phone,
           message,
    })
    .then(function (response) {
        if(response.data.statusCode == 201){
            btn_success.click();
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    document.getElementById('form').reset();
}
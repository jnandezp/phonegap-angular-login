var server = 'http://localhost/';
var userToken = 'jnandezp';
var passToken = '123123';

function getToken(){
  var tokenExist = localStorage.getItem('tokenWebService');
  if (!tokenExist) {
    $.ajax({
      dataType: 'json',
      data: { user: userToken, password: passToken },
      method: "post",
      processData: true,
      url: server+"token.php",
      success: function searchSuccess(resp) {
        if (resp.token != undefined && resp.token != '') {
          localStorage.setItem('tokenWebService', resp.token);
        }
      },
      error: function searchError(xhr, err) {
        // myApp.alert('An error has occurred', 'Login Error');
      }
    });
  }
}



function userLogin(email,password) {
  var tokenExist = localStorage.getItem('tokenWebService');
  if (!tokenExist) {
    getToken();
  }

  // Simple validate
  if (!email || !password) {
    alert('Please enter email and password', 'Login Error');
    return;
  }

  $.ajax({
    url: server+"login.php",
    headers: {
      'Authorization':'Bear '+tokenExist,
    },
    method: "post",
    dataType: 'json',
    processData: true,
    data: {
      email: email,
      password: password
    },
    success: function searchSuccess(resp) {
      var stringUser = JSON.stringify(resp);
      localStorage.setItem('stringUser', stringUser);
      window.location = '/';
    },
    error: function searchError(xhr, err) {
      alert('Error al tratar de iniciar sesion', 'Login Error');
    }
  });
}

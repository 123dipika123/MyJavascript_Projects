$.ajax({
    type: 'get',
    url: 'https://reqres.in/api/users',
    success: function (responce) {
        console.log(responce.data)

       for( var i=0; i < responce.data.length; i++){
        var trow = `<tr> <td> ${responce.data[i].id} </td> <td> ${responce.data[i].first_name} </td>
        <td> ${responce.data[i].last_name} </td><td> ${responce.data[i].email} </td> 
        <td><img src ="${responce.data[i].avatar}"</td> </tr>`

        $('#tbody').append(trow);
       }
        
        $('#covidtable').DataTable()
      
    },
    error: function (error) {
        console.log(error)
    }
})
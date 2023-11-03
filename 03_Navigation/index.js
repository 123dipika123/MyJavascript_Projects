var navstatus = 0;

function DisplayNav(){
    if(!navstatus){
        $('.maindiv').css('width','100%')
        $('li').css('display','block')
        $('li').css('color','black')
        navstatus =1
    }else{
        $('.maindiv').css('width','0%')
        $('li').css('display','none')
       
        navstatus =0
    }
}
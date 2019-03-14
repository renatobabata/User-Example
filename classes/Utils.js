// metodos estaticos , utilizado em situacoes onde os metodos serao sempre utilizados

class Utils{

    static dateFormat(date){

        return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();

    }
}
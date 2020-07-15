function getFormatedDate(){
    const now = new Date();
    const formatDate = now.getFullYear() + '-' +  
                     ('0' + (now.getMonth() + 1)).slice(-2) + '-' + 
                     ('0' + now.getDate()).slice(-2);
    return formatDate;
}

module.exports.getFormatedDate = getFormatedDate;
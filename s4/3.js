String.prototype.format= function(format){
    let result = this
    for(let prop in format){
        result = result ('{' + prop + '}', format[prop])
    }
    return result
}
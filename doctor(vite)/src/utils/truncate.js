export const truncate = (str, max) =>{
    if(str == null) return ''
    return str.length > max ? str.substring(0, max-1) + '...' : str;
}
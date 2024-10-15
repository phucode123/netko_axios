import jwt from 'jsonwebtoken';

// Giải mã token
function decodeToken(token: any): any {
    // console.log(token);
    const decodedToken:any = jwt.decode(token);
    if (decodedToken) {
     //console.log('Decoded Token:', decodedToken);
        return decodedToken.exp
    } else {
        console.error('Token không hợp lệ hoặc không thể giải mã.');
    }
    return null
}
function decodeTime(end: number): any {
    const currentTime = Math.floor(Date.now() / 1000);
    const remaining = end - currentTime; //thười gian còn lại
    if (remaining <= 0) {
        return null
    }
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    return `${minutes} phút ${seconds} giây còn lại`
}
export { decodeToken, decodeTime }
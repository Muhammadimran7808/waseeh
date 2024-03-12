export const apikeys =()=>{
    const username = `ck_c82fe7f124dada7a39c6bde2996c604428840dbb`;
    const password = `cs_a4ad050a78b860f8deb9c90f102b7821ba76b0db`;
    const auth = btoa(`${username}:${password}`)
    return auth;
}
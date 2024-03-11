

export const apikeys =()=>{
    const username = `ck_f2b6d4936612cb156aa183db4138ae56a618213f`
    const password =`cs_f2aabe65c45edaee05537e96369883323580280b`
    const auth = btoa(`${username}:${password}`)
    return auth;
}
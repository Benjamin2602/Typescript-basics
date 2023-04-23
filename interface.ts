interface googleUser {
    name: string
    id: number
    readonly dbId : number
    googleId?: number
    //can had another property
    // startTrail: ()=> string
    startTrail?(): string
    getCoupon?(couponName:string): number
}

// reopening of interface is possible
// maybe other developer might add new property using interface without knowing the existing property
interface googleUser {
    // can add new property
    // can add new method
    githubToken: string
}

// can add inheritance

interface Admin extends googleUser {
    role: "admin" | "superAdmin"
}

const user: Admin = {name: "ben", id: 1234, dbId: 1234,
// another interface property
githubToken: "1234",
// inherited property
role: "admin",
// method from interface
startTrail : () =>{
    return "start trail"
},
getCoupon : (couponName: "ben2602") =>{
    return 1234             
}

}

export{}
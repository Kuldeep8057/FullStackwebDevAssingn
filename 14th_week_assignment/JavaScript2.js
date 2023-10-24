function calculateTotalCartValue(){
    let totalCart = 0
    for (let i = 0; i < arguments.length; i++) {
        totalCart += arguments[i]
    }
    console.log(totalCart)
    return totalCart
}

calculateTotalCartValue(125,20,30)
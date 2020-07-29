function weatherWear(temperature){
    
    if(temperature<10){
        return "Wear winter jacket";
    }
    else if(temperature>10 && temperature<25) {
        return "Wear normal jacket";
        
    } else {
        return "Wear summer clothes";
        
    }

}
console.log(weatherWear(30));
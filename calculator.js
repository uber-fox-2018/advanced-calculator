class Calculator {
    constructor(){
        this.getNum = []
        this.total = 0
    }
    getNumber(num){
        this.getNum.push(num)
        return this
    }
    tambah(){
        for(let i = 0 ; i < this.getNum.length ; i++){
            if(this.getNum.length < 3){
                if(i === 0){
                    this.total = this.getNum[i]
                }else{
                    this.total+=this.getNum[i]
                }
                
            }else{
                if(i === this.getNum.length-1){
                    this.total+=this.getNum[i]
                }
            }
        }
        return this
    }
    kurang(){
        for(var i = 0 ; i < this.getNum.length ; i++){
            if(this.getNum.length < 3){
                if(i === 0){
                    this.total = this.getNum[i]
                }else{
                    this.total-=this.getNum[i]
                }
                
            }else{
                if(i === this.getNum.length-1){
                    this.total-=this.getNum[i]
                }
            }
        }
        return this
    }
    kali(){
        for(var i = 0 ; i < this.getNum.length ; i++){
            if(this.getNum.length < 3){
                if(i === 0){
                    this.total = this.getNum[i]
                }else{
                    this.total*=this.getNum[i]
                }
                
            }else{
                if(i === this.getNum.length-1){
                    this.total*=this.getNum[i]
                }
            }
        }
        return this
    }
    bagi(){
        for(var i = 0 ; i < this.getNum.length ; i++){
            if(this.getNum.length < 3){
                if(i === 0){
                    this.total = this.getNum[i]
                }else{
                    this.total/=this.getNum[i]
                }
                
            }else{
                if(i === this.getNum.length-1){
                    this.total/=this.getNum[i]
                }
            }
        }
        return this
    }
    pangkat(num){
        for(var i = 0 ; i < num ; i++){
            if(i === 0){
                this.total = this.getNum[i]
            }else{
                this.total*=this.total
            }
            
        }
        return this
    }
    akar(){
        this.total = this.getNum
        return Math.sqrt(this.total)
    }

}

module.exports = Calculator

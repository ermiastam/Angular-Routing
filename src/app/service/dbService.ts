
export class mydbService{
    constructor(){}
    data =[ {id:'1',name:'Assad Saad',StudId:'12345',email:'asaad@mum.edu'},
            {id:'2',name:'Ermias Tesfaye',StudId:'223344',email:'ermias@mum.edu'},
            {id:'3',name:'Robel Goitom',StudId:'556644',email:'robel@mum.edu'},
            {id:'4',name:'James Bond',StudId:'221155',email:'james@mum.edu'},
            {id:'5',name:'Abebe Kebede',StudId:'667788',email:'abebe@mum.edu'},
            {id:'6',name:'Elias Taye',StudId:'443311',email:'elias@mum.edu'}];
   
    getData(){
   return this.data;
    }
index = 0;
getStudent(id){
    while(this.data.length >= this.index){
       if(this.data[this.index].id==id){
        return this.data[this.index];       
       } else this.index=this.index+1;
    }
    return null;
}

}